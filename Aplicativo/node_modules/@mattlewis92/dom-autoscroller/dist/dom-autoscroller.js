var autoScroll = (function () {
    'use strict';

    function getDef(f, d) {
        if (typeof f === 'undefined') {
            return typeof d === 'undefined' ? f : d;
        }

        return f;
    }
    function boolean(func, def) {

        func = getDef(func, def);

        if (typeof func === 'function') {
            return function f() {
                var arguments$1 = arguments;

                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments$1[_key];
                }

                return !!func.apply(this, args);
            };
        }

        return !!func ? function () {
            return true;
        } : function () {
            return false;
        };
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

    /**
     * Returns `true` if provided input is Element.
     * @name isElement
     * @param {*} [input]
     * @returns {boolean}
     */
    var isElement$1 = function (input) {
      return input != null && (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && input.nodeType === 1 && _typeof(input.style) === 'object' && _typeof(input.ownerDocument) === 'object';
    };

    function indexOfElement(elements, element){
        element = resolveElement(element, true);
        if(!isElement$1(element)) { return -1; }
        for(var i=0; i<elements.length; i++){
            if(elements[i] === element){
                return i;
            }
        }
        return -1;
    }

    function hasElement(elements, element){
        return -1 !== indexOfElement(elements, element);
    }

    function pushElements(elements, toAdd){

        for(var i=0; i<toAdd.length; i++){
            if(!hasElement(elements, toAdd[i]))
                { elements.push(toAdd[i]); }
        }

        return toAdd;
    }

    function addElements(elements){
        var arguments$1 = arguments;

        var toAdd = [], len = arguments.length - 1;
        while ( len-- > 0 ) { toAdd[ len ] = arguments$1[ len + 1 ]; }

        toAdd = toAdd.map(resolveElement);
        return pushElements(elements, toAdd);
    }

    function removeElements(elements){
        var arguments$1 = arguments;

        var toRemove = [], len = arguments.length - 1;
        while ( len-- > 0 ) { toRemove[ len ] = arguments$1[ len + 1 ]; }

        return toRemove.map(resolveElement).reduce(function (last, e){

            var index = indexOfElement(elements, e);

            if(index !== -1)
                { return last.concat(elements.splice(index, 1)); }
            return last;
        }, []);
    }

    function resolveElement(element, noThrow){
        if(typeof element === 'string'){
            try{
                return document.querySelector(element);
            }catch(e){
                throw e;
            }

        }

        if(!isElement$1(element) && !noThrow){
            throw new TypeError((element + " is not a DOM element."));
        }
        return element;
    }

    function createPointCB(object, options) {

        // A persistent object (as opposed to returned object) is used to save memory
        // This is good to prevent layout thrashing, or for games, and such

        // NOTE
        // This uses IE fixes which should be OK to remove some day. :)
        // Some speed will be gained by removal of these.

        // pointCB should be saved in a variable on return
        // This allows the usage of element.removeEventListener

        options = options || {};

        var allowUpdate = boolean(options.allowUpdate, true);

        /*if(typeof options.allowUpdate === 'function'){
            allowUpdate = options.allowUpdate;
        }else{
            allowUpdate = function(){return true;};
        }*/

        return function pointCB(event) {

            event = event || window.event; // IE-ism
            object.target = event.target || event.srcElement || event.originalTarget;
            object.element = this;
            object.type = event.type;

            if (!allowUpdate(event)) {
                return;
            }

            // Support touch
            // http://www.creativebloq.com/javascript/make-your-site-work-touch-devices-51411644

            if (event.targetTouches) {
                object.x = event.targetTouches[0].clientX;
                object.y = event.targetTouches[0].clientY;
                object.pageX = event.targetTouches[0].pageX;
                object.pageY = event.targetTouches[0].pageY;
                object.screenX = event.targetTouches[0].screenX;
                object.screenY = event.targetTouches[0].screenY;
            } else {

                // If pageX/Y aren't available and clientX/Y are,
                // calculate pageX/Y - logic taken from jQuery.
                // (This is to support old IE)
                // NOTE Hopefully this can be removed soon.

                if (event.pageX === null && event.clientX !== null) {
                    var eventDoc = event.target && event.target.ownerDocument || document;
                    var doc = eventDoc.documentElement;
                    var body = eventDoc.body;

                    object.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
                    object.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
                } else {
                    object.pageX = event.pageX;
                    object.pageY = event.pageY;
                }

                // pageX, and pageY change with page scroll
                // so we're not going to use those for x, and y.
                // NOTE Most browsers also alias clientX/Y with x/y
                // so that's something to consider down the road.

                object.x = event.clientX;
                object.y = event.clientY;

                object.screenX = event.screenX;
                object.screenY = event.screenY;
            }

            object.clientX = object.x;
            object.clientY = object.y;
        };

        //NOTE Remember accessibility, Aria roles, and labels.
    }

    function createWindowRect() {
        var props = {
            top: { value: 0, enumerable: true },
            left: { value: 0, enumerable: true },
            right: { value: window.innerWidth, enumerable: true },
            bottom: { value: window.innerHeight, enumerable: true },
            width: { value: window.innerWidth, enumerable: true },
            height: { value: window.innerHeight, enumerable: true },
            x: { value: 0, enumerable: true },
            y: { value: 0, enumerable: true }
        };

        if (Object.create) {
            return Object.create({}, props);
        } else {
            var rect = {};
            Object.defineProperties(rect, props);
            return rect;
        }
    }

    function getClientRect(el) {
        if (el === window) {
            return createWindowRect();
        } else {
            try {
                var rect = el.getBoundingClientRect();
                if (rect.x === undefined) {
                    rect.x = rect.left;
                    rect.y = rect.top;
                }
                return rect;
            } catch (e) {
                throw new TypeError("Can't call getBoundingClientRect on " + el);
            }
        }
    }

    function pointInside(point, el) {
        var rect = getClientRect(el);
        return point.y > rect.top && point.y < rect.bottom && point.x > rect.left && point.x < rect.right;
    }

    var objectCreate = void 0;
    if (typeof Object.create != 'function') {
      objectCreate = function (undefined$1) {
        var Temp = function Temp() {};
        return function (prototype, propertiesObject) {
          if (prototype !== Object(prototype) && prototype !== null) {
            throw TypeError('Argument must be an object, or null');
          }
          Temp.prototype = prototype || {};
          var result = new Temp();
          Temp.prototype = null;
          if (propertiesObject !== undefined$1) {
            Object.defineProperties(result, propertiesObject);
          }

          // to imitate the case of Object.create(null)
          if (prototype === null) {
            result.__proto__ = null;
          }
          return result;
        };
      }();
    } else {
      objectCreate = Object.create;
    }

    var objectCreate$1 = objectCreate;

    var mouseEventProps = ['altKey', 'button', 'buttons', 'clientX', 'clientY', 'ctrlKey', 'metaKey', 'movementX', 'movementY', 'offsetX', 'offsetY', 'pageX', 'pageY', 'region', 'relatedTarget', 'screenX', 'screenY', 'shiftKey', 'which', 'x', 'y'];

    function createDispatcher(element) {

        var defaultSettings = {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            ctrlKey: false,
            shiftKey: false,
            altKey: false,
            metaKey: false,
            button: 0,
            buttons: 1,
            relatedTarget: null,
            region: null
        };

        if (element !== undefined) {
            element.addEventListener('mousemove', onMove);
        }

        function onMove(e) {
            for (var i = 0; i < mouseEventProps.length; i++) {
                defaultSettings[mouseEventProps[i]] = e[mouseEventProps[i]];
            }
        }

        var dispatch = function () {
            if (MouseEvent) {
                return function m1(element, initMove, data) {
                    var evt = new MouseEvent('mousemove', createMoveInit(defaultSettings, initMove));

                    //evt.dispatched = 'mousemove';
                    setSpecial(evt, data);

                    return element.dispatchEvent(evt);
                };
            } else if (typeof document.createEvent === 'function') {
                return function m2(element, initMove, data) {
                    var settings = createMoveInit(defaultSettings, initMove);
                    var evt = document.createEvent('MouseEvents');

                    evt.initMouseEvent("mousemove", true, //can bubble
                    true, //cancelable
                    window, //view
                    0, //detail
                    settings.screenX, //0, //screenX
                    settings.screenY, //0, //screenY
                    settings.clientX, //80, //clientX
                    settings.clientY, //20, //clientY
                    settings.ctrlKey, //false, //ctrlKey
                    settings.altKey, //false, //altKey
                    settings.shiftKey, //false, //shiftKey
                    settings.metaKey, //false, //metaKey
                    settings.button, //0, //button
                    settings.relatedTarget //null //relatedTarget
                    );

                    //evt.dispatched = 'mousemove';
                    setSpecial(evt, data);

                    return element.dispatchEvent(evt);
                };
            } else if (typeof document.createEventObject === 'function') {
                return function m3(element, initMove, data) {
                    var evt = document.createEventObject();
                    var settings = createMoveInit(defaultSettings, initMove);
                    for (var name in settings) {
                        evt[name] = settings[name];
                    }

                    //evt.dispatched = 'mousemove';
                    setSpecial(evt, data);

                    return element.dispatchEvent(evt);
                };
            }
        }();

        function destroy() {
            if (element) { element.removeEventListener('mousemove', onMove, false); }
            defaultSettings = null;
        }

        return {
            destroy: destroy,
            dispatch: dispatch
        };
    }

    function createMoveInit(defaultSettings, initMove) {
        initMove = initMove || {};
        var settings = objectCreate$1(defaultSettings);
        for (var i = 0; i < mouseEventProps.length; i++) {
            if (initMove[mouseEventProps[i]] !== undefined) { settings[mouseEventProps[i]] = initMove[mouseEventProps[i]]; }
        }

        return settings;
    }

    function setSpecial(e, data) {
        console.log('data ', data);
        e.data = data || {};
        e.dispatched = 'mousemove';
    }

    var prefix = [ 'webkit', 'moz', 'ms', 'o' ];

    var requestFrame = (function () {

        if (typeof window === "undefined") {
            return function () {};
        }

        for ( var i = 0, limit = prefix.length ; i < limit && ! window.requestAnimationFrame ; ++i ) {
            window.requestAnimationFrame = window[ prefix[ i ] + 'RequestAnimationFrame' ];
        }

        if ( ! window.requestAnimationFrame ) {
            var lastTime = 0;

            window.requestAnimationFrame = function (callback) {
                var now   = new Date().getTime();
                var ttc   = Math.max( 0, 16 - now - lastTime );
                var timer = window.setTimeout( function () { return callback( now + ttc ); }, ttc );

                lastTime = now + ttc;

                return timer;
            };
        }

        return window.requestAnimationFrame.bind( window );
    })();

    var cancelFrame = (function () {

        if (typeof window === "undefined") {
            return function () {};
        }

        for ( var i = 0, limit = prefix.length ; i < limit && ! window.cancelAnimationFrame ; ++i ) {
            window.cancelAnimationFrame = window[ prefix[ i ] + 'CancelAnimationFrame' ] || window[ prefix[ i ] + 'CancelRequestAnimationFrame' ];
        }

        if ( ! window.cancelAnimationFrame ) {
            window.cancelAnimationFrame = function (timer) {
                window.clearTimeout( timer );
            };
        }

        return window.cancelAnimationFrame.bind( window );
    })();

    function AutoScroller(elements, options){
        if ( options === void 0 ) options = {};

        var self = this;
        var maxSpeed = 4, scrolling = false;

        if (typeof options.margin !== 'object') {
            var margin = options.margin || -1;

            this.margin = {
                left: margin,
                right: margin,
                top: margin,
                bottom: margin
            };
        } else {
            this.margin = options.margin;
        }

        //this.scrolling = false;
        this.scrollWhenOutside = options.scrollWhenOutside || false;

        var point = {},
            pointCB = createPointCB(point),
            dispatcher = createDispatcher(),
            down = false;

        window.addEventListener('mousemove', pointCB, false);
        window.addEventListener('touchmove', pointCB, false);

        if(!isNaN(options.maxSpeed)){
            maxSpeed = options.maxSpeed;
        }

        if (typeof maxSpeed !== 'object') {
            maxSpeed = {
                left: maxSpeed,
                right: maxSpeed,
                top: maxSpeed,
                bottom: maxSpeed
            };
        }

        this.autoScroll = boolean(options.autoScroll);
        this.syncMove = boolean(options.syncMove, false);

        this.destroy = function(forceCleanAnimation) {
            window.removeEventListener('mousemove', pointCB, false);
            window.removeEventListener('touchmove', pointCB, false);
            window.removeEventListener('mousedown', onDown, false);
            window.removeEventListener('touchstart', onDown, false);
            window.removeEventListener('mouseup', onUp, false);
            window.removeEventListener('touchend', onUp, false);
            window.removeEventListener('pointerup', onUp, false);
            window.removeEventListener('mouseleave', onMouseOut, false);

            window.removeEventListener('mousemove', onMove, false);
            window.removeEventListener('touchmove', onMove, false);

            window.removeEventListener('scroll', setScroll, true);
            elements = [];
            if(forceCleanAnimation){
              cleanAnimation();
            }
        };

        this.add = function(){
            var element = [], len = arguments.length;
            while ( len-- ) element[ len ] = arguments[ len ];

            addElements.apply(void 0, [ elements ].concat( element ));
            return this;
        };

        this.remove = function(){
            var element = [], len = arguments.length;
            while ( len-- ) element[ len ] = arguments[ len ];

            return removeElements.apply(void 0, [ elements ].concat( element ));
        };

        var hasWindow = null, windowAnimationFrame;

        if(Object.prototype.toString.call(elements) !== '[object Array]'){
            elements = [elements];
        }

        (function(temp){
            elements = [];
            temp.forEach(function(element){
                if(element === window){
                    hasWindow = window;
                }else {
                    self.add(element);
                }
            });
        }(elements));

        Object.defineProperties(this, {
            down: {
                get: function(){ return down; }
            },
            maxSpeed: {
                get: function(){ return maxSpeed; }
            },
            point: {
                get: function(){ return point; }
            },
            scrolling: {
                get: function(){ return scrolling; }
            }
        });

        var current = null, animationFrame;

        window.addEventListener('mousedown', onDown, false);
        window.addEventListener('touchstart', onDown, false);
        window.addEventListener('mouseup', onUp, false);
        window.addEventListener('touchend', onUp, false);

        /*
        IE does not trigger mouseup event when scrolling.
        It is a known issue that Microsoft won't fix.
        https://connect.microsoft.com/IE/feedback/details/783058/scrollbar-trigger-mousedown-but-not-mouseup
        IE supports pointer events instead
        */
        window.addEventListener('pointerup', onUp, false);

        window.addEventListener('mousemove', onMove, false);
        window.addEventListener('touchmove', onMove, false);

        window.addEventListener('mouseleave', onMouseOut, false);

        window.addEventListener('scroll', setScroll, true);

        function setScroll(e){

            for(var i=0; i<elements.length; i++){
                if(elements[i] === e.target){
                    scrolling = true;
                    break;
                }
            }

            if(scrolling){
                requestFrame(function (){ return scrolling = false; });
            }
        }

        function onDown(){
            down = true;
        }

        function onUp(){
            down = false;
            cleanAnimation();
        }
        function cleanAnimation(){
          cancelFrame(animationFrame);
          cancelFrame(windowAnimationFrame);
        }
        function onMouseOut(){
            down = false;
        }

        function getTarget(target){
            if(!target){
                return null;
            }

            if(current === target){
                return target;
            }

            if(hasElement(elements, target)){
                return target;
            }

            while(target = target.parentNode){
                if(hasElement(elements, target)){
                    return target;
                }
            }

            return null;
        }

        function getElementUnderPoint(){
            var underPoint = null;

            for(var i=0; i<elements.length; i++){
                if(inside(point, elements[i])){
                    underPoint = elements[i];
                }
            }

            return underPoint;
        }


        function onMove(event){

            if(!self.autoScroll()) { return; }

            if(event['dispatched']){ return; }

            var target = event.target, body = document.body;

            if(current && !inside(point, current)){
                if(!self.scrollWhenOutside){
                    current = null;
                }
            }

            if(target && target.parentNode === body){
                //The special condition to improve speed.
                target = getElementUnderPoint();
            }else {
                target = getTarget(target);

                if(!target){
                    target = getElementUnderPoint();
                }
            }


            if(target && target !== current){
                current = target;
            }

            if(hasWindow){
                cancelFrame(windowAnimationFrame);
                windowAnimationFrame = requestFrame(scrollWindow);
            }


            if(!current){
                return;
            }

            cancelFrame(animationFrame);
            animationFrame = requestFrame(scrollTick);
        }

        function scrollWindow(){
            autoScroll(hasWindow);

            cancelFrame(windowAnimationFrame);
            windowAnimationFrame = requestFrame(scrollWindow);
        }

        function scrollTick(){

            if(!current){
                return;
            }

            autoScroll(current);

            cancelFrame(animationFrame);
            animationFrame = requestFrame(scrollTick);

        }


        function autoScroll(el){
            var rect = getClientRect(el), scrollx, scrolly;

            if(point.x < rect.left + self.margin.left){
                scrollx = Math.floor(
                    Math.max(-1, (point.x - rect.left) / self.margin.left - 1) * self.maxSpeed.left
                );
            }else if(point.x > rect.right - self.margin.right){
                scrollx = Math.ceil(
                    Math.min(1, (point.x - rect.right) / self.margin.right + 1) * self.maxSpeed.right
                );
            }else {
                scrollx = 0;
            }

            if(point.y < rect.top + self.margin.top){
                scrolly = Math.floor(
                    Math.max(-1, (point.y - rect.top) / self.margin.top - 1) * self.maxSpeed.top
                );
            }else if(point.y > rect.bottom - self.margin.bottom){
                scrolly = Math.ceil(
                    Math.min(1, (point.y - rect.bottom) / self.margin.bottom + 1) * self.maxSpeed.bottom
                );
            }else {
                scrolly = 0;
            }

            if(self.syncMove()){
                /*
                Notes about mousemove event dispatch.
                screen(X/Y) should need to be updated.
                Some other properties might need to be set.
                Keep the syncMove option default false until all inconsistencies are taken care of.
                */
                dispatcher.dispatch(el, {
                    pageX: point.pageX + scrollx,
                    pageY: point.pageY + scrolly,
                    clientX: point.x + scrollx,
                    clientY: point.y + scrolly
                });
            }

            setTimeout(function (){

                if(scrolly){
                    scrollY(el, scrolly);
                }

                if(scrollx){
                    scrollX(el, scrollx);
                }

            });
        }

        function scrollY(el, amount){
            if(el === window){
                window.scrollTo(el.pageXOffset, el.pageYOffset + amount);
            }else {
                el.scrollTop += amount;
            }
        }

        function scrollX(el, amount){
            if(el === window){
                window.scrollTo(el.pageXOffset + amount, el.pageYOffset);
            }else {
                el.scrollLeft += amount;
            }
        }

    }

    function AutoScrollerFactory(element, options){
        return new AutoScroller(element, options);
    }

    function inside(point, el, rect){
        if(!rect){
            return pointInside(point, el);
        }else {
            return (point.y > rect.top && point.y < rect.bottom &&
                    point.x > rect.left && point.x < rect.right);
        }
    }

    /*
    git remote add origin https://github.com/hollowdoor/dom_autoscroller.git
    git push -u origin master
    */

    return AutoScrollerFactory;

}());
