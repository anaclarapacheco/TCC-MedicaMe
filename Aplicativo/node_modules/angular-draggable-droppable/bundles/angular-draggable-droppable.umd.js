(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('rxjs'), require('@angular/common'), require('@angular/core'), require('rxjs/operators')) :
	typeof define === 'function' && define.amd ? define(['rxjs', '@angular/common', '@angular/core', 'rxjs/operators'], factory) :
	(global = global || self, global['angular-draggable-droppable'] = factory(global.rxjs, global.ng.common, global.ng.core, global.rxjs.operators));
}(this, (function (rxjs, common, core, operators) { 'use strict';

	rxjs = rxjs && Object.prototype.hasOwnProperty.call(rxjs, 'default') ? rxjs['default'] : rxjs;
	common = common && Object.prototype.hasOwnProperty.call(common, 'default') ? common['default'] : common;
	core = core && Object.prototype.hasOwnProperty.call(core, 'default') ? core['default'] : core;
	operators = operators && Object.prototype.hasOwnProperty.call(operators, 'default') ? operators['default'] : operators;

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

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

	var angularDraggableDroppable_umd = createCommonjsModule(function (module, exports) {
	(function (global, factory) {
	     factory(exports, rxjs, common, AutoScrollerFactory, core, operators) ;
	}(commonjsGlobal, (function (exports,rxjs,common,autoScroll,i0,operators) {
	    autoScroll = autoScroll && autoScroll.hasOwnProperty('default') ? autoScroll['default'] : autoScroll;

	    /*! *****************************************************************************
	    Copyright (c) Microsoft Corporation. All rights reserved.
	    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	    this file except in compliance with the License. You may obtain a copy of the
	    License at http://www.apache.org/licenses/LICENSE-2.0

	    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	    MERCHANTABLITY OR NON-INFRINGEMENT.

	    See the Apache Version 2.0 License for specific language governing permissions
	    and limitations under the License.
	    ***************************************************************************** */
	    var __assign = function () {
	        __assign = Object.assign || function __assign(t) {
	            for (var s, i = 1, n = arguments.length; i < n; i++) {
	                s = arguments[i];
	                for (var p in s)
	                    if (Object.prototype.hasOwnProperty.call(s, p))
	                        t[p] = s[p];
	            }
	            return t;
	        };
	        return __assign.apply(this, arguments);
	    };
	    function __read(o, n) {
	        var m = typeof Symbol === "function" && o[Symbol.iterator];
	        if (!m)
	            return o;
	        var i = m.call(o), r, ar = [], e;
	        try {
	            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
	                ar.push(r.value);
	        }
	        catch (error) {
	            e = { error: error };
	        }
	        finally {
	            try {
	                if (r && !r.done && (m = i["return"]))
	                    m.call(i);
	            }
	            finally {
	                if (e)
	                    throw e.error;
	            }
	        }
	        return ar;
	    }

	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    var DraggableHelper = /** @class */ (function () {
	        function DraggableHelper() {
	            this.currentDrag = new rxjs.Subject();
	        }
	        DraggableHelper.decorators = [
	            { type: i0.Injectable, args: [{
	                        providedIn: 'root',
	                    },] }
	        ];
	        /** @nocollapse */ DraggableHelper.ngInjectableDef = i0.defineInjectable({ factory: function DraggableHelper_Factory() { return new DraggableHelper(); }, token: DraggableHelper, providedIn: "root" });
	        return DraggableHelper;
	    }());

	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    /**
	     * If the window isn't scrollable, then place this on the scrollable container that draggable elements are inside. e.g.
	     * ```html
	     * <div style="overflow: scroll" mwlDraggableScrollContainer>
	     * <div mwlDraggable>Drag me!</div>
	     * </div>
	     * ```
	     */
	    var DraggableScrollContainerDirective = /** @class */ (function () {
	        /**
	         * @hidden
	         */
	        function DraggableScrollContainerDirective(elementRef) {
	            this.elementRef = elementRef;
	            /**
	             * Trigger the DragStart after a long touch in scrollable container when true
	             * @deprecated will be removed in v5 (use [touchStartLongPress]="{delay: 300, delta: 30}" on the mwlDraggable element instead)
	             */
	            this.activeLongPressDrag = false;
	            /**
	             * Configuration of a long touch
	             * Duration in ms of a long touch before activating DragStart
	             * Delta of the
	             * @deprecated will be removed in v5 (use [touchStartLongPress]="{delay: 300, delta: 30}" on the mwlDraggable element instead)
	             */
	            this.longPressConfig = { duration: 300, delta: 30 };
	        }
	        DraggableScrollContainerDirective.decorators = [
	            { type: i0.Directive, args: [{
	                        selector: '[mwlDraggableScrollContainer]',
	                    },] }
	        ];
	        /** @nocollapse */
	        DraggableScrollContainerDirective.ctorParameters = function () {
	            return [
	                { type: i0.ElementRef }
	            ];
	        };
	        DraggableScrollContainerDirective.propDecorators = {
	            activeLongPressDrag: [{ type: i0.Input }],
	            longPressConfig: [{ type: i0.Input }]
	        };
	        return DraggableScrollContainerDirective;
	    }());

	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    /**
	     * @param {?} renderer
	     * @param {?} element
	     * @param {?} classToAdd
	     * @return {?}
	     */
	    function addClass(renderer, element, classToAdd) {
	        if (classToAdd) {
	            classToAdd
	                .split(' ')
	                .forEach(( /**
	         * @param {?} className
	         * @return {?}
	         */function (className) {
	                return renderer.addClass(element.nativeElement, className);
	            }));
	        }
	    }
	    /**
	     * @param {?} renderer
	     * @param {?} element
	     * @param {?} classToRemove
	     * @return {?}
	     */
	    function removeClass(renderer, element, classToRemove) {
	        if (classToRemove) {
	            classToRemove
	                .split(' ')
	                .forEach(( /**
	         * @param {?} className
	         * @return {?}
	         */function (className) {
	                return renderer.removeClass(element.nativeElement, className);
	            }));
	        }
	    }

	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    var DraggableDirective = /** @class */ (function () {
	        /**
	         * @hidden
	         */
	        function DraggableDirective(element, renderer, draggableHelper, zone, vcr, scrollContainer, document) {
	            this.element = element;
	            this.renderer = renderer;
	            this.draggableHelper = draggableHelper;
	            this.zone = zone;
	            this.vcr = vcr;
	            this.scrollContainer = scrollContainer;
	            this.document = document;
	            /**
	             * The axis along which the element is draggable
	             */
	            this.dragAxis = { x: true, y: true };
	            /**
	             * Snap all drags to an x / y grid
	             */
	            this.dragSnapGrid = {};
	            /**
	             * Show a ghost element that shows the drag when dragging
	             */
	            this.ghostDragEnabled = true;
	            /**
	             * Show the original element when ghostDragEnabled is true
	             */
	            this.showOriginalElementWhileDragging = false;
	            /**
	             * The cursor to use when hovering over a draggable element
	             */
	            this.dragCursor = '';
	            /*
	               * Options used to control the behaviour of auto scrolling: https://www.npmjs.com/package/dom-autoscroller
	               */
	            this.autoScroll = {
	                margin: 20,
	            };
	            /**
	             * Called when the element can be dragged along one axis and has the mouse or pointer device pressed on it
	             */
	            this.dragPointerDown = new i0.EventEmitter();
	            /**
	             * Called when the element has started to be dragged.
	             * Only called after at least one mouse or touch move event.
	             * If you call $event.cancelDrag$.emit() it will cancel the current drag
	             */
	            this.dragStart = new i0.EventEmitter();
	            /**
	             * Called after the ghost element has been created
	             */
	            this.ghostElementCreated = new i0.EventEmitter();
	            /**
	             * Called when the element is being dragged
	             */
	            this.dragging = new i0.EventEmitter();
	            /**
	             * Called after the element is dragged
	             */
	            this.dragEnd = new i0.EventEmitter();
	            /**
	             * @hidden
	             */
	            this.pointerDown$ = new rxjs.Subject();
	            /**
	             * @hidden
	             */
	            this.pointerMove$ = new rxjs.Subject();
	            /**
	             * @hidden
	             */
	            this.pointerUp$ = new rxjs.Subject();
	            this.eventListenerSubscriptions = {};
	            this.destroy$ = new rxjs.Subject();
	            this.timeLongPress = { timerBegin: 0, timerEnd: 0 };
	        }
	        /**
	         * @return {?}
	         */
	        DraggableDirective.prototype.ngOnInit = /**
	         * @return {?}
	         */
	            function () {
	                var _this = this;
	                this.checkEventListeners();
	                /** @type {?} */
	                var pointerDragged$ = this.pointerDown$.pipe(operators.filter(( /**
	                 * @return {?}
	                 */function () { return _this.canDrag(); })), operators.mergeMap(( /**
	                 * @param {?} pointerDownEvent
	                 * @return {?}
	                 */function (pointerDownEvent) {
	                    // fix for https://github.com/mattlewis92/angular-draggable-droppable/issues/61
	                    // stop mouse events propagating up the chain
	                    if (pointerDownEvent.event.stopPropagation && !_this.scrollContainer) {
	                        pointerDownEvent.event.stopPropagation();
	                    }
	                    // hack to prevent text getting selected in safari while dragging
	                    /** @type {?} */
	                    var globalDragStyle = _this.renderer.createElement('style');
	                    _this.renderer.setAttribute(globalDragStyle, 'type', 'text/css');
	                    _this.renderer.appendChild(globalDragStyle, _this.renderer.createText("\n          body * {\n           -moz-user-select: none;\n           -ms-user-select: none;\n           -webkit-user-select: none;\n           user-select: none;\n          }\n        "));
	                    requestAnimationFrame(( /**
	                     * @return {?}
	                     */function () {
	                        _this.document.head.appendChild(globalDragStyle);
	                    }));
	                    /** @type {?} */
	                    var startScrollPosition = _this.getScrollPosition();
	                    /** @type {?} */
	                    var scrollContainerScroll$ = new rxjs.Observable(( /**
	                     * @param {?} observer
	                     * @return {?}
	                     */function (observer) {
	                        /** @type {?} */
	                        var scrollContainer = _this.scrollContainer
	                            ? _this.scrollContainer.elementRef.nativeElement
	                            : 'window';
	                        return _this.renderer.listen(scrollContainer, 'scroll', ( /**
	                         * @param {?} e
	                         * @return {?}
	                         */function (e) {
	                            return observer.next(e);
	                        }));
	                    })).pipe(operators.startWith(startScrollPosition), operators.map(( /**
	                     * @return {?}
	                     */function () { return _this.getScrollPosition(); })));
	                    /** @type {?} */
	                    var currentDrag$ = new rxjs.Subject();
	                    /** @type {?} */
	                    var cancelDrag$ = new rxjs.ReplaySubject();
	                    _this.zone.run(( /**
	                     * @return {?}
	                     */function () {
	                        _this.dragPointerDown.next({ x: 0, y: 0 });
	                    }));
	                    /** @type {?} */
	                    var dragComplete$ = rxjs.merge(_this.pointerUp$, _this.pointerDown$, cancelDrag$, _this.destroy$).pipe(operators.share());
	                    /** @type {?} */
	                    var pointerMove = rxjs.combineLatest([
	                        _this.pointerMove$,
	                        scrollContainerScroll$,
	                    ]).pipe(operators.map(( /**
	                     * @param {?} __0
	                     * @return {?}
	                     */function (_a) {
	                        var _b = __read(_a, 2), pointerMoveEvent = _b[0], scroll = _b[1];
	                        return {
	                            currentDrag$: currentDrag$,
	                            transformX: pointerMoveEvent.clientX - pointerDownEvent.clientX,
	                            transformY: pointerMoveEvent.clientY - pointerDownEvent.clientY,
	                            clientX: pointerMoveEvent.clientX,
	                            clientY: pointerMoveEvent.clientY,
	                            scrollLeft: scroll.left,
	                            scrollTop: scroll.top,
	                            target: pointerMoveEvent.event.target,
	                        };
	                    })), operators.map(( /**
	                     * @param {?} moveData
	                     * @return {?}
	                     */function (moveData) {
	                        if (_this.dragSnapGrid.x) {
	                            moveData.transformX =
	                                Math.round(moveData.transformX / _this.dragSnapGrid.x) *
	                                    _this.dragSnapGrid.x;
	                        }
	                        if (_this.dragSnapGrid.y) {
	                            moveData.transformY =
	                                Math.round(moveData.transformY / _this.dragSnapGrid.y) *
	                                    _this.dragSnapGrid.y;
	                        }
	                        return moveData;
	                    })), operators.map(( /**
	                     * @param {?} moveData
	                     * @return {?}
	                     */function (moveData) {
	                        if (!_this.dragAxis.x) {
	                            moveData.transformX = 0;
	                        }
	                        if (!_this.dragAxis.y) {
	                            moveData.transformY = 0;
	                        }
	                        return moveData;
	                    })), operators.map(( /**
	                     * @param {?} moveData
	                     * @return {?}
	                     */function (moveData) {
	                        /** @type {?} */
	                        var scrollX = moveData.scrollLeft - startScrollPosition.left;
	                        /** @type {?} */
	                        var scrollY = moveData.scrollTop - startScrollPosition.top;
	                        return __assign({}, moveData, { x: moveData.transformX + scrollX, y: moveData.transformY + scrollY });
	                    })), operators.filter(( /**
	                     * @param {?} __0
	                     * @return {?}
	                     */function (_a) {
	                        var x = _a.x, y = _a.y, transformX = _a.transformX, transformY = _a.transformY;
	                        return !_this.validateDrag ||
	                            _this.validateDrag({
	                                x: x,
	                                y: y,
	                                transform: { x: transformX, y: transformY },
	                            });
	                    })), operators.takeUntil(dragComplete$), operators.share());
	                    /** @type {?} */
	                    var dragStarted$ = pointerMove.pipe(operators.take(1), operators.share());
	                    /** @type {?} */
	                    var dragEnded$ = pointerMove.pipe(operators.takeLast(1), operators.share());
	                    dragStarted$.subscribe(( /**
	                     * @param {?} __0
	                     * @return {?}
	                     */function (_a) {
	                        var clientX = _a.clientX, clientY = _a.clientY, x = _a.x, y = _a.y;
	                        _this.zone.run(( /**
	                         * @return {?}
	                         */function () {
	                            _this.dragStart.next({ cancelDrag$: cancelDrag$ });
	                        }));
	                        _this.scroller = autoScroll([
	                            _this.scrollContainer
	                                ? _this.scrollContainer.elementRef.nativeElement
	                                : _this.document.defaultView,
	                        ], __assign({}, _this.autoScroll, { autoScroll: /**
	                                 * @return {?}
	                                 */ function () {
	                                return true;
	                            } }));
	                        addClass(_this.renderer, _this.element, _this.dragActiveClass);
	                        if (_this.ghostDragEnabled) {
	                            /** @type {?} */
	                            var rect = _this.element.nativeElement.getBoundingClientRect();
	                            /** @type {?} */
	                            var clone_1 = ( /** @type {?} */(_this.element.nativeElement.cloneNode(true)));
	                            if (!_this.showOriginalElementWhileDragging) {
	                                _this.renderer.setStyle(_this.element.nativeElement, 'visibility', 'hidden');
	                            }
	                            if (_this.ghostElementAppendTo) {
	                                _this.ghostElementAppendTo.appendChild(clone_1);
	                            }
	                            else {
	                                ( /** @type {?} */(_this.element.nativeElement.parentNode)).insertBefore(clone_1, _this.element.nativeElement.nextSibling);
	                            }
	                            _this.ghostElement = clone_1;
	                            _this.document.body.style.cursor = _this.dragCursor;
	                            _this.setElementStyles(clone_1, {
	                                position: 'fixed',
	                                top: rect.top + "px",
	                                left: rect.left + "px",
	                                width: rect.width + "px",
	                                height: rect.height + "px",
	                                cursor: _this.dragCursor,
	                                margin: '0',
	                                willChange: 'transform',
	                                pointerEvents: 'none',
	                            });
	                            if (_this.ghostElementTemplate) {
	                                /** @type {?} */
	                                var viewRef_1 = _this.vcr.createEmbeddedView(_this.ghostElementTemplate);
	                                clone_1.innerHTML = '';
	                                viewRef_1.rootNodes
	                                    .filter(( /**
	                             * @param {?} node
	                             * @return {?}
	                             */function (node) { return node instanceof Node; }))
	                                    .forEach(( /**
	                             * @param {?} node
	                             * @return {?}
	                             */function (node) {
	                                    clone_1.appendChild(node);
	                                }));
	                                dragEnded$.subscribe(( /**
	                                 * @return {?}
	                                 */function () {
	                                    _this.vcr.remove(_this.vcr.indexOf(viewRef_1));
	                                }));
	                            }
	                            _this.zone.run(( /**
	                             * @return {?}
	                             */function () {
	                                _this.ghostElementCreated.emit({
	                                    clientX: clientX - x,
	                                    clientY: clientY - y,
	                                    element: clone_1,
	                                });
	                            }));
	                            dragEnded$.subscribe(( /**
	                             * @return {?}
	                             */function () {
	                                ( /** @type {?} */(clone_1.parentElement)).removeChild(clone_1);
	                                _this.ghostElement = null;
	                                _this.renderer.setStyle(_this.element.nativeElement, 'visibility', '');
	                            }));
	                        }
	                        _this.draggableHelper.currentDrag.next(currentDrag$);
	                    }));
	                    dragEnded$
	                        .pipe(operators.mergeMap(( /**
	                 * @param {?} dragEndData
	                 * @return {?}
	                 */function (dragEndData) {
	                        /** @type {?} */
	                        var dragEndData$ = cancelDrag$.pipe(operators.count(), operators.take(1), operators.map(( /**
	                         * @param {?} calledCount
	                         * @return {?}
	                         */function (calledCount) { return (__assign({}, dragEndData, { dragCancelled: calledCount > 0 })); })));
	                        cancelDrag$.complete();
	                        return dragEndData$;
	                    })))
	                        .subscribe(( /**
	                 * @param {?} __0
	                 * @return {?}
	                 */function (_a) {
	                        var x = _a.x, y = _a.y, dragCancelled = _a.dragCancelled;
	                        _this.scroller.destroy();
	                        _this.zone.run(( /**
	                         * @return {?}
	                         */function () {
	                            _this.dragEnd.next({ x: x, y: y, dragCancelled: dragCancelled });
	                        }));
	                        removeClass(_this.renderer, _this.element, _this.dragActiveClass);
	                        currentDrag$.complete();
	                    }));
	                    rxjs.merge(dragComplete$, dragEnded$)
	                        .pipe(operators.take(1))
	                        .subscribe(( /**
	                 * @return {?}
	                 */function () {
	                        requestAnimationFrame(( /**
	                         * @return {?}
	                         */function () {
	                            _this.document.head.removeChild(globalDragStyle);
	                        }));
	                    }));
	                    return pointerMove;
	                })), operators.share());
	                rxjs.merge(pointerDragged$.pipe(operators.take(1), operators.map(( /**
	                 * @param {?} value
	                 * @return {?}
	                 */function (value) { return [, value]; }))), pointerDragged$.pipe(operators.pairwise()))
	                    .pipe(operators.filter(( /**
	             * @param {?} __0
	             * @return {?}
	             */function (_a) {
	                    var _b = __read(_a, 2), previous = _b[0], next = _b[1];
	                    if (!previous) {
	                        return true;
	                    }
	                    return previous.x !== next.x || previous.y !== next.y;
	                })), operators.map(( /**
	                 * @param {?} __0
	                 * @return {?}
	                 */function (_a) {
	                    var _b = __read(_a, 2), previous = _b[0], next = _b[1];
	                    return next;
	                })))
	                    .subscribe(( /**
	             * @param {?} __0
	             * @return {?}
	             */function (_a) {
	                    var x = _a.x, y = _a.y, currentDrag$ = _a.currentDrag$, clientX = _a.clientX, clientY = _a.clientY, transformX = _a.transformX, transformY = _a.transformY, target = _a.target;
	                    _this.zone.run(( /**
	                     * @return {?}
	                     */function () {
	                        _this.dragging.next({ x: x, y: y });
	                    }));
	                    requestAnimationFrame(( /**
	                     * @return {?}
	                     */function () {
	                        if (_this.ghostElement) {
	                            /** @type {?} */
	                            var transform = "translate3d(" + transformX + "px, " + transformY + "px, 0px)";
	                            _this.setElementStyles(_this.ghostElement, {
	                                transform: transform,
	                                '-webkit-transform': transform,
	                                '-ms-transform': transform,
	                                '-moz-transform': transform,
	                                '-o-transform': transform,
	                            });
	                        }
	                    }));
	                    currentDrag$.next({
	                        clientX: clientX,
	                        clientY: clientY,
	                        dropData: _this.dropData,
	                        target: target,
	                    });
	                }));
	            };
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        DraggableDirective.prototype.ngOnChanges = /**
	         * @param {?} changes
	         * @return {?}
	         */
	            function (changes) {
	                if (changes.dragAxis) {
	                    this.checkEventListeners();
	                }
	            };
	        /**
	         * @return {?}
	         */
	        DraggableDirective.prototype.ngOnDestroy = /**
	         * @return {?}
	         */
	            function () {
	                this.unsubscribeEventListeners();
	                this.pointerDown$.complete();
	                this.pointerMove$.complete();
	                this.pointerUp$.complete();
	                this.destroy$.next();
	            };
	        /**
	         * @private
	         * @return {?}
	         */
	        DraggableDirective.prototype.checkEventListeners = /**
	         * @private
	         * @return {?}
	         */
	            function () {
	                var _this = this;
	                /** @type {?} */
	                var canDrag = this.canDrag();
	                /** @type {?} */
	                var hasEventListeners = Object.keys(this.eventListenerSubscriptions).length > 0;
	                if (canDrag && !hasEventListeners) {
	                    this.zone.runOutsideAngular(( /**
	                     * @return {?}
	                     */function () {
	                        _this.eventListenerSubscriptions.mousedown = _this.renderer.listen(_this.element.nativeElement, 'mousedown', ( /**
	                         * @param {?} event
	                         * @return {?}
	                         */function (event) {
	                            _this.onMouseDown(event);
	                        }));
	                        _this.eventListenerSubscriptions.mouseup = _this.renderer.listen('document', 'mouseup', ( /**
	                         * @param {?} event
	                         * @return {?}
	                         */function (event) {
	                            _this.onMouseUp(event);
	                        }));
	                        _this.eventListenerSubscriptions.touchstart = _this.renderer.listen(_this.element.nativeElement, 'touchstart', ( /**
	                         * @param {?} event
	                         * @return {?}
	                         */function (event) {
	                            _this.onTouchStart(event);
	                        }));
	                        _this.eventListenerSubscriptions.touchend = _this.renderer.listen('document', 'touchend', ( /**
	                         * @param {?} event
	                         * @return {?}
	                         */function (event) {
	                            _this.onTouchEnd(event);
	                        }));
	                        _this.eventListenerSubscriptions.touchcancel = _this.renderer.listen('document', 'touchcancel', ( /**
	                         * @param {?} event
	                         * @return {?}
	                         */function (event) {
	                            _this.onTouchEnd(event);
	                        }));
	                        _this.eventListenerSubscriptions.mouseenter = _this.renderer.listen(_this.element.nativeElement, 'mouseenter', ( /**
	                         * @return {?}
	                         */function () {
	                            _this.onMouseEnter();
	                        }));
	                        _this.eventListenerSubscriptions.mouseleave = _this.renderer.listen(_this.element.nativeElement, 'mouseleave', ( /**
	                         * @return {?}
	                         */function () {
	                            _this.onMouseLeave();
	                        }));
	                    }));
	                }
	                else if (!canDrag && hasEventListeners) {
	                    this.unsubscribeEventListeners();
	                }
	            };
	        /**
	         * @private
	         * @param {?} event
	         * @return {?}
	         */
	        DraggableDirective.prototype.onMouseDown = /**
	         * @private
	         * @param {?} event
	         * @return {?}
	         */
	            function (event) {
	                var _this = this;
	                if (event.button === 0) {
	                    if (!this.eventListenerSubscriptions.mousemove) {
	                        this.eventListenerSubscriptions.mousemove = this.renderer.listen('document', 'mousemove', ( /**
	                         * @param {?} mouseMoveEvent
	                         * @return {?}
	                         */function (mouseMoveEvent) {
	                            _this.pointerMove$.next({
	                                event: mouseMoveEvent,
	                                clientX: mouseMoveEvent.clientX,
	                                clientY: mouseMoveEvent.clientY,
	                            });
	                        }));
	                    }
	                    this.pointerDown$.next({
	                        event: event,
	                        clientX: event.clientX,
	                        clientY: event.clientY,
	                    });
	                }
	            };
	        /**
	         * @private
	         * @param {?} event
	         * @return {?}
	         */
	        DraggableDirective.prototype.onMouseUp = /**
	         * @private
	         * @param {?} event
	         * @return {?}
	         */
	            function (event) {
	                if (event.button === 0) {
	                    if (this.eventListenerSubscriptions.mousemove) {
	                        this.eventListenerSubscriptions.mousemove();
	                        delete this.eventListenerSubscriptions.mousemove;
	                    }
	                    this.pointerUp$.next({
	                        event: event,
	                        clientX: event.clientX,
	                        clientY: event.clientY,
	                    });
	                }
	            };
	        /**
	         * @private
	         * @param {?} event
	         * @return {?}
	         */
	        DraggableDirective.prototype.onTouchStart = /**
	         * @private
	         * @param {?} event
	         * @return {?}
	         */
	            function (event) {
	                var _this = this;
	                /** @type {?} */
	                var startScrollPosition;
	                /** @type {?} */
	                var isDragActivated;
	                /** @type {?} */
	                var hasContainerScrollbar;
	                if ((this.scrollContainer && this.scrollContainer.activeLongPressDrag) ||
	                    this.touchStartLongPress) {
	                    this.timeLongPress.timerBegin = Date.now();
	                    isDragActivated = false;
	                    hasContainerScrollbar = this.hasScrollbar();
	                    startScrollPosition = this.getScrollPosition();
	                }
	                if (!this.eventListenerSubscriptions.touchmove) {
	                    /** @type {?} */
	                    var contextMenuListener_1 = rxjs.fromEvent(this.document, 'contextmenu').subscribe(( /**
	                     * @param {?} e
	                     * @return {?}
	                     */function (e) {
	                        e.preventDefault();
	                    }));
	                    /** @type {?} */
	                    var touchMoveListener_1 = rxjs.fromEvent(this.document, 'touchmove', {
	                        passive: false,
	                    }).subscribe(( /**
	                     * @param {?} touchMoveEvent
	                     * @return {?}
	                     */function (touchMoveEvent) {
	                        if (((_this.scrollContainer && _this.scrollContainer.activeLongPressDrag) ||
	                            _this.touchStartLongPress) &&
	                            !isDragActivated &&
	                            hasContainerScrollbar) {
	                            isDragActivated = _this.shouldBeginDrag(event, touchMoveEvent, startScrollPosition);
	                        }
	                        if (((!_this.scrollContainer ||
	                            !_this.scrollContainer.activeLongPressDrag) &&
	                            !_this.touchStartLongPress) ||
	                            !hasContainerScrollbar ||
	                            isDragActivated) {
	                            touchMoveEvent.preventDefault();
	                            _this.pointerMove$.next({
	                                event: touchMoveEvent,
	                                clientX: touchMoveEvent.targetTouches[0].clientX,
	                                clientY: touchMoveEvent.targetTouches[0].clientY,
	                            });
	                        }
	                    }));
	                    this.eventListenerSubscriptions.touchmove = ( /**
	                     * @return {?}
	                     */function () {
	                        contextMenuListener_1.unsubscribe();
	                        touchMoveListener_1.unsubscribe();
	                    });
	                }
	                this.pointerDown$.next({
	                    event: event,
	                    clientX: event.touches[0].clientX,
	                    clientY: event.touches[0].clientY,
	                });
	            };
	        /**
	         * @private
	         * @param {?} event
	         * @return {?}
	         */
	        DraggableDirective.prototype.onTouchEnd = /**
	         * @private
	         * @param {?} event
	         * @return {?}
	         */
	            function (event) {
	                if (this.eventListenerSubscriptions.touchmove) {
	                    this.eventListenerSubscriptions.touchmove();
	                    delete this.eventListenerSubscriptions.touchmove;
	                    if ((this.scrollContainer && this.scrollContainer.activeLongPressDrag) ||
	                        this.touchStartLongPress) {
	                        this.enableScroll();
	                    }
	                }
	                this.pointerUp$.next({
	                    event: event,
	                    clientX: event.changedTouches[0].clientX,
	                    clientY: event.changedTouches[0].clientY,
	                });
	            };
	        /**
	         * @private
	         * @return {?}
	         */
	        DraggableDirective.prototype.onMouseEnter = /**
	         * @private
	         * @return {?}
	         */
	            function () {
	                this.setCursor(this.dragCursor);
	            };
	        /**
	         * @private
	         * @return {?}
	         */
	        DraggableDirective.prototype.onMouseLeave = /**
	         * @private
	         * @return {?}
	         */
	            function () {
	                this.setCursor('');
	            };
	        /**
	         * @private
	         * @return {?}
	         */
	        DraggableDirective.prototype.canDrag = /**
	         * @private
	         * @return {?}
	         */
	            function () {
	                return this.dragAxis.x || this.dragAxis.y;
	            };
	        /**
	         * @private
	         * @param {?} value
	         * @return {?}
	         */
	        DraggableDirective.prototype.setCursor = /**
	         * @private
	         * @param {?} value
	         * @return {?}
	         */
	            function (value) {
	                if (!this.eventListenerSubscriptions.mousemove) {
	                    this.renderer.setStyle(this.element.nativeElement, 'cursor', value);
	                }
	            };
	        /**
	         * @private
	         * @return {?}
	         */
	        DraggableDirective.prototype.unsubscribeEventListeners = /**
	         * @private
	         * @return {?}
	         */
	            function () {
	                var _this = this;
	                Object.keys(this.eventListenerSubscriptions).forEach(( /**
	                 * @param {?} type
	                 * @return {?}
	                 */function (type) {
	                    (( /** @type {?} */(_this))).eventListenerSubscriptions[type]();
	                    delete (( /** @type {?} */(_this))).eventListenerSubscriptions[type];
	                }));
	            };
	        /**
	         * @private
	         * @param {?} element
	         * @param {?} styles
	         * @return {?}
	         */
	        DraggableDirective.prototype.setElementStyles = /**
	         * @private
	         * @param {?} element
	         * @param {?} styles
	         * @return {?}
	         */
	            function (element, styles) {
	                var _this = this;
	                Object.keys(styles).forEach(( /**
	                 * @param {?} key
	                 * @return {?}
	                 */function (key) {
	                    _this.renderer.setStyle(element, key, styles[key]);
	                }));
	            };
	        /**
	         * @private
	         * @return {?}
	         */
	        DraggableDirective.prototype.getScrollElement = /**
	         * @private
	         * @return {?}
	         */
	            function () {
	                if (this.scrollContainer) {
	                    return this.scrollContainer.elementRef.nativeElement;
	                }
	                else {
	                    return this.document.body;
	                }
	            };
	        /**
	         * @private
	         * @return {?}
	         */
	        DraggableDirective.prototype.getScrollPosition = /**
	         * @private
	         * @return {?}
	         */
	            function () {
	                if (this.scrollContainer) {
	                    return {
	                        top: this.scrollContainer.elementRef.nativeElement.scrollTop,
	                        left: this.scrollContainer.elementRef.nativeElement.scrollLeft,
	                    };
	                }
	                else {
	                    return {
	                        top: window.pageYOffset || this.document.documentElement.scrollTop,
	                        left: window.pageXOffset || this.document.documentElement.scrollLeft,
	                    };
	                }
	            };
	        /**
	         * @private
	         * @param {?} event
	         * @param {?} touchMoveEvent
	         * @param {?} startScrollPosition
	         * @return {?}
	         */
	        DraggableDirective.prototype.shouldBeginDrag = /**
	         * @private
	         * @param {?} event
	         * @param {?} touchMoveEvent
	         * @param {?} startScrollPosition
	         * @return {?}
	         */
	            function (event, touchMoveEvent, startScrollPosition) {
	                /** @type {?} */
	                var moveScrollPosition = this.getScrollPosition();
	                /** @type {?} */
	                var deltaScroll = {
	                    top: Math.abs(moveScrollPosition.top - startScrollPosition.top),
	                    left: Math.abs(moveScrollPosition.left - startScrollPosition.left),
	                };
	                /** @type {?} */
	                var deltaX = Math.abs(touchMoveEvent.targetTouches[0].clientX - event.touches[0].clientX) - deltaScroll.left;
	                /** @type {?} */
	                var deltaY = Math.abs(touchMoveEvent.targetTouches[0].clientY - event.touches[0].clientY) - deltaScroll.top;
	                /** @type {?} */
	                var deltaTotal = deltaX + deltaY;
	                /** @type {?} */
	                var longPressConfig = this.touchStartLongPress
	                    ? this.touchStartLongPress
	                    : /* istanbul ignore next */
	                        {
	                            delta: this.scrollContainer.longPressConfig.delta,
	                            delay: this.scrollContainer.longPressConfig.duration,
	                        };
	                if (deltaTotal > longPressConfig.delta ||
	                    deltaScroll.top > 0 ||
	                    deltaScroll.left > 0) {
	                    this.timeLongPress.timerBegin = Date.now();
	                }
	                this.timeLongPress.timerEnd = Date.now();
	                /** @type {?} */
	                var duration = this.timeLongPress.timerEnd - this.timeLongPress.timerBegin;
	                if (duration >= longPressConfig.delay) {
	                    this.disableScroll();
	                    return true;
	                }
	                return false;
	            };
	        /**
	         * @private
	         * @return {?}
	         */
	        DraggableDirective.prototype.enableScroll = /**
	         * @private
	         * @return {?}
	         */
	            function () {
	                if (this.scrollContainer) {
	                    this.renderer.setStyle(this.scrollContainer.elementRef.nativeElement, 'overflow', '');
	                }
	                this.renderer.setStyle(this.document.body, 'overflow', '');
	            };
	        /**
	         * @private
	         * @return {?}
	         */
	        DraggableDirective.prototype.disableScroll = /**
	         * @private
	         * @return {?}
	         */
	            function () {
	                /* istanbul ignore next */
	                if (this.scrollContainer) {
	                    this.renderer.setStyle(this.scrollContainer.elementRef.nativeElement, 'overflow', 'hidden');
	                }
	                this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
	            };
	        /**
	         * @private
	         * @return {?}
	         */
	        DraggableDirective.prototype.hasScrollbar = /**
	         * @private
	         * @return {?}
	         */
	            function () {
	                /** @type {?} */
	                var scrollContainer = this.getScrollElement();
	                /** @type {?} */
	                var containerHasHorizontalScroll = scrollContainer.scrollWidth > scrollContainer.clientWidth;
	                /** @type {?} */
	                var containerHasVerticalScroll = scrollContainer.scrollHeight > scrollContainer.clientHeight;
	                return containerHasHorizontalScroll || containerHasVerticalScroll;
	            };
	        DraggableDirective.decorators = [
	            { type: i0.Directive, args: [{
	                        selector: '[mwlDraggable]',
	                    },] }
	        ];
	        /** @nocollapse */
	        DraggableDirective.ctorParameters = function () {
	            return [
	                { type: i0.ElementRef },
	                { type: i0.Renderer2 },
	                { type: DraggableHelper },
	                { type: i0.NgZone },
	                { type: i0.ViewContainerRef },
	                { type: DraggableScrollContainerDirective, decorators: [{ type: i0.Optional }] },
	                { type: undefined, decorators: [{ type: i0.Inject, args: [common.DOCUMENT,] }] }
	            ];
	        };
	        DraggableDirective.propDecorators = {
	            dropData: [{ type: i0.Input }],
	            dragAxis: [{ type: i0.Input }],
	            dragSnapGrid: [{ type: i0.Input }],
	            ghostDragEnabled: [{ type: i0.Input }],
	            showOriginalElementWhileDragging: [{ type: i0.Input }],
	            validateDrag: [{ type: i0.Input }],
	            dragCursor: [{ type: i0.Input }],
	            dragActiveClass: [{ type: i0.Input }],
	            ghostElementAppendTo: [{ type: i0.Input }],
	            ghostElementTemplate: [{ type: i0.Input }],
	            touchStartLongPress: [{ type: i0.Input }],
	            autoScroll: [{ type: i0.Input }],
	            dragPointerDown: [{ type: i0.Output }],
	            dragStart: [{ type: i0.Output }],
	            ghostElementCreated: [{ type: i0.Output }],
	            dragging: [{ type: i0.Output }],
	            dragEnd: [{ type: i0.Output }]
	        };
	        return DraggableDirective;
	    }());

	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    /**
	     * @param {?} clientX
	     * @param {?} clientY
	     * @param {?} rect
	     * @return {?}
	     */
	    function isCoordinateWithinRectangle(clientX, clientY, rect) {
	        return (clientX >= rect.left &&
	            clientX <= rect.right &&
	            clientY >= rect.top &&
	            clientY <= rect.bottom);
	    }
	    var DroppableDirective = /** @class */ (function () {
	        function DroppableDirective(element, draggableHelper, zone, renderer, scrollContainer) {
	            this.element = element;
	            this.draggableHelper = draggableHelper;
	            this.zone = zone;
	            this.renderer = renderer;
	            this.scrollContainer = scrollContainer;
	            /**
	             * Called when a draggable element starts overlapping the element
	             */
	            this.dragEnter = new i0.EventEmitter();
	            /**
	             * Called when a draggable element stops overlapping the element
	             */
	            this.dragLeave = new i0.EventEmitter();
	            /**
	             * Called when a draggable element is moved over the element
	             */
	            this.dragOver = new i0.EventEmitter();
	            /**
	             * Called when a draggable element is dropped on this element
	             */
	            this.drop = new i0.EventEmitter(); // tslint:disable-line no-output-named-after-standard-event
	        }
	        /**
	         * @return {?}
	         */
	        DroppableDirective.prototype.ngOnInit = /**
	         * @return {?}
	         */
	            function () {
	                var _this = this;
	                this.currentDragSubscription = this.draggableHelper.currentDrag.subscribe(( /**
	                 * @param {?} drag$
	                 * @return {?}
	                 */function (drag$) {
	                    addClass(_this.renderer, _this.element, _this.dragActiveClass);
	                    /** @type {?} */
	                    var droppableElement = {
	                        updateCache: true,
	                    };
	                    /** @type {?} */
	                    var deregisterScrollListener = _this.renderer.listen(_this.scrollContainer
	                        ? _this.scrollContainer.elementRef.nativeElement
	                        : 'window', 'scroll', ( /**
	                 * @return {?}
	                 */function () {
	                        droppableElement.updateCache = true;
	                    }));
	                    /** @type {?} */
	                    var currentDragDropData;
	                    /** @type {?} */
	                    var overlaps$ = drag$.pipe(operators.map(( /**
	                     * @param {?} __0
	                     * @return {?}
	                     */function (_a) {
	                        var clientX = _a.clientX, clientY = _a.clientY, dropData = _a.dropData, target = _a.target;
	                        currentDragDropData = dropData;
	                        if (droppableElement.updateCache) {
	                            droppableElement.rect = _this.element.nativeElement.getBoundingClientRect();
	                            if (_this.scrollContainer) {
	                                droppableElement.scrollContainerRect = _this.scrollContainer.elementRef.nativeElement.getBoundingClientRect();
	                            }
	                            droppableElement.updateCache = false;
	                        }
	                        /** @type {?} */
	                        var isWithinElement = isCoordinateWithinRectangle(clientX, clientY, ( /** @type {?} */(droppableElement.rect)));
	                        /** @type {?} */
	                        var isDropAllowed = !_this.validateDrop ||
	                            _this.validateDrop({ clientX: clientX, clientY: clientY, target: target });
	                        if (droppableElement.scrollContainerRect) {
	                            return (isWithinElement &&
	                                isDropAllowed &&
	                                isCoordinateWithinRectangle(clientX, clientY, ( /** @type {?} */(droppableElement.scrollContainerRect))));
	                        }
	                        else {
	                            return isWithinElement && isDropAllowed;
	                        }
	                    })));
	                    /** @type {?} */
	                    var overlapsChanged$ = overlaps$.pipe(operators.distinctUntilChanged());
	                    /** @type {?} */
	                    var dragOverActive;
	                    overlapsChanged$
	                        .pipe(operators.filter(( /**
	                 * @param {?} overlapsNow
	                 * @return {?}
	                 */function (overlapsNow) { return overlapsNow; })))
	                        .subscribe(( /**
	                 * @return {?}
	                 */function () {
	                        dragOverActive = true;
	                        addClass(_this.renderer, _this.element, _this.dragOverClass);
	                        _this.zone.run(( /**
	                         * @return {?}
	                         */function () {
	                            _this.dragEnter.next({
	                                dropData: currentDragDropData,
	                            });
	                        }));
	                    }));
	                    overlaps$.pipe(operators.filter(( /**
	                     * @param {?} overlapsNow
	                     * @return {?}
	                     */function (overlapsNow) { return overlapsNow; }))).subscribe(( /**
	                     * @return {?}
	                     */function () {
	                        _this.zone.run(( /**
	                         * @return {?}
	                         */function () {
	                            _this.dragOver.next({
	                                dropData: currentDragDropData,
	                            });
	                        }));
	                    }));
	                    overlapsChanged$
	                        .pipe(operators.pairwise(), operators.filter(( /**
	                 * @param {?} __0
	                 * @return {?}
	                 */function (_a) {
	                        var _b = __read(_a, 2), didOverlap = _b[0], overlapsNow = _b[1];
	                        return didOverlap && !overlapsNow;
	                    })))
	                        .subscribe(( /**
	                 * @return {?}
	                 */function () {
	                        dragOverActive = false;
	                        removeClass(_this.renderer, _this.element, _this.dragOverClass);
	                        _this.zone.run(( /**
	                         * @return {?}
	                         */function () {
	                            _this.dragLeave.next({
	                                dropData: currentDragDropData,
	                            });
	                        }));
	                    }));
	                    drag$.subscribe({
	                        complete: ( /**
	                         * @return {?}
	                         */function () {
	                            deregisterScrollListener();
	                            removeClass(_this.renderer, _this.element, _this.dragActiveClass);
	                            if (dragOverActive) {
	                                removeClass(_this.renderer, _this.element, _this.dragOverClass);
	                                _this.zone.run(( /**
	                                 * @return {?}
	                                 */function () {
	                                    _this.drop.next({
	                                        dropData: currentDragDropData,
	                                    });
	                                }));
	                            }
	                        }),
	                    });
	                }));
	            };
	        /**
	         * @return {?}
	         */
	        DroppableDirective.prototype.ngOnDestroy = /**
	         * @return {?}
	         */
	            function () {
	                if (this.currentDragSubscription) {
	                    this.currentDragSubscription.unsubscribe();
	                }
	            };
	        DroppableDirective.decorators = [
	            { type: i0.Directive, args: [{
	                        selector: '[mwlDroppable]',
	                    },] }
	        ];
	        /** @nocollapse */
	        DroppableDirective.ctorParameters = function () {
	            return [
	                { type: i0.ElementRef },
	                { type: DraggableHelper },
	                { type: i0.NgZone },
	                { type: i0.Renderer2 },
	                { type: DraggableScrollContainerDirective, decorators: [{ type: i0.Optional }] }
	            ];
	        };
	        DroppableDirective.propDecorators = {
	            dragOverClass: [{ type: i0.Input }],
	            dragActiveClass: [{ type: i0.Input }],
	            validateDrop: [{ type: i0.Input }],
	            dragEnter: [{ type: i0.Output }],
	            dragLeave: [{ type: i0.Output }],
	            dragOver: [{ type: i0.Output }],
	            drop: [{ type: i0.Output }]
	        };
	        return DroppableDirective;
	    }());

	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */
	    var DragAndDropModule = /** @class */ (function () {
	        function DragAndDropModule() {
	        }
	        DragAndDropModule.decorators = [
	            { type: i0.NgModule, args: [{
	                        declarations: [
	                            DraggableDirective,
	                            DroppableDirective,
	                            DraggableScrollContainerDirective,
	                        ],
	                        exports: [
	                            DraggableDirective,
	                            DroppableDirective,
	                            DraggableScrollContainerDirective,
	                        ],
	                    },] }
	        ];
	        return DragAndDropModule;
	    }());

	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */

	    /**
	     * @fileoverview added by tsickle
	     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	     */

	    exports.DragAndDropModule = DragAndDropModule;
	    exports.ɵc = DraggableHelper;
	    exports.ɵd = DraggableScrollContainerDirective;
	    exports.ɵb = DraggableDirective;
	    exports.ɵa = DroppableDirective;

	    Object.defineProperty(exports, '__esModule', { value: true });

	})));


	});

	var angularDraggableDroppable_umd$1 = unwrapExports(angularDraggableDroppable_umd);

	return angularDraggableDroppable_umd$1;

})));
//# sourceMappingURL=angular-draggable-droppable.umd.js.map
