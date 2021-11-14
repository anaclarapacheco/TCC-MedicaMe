/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Renderer2, ElementRef, NgZone, Optional } from '@angular/core';
import { fromEvent, merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ResizableDirective } from './resizable.directive';
import { IS_TOUCH_DEVICE } from './is-touch-device';
/**
 * An element placed inside a `mwlResizable` directive to be used as a drag and resize handle
 *
 * For example
 *
 * ```html
 * <div mwlResizable>
 *   <div mwlResizeHandle [resizeEdges]="{bottom: true, right: true}"></div>
 * </div>
 * ```
 * Or in case they are sibling elements:
 * ```html
 * <div mwlResizable #resizableElement="mwlResizable"></div>
 * <div mwlResizeHandle [resizableContainer]="resizableElement" [resizeEdges]="{bottom: true, right: true}"></div>
 * ```
 */
var ResizeHandleDirective = /** @class */ (function () {
    function ResizeHandleDirective(renderer, element, zone, resizableDirective) {
        this.renderer = renderer;
        this.element = element;
        this.zone = zone;
        this.resizableDirective = resizableDirective;
        /**
         * The `Edges` object that contains the edges of the parent element that dragging the handle will trigger a resize on
         */
        this.resizeEdges = {};
        this.eventListeners = {};
        this.destroy$ = new Subject();
    }
    /**
     * @return {?}
     */
    ResizeHandleDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.listenOnTheHost('mousedown').subscribe(function (event) {
                _this.onMousedown(event, event.clientX, event.clientY);
            });
            _this.listenOnTheHost('mouseup').subscribe(function (event) {
                _this.onMouseup(event.clientX, event.clientY);
            });
            if (IS_TOUCH_DEVICE) {
                _this.listenOnTheHost('touchstart').subscribe(function (event) {
                    _this.onMousedown(event, event.touches[0].clientX, event.touches[0].clientY);
                });
                merge(_this.listenOnTheHost('touchend'), _this.listenOnTheHost('touchcancel')).subscribe(function (event) {
                    _this.onMouseup(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
                });
            }
        });
    };
    /**
     * @return {?}
     */
    ResizeHandleDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.unsubscribeEventListeners();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    ResizeHandleDirective.prototype.onMousedown = /**
     * @hidden
     * @param {?} event
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    function (event, clientX, clientY) {
        var _this = this;
        event.preventDefault();
        if (!this.eventListeners.touchmove) {
            this.eventListeners.touchmove = this.renderer.listen(this.element.nativeElement, 'touchmove', function (touchMoveEvent) {
                _this.onMousemove(touchMoveEvent, touchMoveEvent.targetTouches[0].clientX, touchMoveEvent.targetTouches[0].clientY);
            });
        }
        if (!this.eventListeners.mousemove) {
            this.eventListeners.mousemove = this.renderer.listen(this.element.nativeElement, 'mousemove', function (mouseMoveEvent) {
                _this.onMousemove(mouseMoveEvent, mouseMoveEvent.clientX, mouseMoveEvent.clientY);
            });
        }
        this.resizable.mousedown.next({
            clientX: clientX,
            clientY: clientY,
            edges: this.resizeEdges
        });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    ResizeHandleDirective.prototype.onMouseup = /**
     * @hidden
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    function (clientX, clientY) {
        this.unsubscribeEventListeners();
        this.resizable.mouseup.next({
            clientX: clientX,
            clientY: clientY,
            edges: this.resizeEdges
        });
    };
    Object.defineProperty(ResizeHandleDirective.prototype, "resizable", {
        // directive might be passed from DI or as an input
        get: 
        // directive might be passed from DI or as an input
        /**
         * @private
         * @return {?}
         */
        function () {
            return this.resizableDirective || this.resizableContainer;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} event
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    ResizeHandleDirective.prototype.onMousemove = /**
     * @private
     * @param {?} event
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    function (event, clientX, clientY) {
        this.resizable.mousemove.next({
            clientX: clientX,
            clientY: clientY,
            edges: this.resizeEdges,
            event: event
        });
    };
    /**
     * @private
     * @return {?}
     */
    ResizeHandleDirective.prototype.unsubscribeEventListeners = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        Object.keys(this.eventListeners).forEach(function (type) {
            ((/** @type {?} */ (_this))).eventListeners[type]();
            delete _this.eventListeners[type];
        });
    };
    /**
     * @private
     * @template T
     * @param {?} eventName
     * @return {?}
     */
    ResizeHandleDirective.prototype.listenOnTheHost = /**
     * @private
     * @template T
     * @param {?} eventName
     * @return {?}
     */
    function (eventName) {
        return fromEvent(this.element.nativeElement, eventName).pipe(takeUntil(this.destroy$));
    };
    ResizeHandleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mwlResizeHandle]'
                },] }
    ];
    /** @nocollapse */
    ResizeHandleDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: NgZone },
        { type: ResizableDirective, decorators: [{ type: Optional }] }
    ]; };
    ResizeHandleDirective.propDecorators = {
        resizeEdges: [{ type: Input }],
        resizableContainer: [{ type: Input }]
    };
    return ResizeHandleDirective;
}());
export { ResizeHandleDirective };
if (false) {
    /**
     * The `Edges` object that contains the edges of the parent element that dragging the handle will trigger a resize on
     * @type {?}
     */
    ResizeHandleDirective.prototype.resizeEdges;
    /**
     * Reference to ResizableDirective in case if handle is not located inside of element with ResizableDirective
     * @type {?}
     */
    ResizeHandleDirective.prototype.resizableContainer;
    /**
     * @type {?}
     * @private
     */
    ResizeHandleDirective.prototype.eventListeners;
    /**
     * @type {?}
     * @private
     */
    ResizeHandleDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    ResizeHandleDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    ResizeHandleDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    ResizeHandleDirective.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    ResizeHandleDirective.prototype.resizableDirective;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLWhhbmRsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXJlc2l6YWJsZS1lbGVtZW50LyIsInNvdXJjZXMiOlsicmVzaXplLWhhbmRsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBR1YsTUFBTSxFQUNOLFFBQVEsRUFDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQnBEO0lBcUJFLCtCQUNVLFFBQW1CLEVBQ25CLE9BQW1CLEVBQ25CLElBQVksRUFDQSxrQkFBc0M7UUFIbEQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLFNBQUksR0FBSixJQUFJLENBQVE7UUFDQSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9COzs7O1FBbEJuRCxnQkFBVyxHQUFVLEVBQUUsQ0FBQztRQU16QixtQkFBYyxHQUlsQixFQUFFLENBQUM7UUFFQyxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztJQU9wQyxDQUFDOzs7O0lBRUosd0NBQVE7OztJQUFSO1FBQUEsaUJBOEJDO1FBN0JDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDMUIsS0FBSSxDQUFDLGVBQWUsQ0FBYSxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxLQUFLO2dCQUMzRCxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUss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RSxtQkFBbUI7aUJBQzlCOzs7O2dCQS9CQyxTQUFTO2dCQUNULFVBQVU7Z0JBR1YsTUFBTTtnQkFLQyxrQkFBa0IsdUJBNkN0QixRQUFROzs7OEJBbEJWLEtBQUs7cUNBSUwsS0FBSzs7SUEwSVIsNEJBQUM7Q0FBQSxBQXJKRCxJQXFKQztTQWxKWSxxQkFBcUI7Ozs7OztJQUloQyw0Q0FBaUM7Ozs7O0lBSWpDLG1EQUFnRDs7Ozs7SUFFaEQsK0NBSU87Ozs7O0lBRVAseUNBQXVDOzs7OztJQUdyQyx5Q0FBMkI7Ozs7O0lBQzNCLHdDQUEyQjs7Ozs7SUFDM0IscUNBQW9COzs7OztJQUNwQixtREFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBSZW5kZXJlcjIsXG4gIEVsZW1lbnRSZWYsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBOZ1pvbmUsXG4gIE9wdGlvbmFsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUmVzaXphYmxlRGlyZWN0aXZlIH0gZnJvbSAnLi9yZXNpemFibGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IEVkZ2VzIH0gZnJvbSAnLi9pbnRlcmZhY2VzL2VkZ2VzLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJU19UT1VDSF9ERVZJQ0UgfSBmcm9tICcuL2lzLXRvdWNoLWRldmljZSc7XG5cbi8qKlxuICogQW4gZWxlbWVudCBwbGFjZWQgaW5zaWRlIGEgYG13bFJlc2l6YWJsZWAgZGlyZWN0aXZlIHRvIGJlIHVzZWQgYXMgYSBkcmFnIGFuZCByZXNpemUgaGFuZGxlXG4gKlxuICogRm9yIGV4YW1wbGVcbiAqXG4gKiBgYGBodG1sXG4gKiA8ZGl2IG13bFJlc2l6YWJsZT5cbiAqICAgPGRpdiBtd2xSZXNpemVIYW5kbGUgW3Jlc2l6ZUVkZ2VzXT1cIntib3R0b206IHRydWUsIHJpZ2h0OiB0cnVlfVwiPjwvZGl2PlxuICogPC9kaXY+XG4gKiBgYGBcbiAqIE9yIGluIGNhc2UgdGhleSBhcmUgc2libGluZyBlbGVtZW50czpcbiAqIGBgYGh0bWxcbiAqIDxkaXYgbXdsUmVzaXphYmxlICNyZXNpemFibGVFbGVtZW50PVwibXdsUmVzaXphYmxlXCI+PC9kaXY+XG4gKiA8ZGl2IG13bFJlc2l6ZUhhbmRsZSBbcmVzaXphYmxlQ29udGFpbmVyXT1cInJlc2l6YWJsZUVsZW1lbnRcIiBbcmVzaXplRWRnZXNdPVwie2JvdHRvbTogdHJ1ZSwgcmlnaHQ6IHRydWV9XCI+PC9kaXY+XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW213bFJlc2l6ZUhhbmRsZV0nXG59KVxuZXhwb3J0IGNsYXNzIFJlc2l6ZUhhbmRsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIFRoZSBgRWRnZXNgIG9iamVjdCB0aGF0IGNvbnRhaW5zIHRoZSBlZGdlcyBvZiB0aGUgcGFyZW50IGVsZW1lbnQgdGhhdCBkcmFnZ2luZyB0aGUgaGFuZGxlIHdpbGwgdHJpZ2dlciBhIHJlc2l6ZSBvblxuICAgKi9cbiAgQElucHV0KCkgcmVzaXplRWRnZXM6IEVkZ2VzID0ge307XG4gIC8qKlxuICAgKiBSZWZlcmVuY2UgdG8gUmVzaXphYmxlRGlyZWN0aXZlIGluIGNhc2UgaWYgaGFuZGxlIGlzIG5vdCBsb2NhdGVkIGluc2lkZSBvZiBlbGVtZW50IHdpdGggUmVzaXphYmxlRGlyZWN0aXZlXG4gICAqL1xuICBASW5wdXQoKSByZXNpemFibGVDb250YWluZXI6IFJlc2l6YWJsZURpcmVjdGl2ZTtcblxuICBwcml2YXRlIGV2ZW50TGlzdGVuZXJzOiB7XG4gICAgdG91Y2htb3ZlPzogKCkgPT4gdm9pZDtcbiAgICBtb3VzZW1vdmU/OiAoKSA9PiB2b2lkO1xuICAgIFtrZXk6IHN0cmluZ106ICgoKSA9PiB2b2lkKSB8IHVuZGVmaW5lZDtcbiAgfSA9IHt9O1xuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSByZXNpemFibGVEaXJlY3RpdmU6IFJlc2l6YWJsZURpcmVjdGl2ZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMubGlzdGVuT25UaGVIb3N0PE1vdXNlRXZlbnQ+KCdtb3VzZWRvd24nKS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLm9uTW91c2Vkb3duKGV2ZW50LCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmxpc3Rlbk9uVGhlSG9zdDxNb3VzZUV2ZW50PignbW91c2V1cCcpLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICAgIHRoaXMub25Nb3VzZXVwKGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChJU19UT1VDSF9ERVZJQ0UpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5PblRoZUhvc3Q8VG91Y2hFdmVudD4oJ3RvdWNoc3RhcnQnKS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgICAgIHRoaXMub25Nb3VzZWRvd24oXG4gICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgIGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCxcbiAgICAgICAgICAgIGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lcmdlKFxuICAgICAgICAgIHRoaXMubGlzdGVuT25UaGVIb3N0PFRvdWNoRXZlbnQ+KCd0b3VjaGVuZCcpLFxuICAgICAgICAgIHRoaXMubGlzdGVuT25UaGVIb3N0PFRvdWNoRXZlbnQ+KCd0b3VjaGNhbmNlbCcpXG4gICAgICAgICkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgICAgICB0aGlzLm9uTW91c2V1cChcbiAgICAgICAgICAgIGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXG4gICAgICAgICAgICBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBvbk1vdXNlZG93bihcbiAgICBldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQsXG4gICAgY2xpZW50WDogbnVtYmVyLFxuICAgIGNsaWVudFk6IG51bWJlclxuICApOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdGhpcy5ldmVudExpc3RlbmVycy50b3VjaG1vdmUpIHtcbiAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMudG91Y2htb3ZlID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oXG4gICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAndG91Y2htb3ZlJyxcbiAgICAgICAgKHRvdWNoTW92ZUV2ZW50OiBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICAgICAgdGhpcy5vbk1vdXNlbW92ZShcbiAgICAgICAgICAgIHRvdWNoTW92ZUV2ZW50LFxuICAgICAgICAgICAgdG91Y2hNb3ZlRXZlbnQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYLFxuICAgICAgICAgICAgdG91Y2hNb3ZlRXZlbnQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRZXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmV2ZW50TGlzdGVuZXJzLm1vdXNlbW92ZSkge1xuICAgICAgdGhpcy5ldmVudExpc3RlbmVycy5tb3VzZW1vdmUgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbihcbiAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICdtb3VzZW1vdmUnLFxuICAgICAgICAobW91c2VNb3ZlRXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICB0aGlzLm9uTW91c2Vtb3ZlKFxuICAgICAgICAgICAgbW91c2VNb3ZlRXZlbnQsXG4gICAgICAgICAgICBtb3VzZU1vdmVFdmVudC5jbGllbnRYLFxuICAgICAgICAgICAgbW91c2VNb3ZlRXZlbnQuY2xpZW50WVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMucmVzaXphYmxlLm1vdXNlZG93bi5uZXh0KHtcbiAgICAgIGNsaWVudFgsXG4gICAgICBjbGllbnRZLFxuICAgICAgZWRnZXM6IHRoaXMucmVzaXplRWRnZXNcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBvbk1vdXNldXAoY2xpZW50WDogbnVtYmVyLCBjbGllbnRZOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLnJlc2l6YWJsZS5tb3VzZXVwLm5leHQoe1xuICAgICAgY2xpZW50WCxcbiAgICAgIGNsaWVudFksXG4gICAgICBlZGdlczogdGhpcy5yZXNpemVFZGdlc1xuICAgIH0pO1xuICB9XG5cbiAgLy8gZGlyZWN0aXZlIG1pZ2h0IGJlIHBhc3NlZCBmcm9tIERJIG9yIGFzIGFuIGlucHV0XG4gIHByaXZhdGUgZ2V0IHJlc2l6YWJsZSgpOiBSZXNpemFibGVEaXJlY3RpdmUge1xuICAgIHJldHVybiB0aGlzLnJlc2l6YWJsZURpcmVjdGl2ZSB8fCB0aGlzLnJlc2l6YWJsZUNvbnRhaW5lcjtcbiAgfVxuXG4gIHByaXZhdGUgb25Nb3VzZW1vdmUoXG4gICAgZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50LFxuICAgIGNsaWVudFg6IG51bWJlcixcbiAgICBjbGllbnRZOiBudW1iZXJcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5yZXNpemFibGUubW91c2Vtb3ZlLm5leHQoe1xuICAgICAgY2xpZW50WCxcbiAgICAgIGNsaWVudFksXG4gICAgICBlZGdlczogdGhpcy5yZXNpemVFZGdlcyxcbiAgICAgIGV2ZW50XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHVuc3Vic2NyaWJlRXZlbnRMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgT2JqZWN0LmtleXModGhpcy5ldmVudExpc3RlbmVycykuZm9yRWFjaCh0eXBlID0+IHtcbiAgICAgICh0aGlzIGFzIGFueSkuZXZlbnRMaXN0ZW5lcnNbdHlwZV0oKTtcbiAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50TGlzdGVuZXJzW3R5cGVdO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBsaXN0ZW5PblRoZUhvc3Q8VCBleHRlbmRzIEV2ZW50PihldmVudE5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiBmcm9tRXZlbnQ8VD4odGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGV2ZW50TmFtZSkucGlwZShcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==