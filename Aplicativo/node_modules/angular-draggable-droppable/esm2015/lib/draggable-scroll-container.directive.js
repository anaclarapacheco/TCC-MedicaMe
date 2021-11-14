/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, } from '@angular/core';
/**
 * If the window isn't scrollable, then place this on the scrollable container that draggable elements are inside. e.g.
 * ```html
 * <div style="overflow: scroll" mwlDraggableScrollContainer>
 * <div mwlDraggable>Drag me!</div>
 * </div>
 * ```
 */
export class DraggableScrollContainerDirective {
    /**
     * @hidden
     * @param {?} elementRef
     */
    constructor(elementRef) {
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
}
DraggableScrollContainerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mwlDraggableScrollContainer]',
            },] }
];
/** @nocollapse */
DraggableScrollContainerDirective.ctorParameters = () => [
    { type: ElementRef }
];
DraggableScrollContainerDirective.propDecorators = {
    activeLongPressDrag: [{ type: Input }],
    longPressConfig: [{ type: Input }]
};
if (false) {
    /**
     * Trigger the DragStart after a long touch in scrollable container when true
     * @deprecated will be removed in v5 (use [touchStartLongPress]="{delay: 300, delta: 30}" on the mwlDraggable element instead)
     * @type {?}
     */
    DraggableScrollContainerDirective.prototype.activeLongPressDrag;
    /**
     * Configuration of a long touch
     * Duration in ms of a long touch before activating DragStart
     * Delta of the
     * @deprecated will be removed in v5 (use [touchStartLongPress]="{delay: 300, delta: 30}" on the mwlDraggable element instead)
     * @type {?}
     */
    DraggableScrollContainerDirective.prototype.longPressConfig;
    /** @type {?} */
    DraggableScrollContainerDirective.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLXNjcm9sbC1jb250YWluZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1kcmFnZ2FibGUtZHJvcHBhYmxlLyIsInNvdXJjZXMiOlsibGliL2RyYWdnYWJsZS1zY3JvbGwtY29udGFpbmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxHQUlOLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7QUFhdkIsTUFBTSxPQUFPLGlDQUFpQzs7Ozs7SUFrQjVDLFlBQW1CLFVBQW1DO1FBQW5DLGVBQVUsR0FBVixVQUFVLENBQXlCOzs7OztRQWI3Qyx3QkFBbUIsR0FBWSxLQUFLLENBQUM7Ozs7Ozs7UUFRckMsb0JBQWUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBS0MsQ0FBQzs7O1lBckIzRCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjthQUMxQzs7OztZQWpCQyxVQUFVOzs7a0NBdUJULEtBQUs7OEJBUUwsS0FBSzs7Ozs7Ozs7SUFSTixnRUFBOEM7Ozs7Ozs7O0lBUTlDLDREQUF3RDs7SUFLNUMsdURBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogSWYgdGhlIHdpbmRvdyBpc24ndCBzY3JvbGxhYmxlLCB0aGVuIHBsYWNlIHRoaXMgb24gdGhlIHNjcm9sbGFibGUgY29udGFpbmVyIHRoYXQgZHJhZ2dhYmxlIGVsZW1lbnRzIGFyZSBpbnNpZGUuIGUuZy5cbiAqIGBgYGh0bWxcbiAgPGRpdiBzdHlsZT1cIm92ZXJmbG93OiBzY3JvbGxcIiBtd2xEcmFnZ2FibGVTY3JvbGxDb250YWluZXI+XG4gICAgPGRpdiBtd2xEcmFnZ2FibGU+RHJhZyBtZSE8L2Rpdj5cbiAgPC9kaXY+XG4gIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbXdsRHJhZ2dhYmxlU2Nyb2xsQ29udGFpbmVyXScsXG59KVxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZVNjcm9sbENvbnRhaW5lckRpcmVjdGl2ZSB7XG4gIC8qKlxuICAgKiBUcmlnZ2VyIHRoZSBEcmFnU3RhcnQgYWZ0ZXIgYSBsb25nIHRvdWNoIGluIHNjcm9sbGFibGUgY29udGFpbmVyIHdoZW4gdHJ1ZVxuICAgKiBAZGVwcmVjYXRlZCB3aWxsIGJlIHJlbW92ZWQgaW4gdjUgKHVzZSBbdG91Y2hTdGFydExvbmdQcmVzc109XCJ7ZGVsYXk6IDMwMCwgZGVsdGE6IDMwfVwiIG9uIHRoZSBtd2xEcmFnZ2FibGUgZWxlbWVudCBpbnN0ZWFkKVxuICAgKi9cbiAgQElucHV0KCkgYWN0aXZlTG9uZ1ByZXNzRHJhZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBDb25maWd1cmF0aW9uIG9mIGEgbG9uZyB0b3VjaFxuICAgKiBEdXJhdGlvbiBpbiBtcyBvZiBhIGxvbmcgdG91Y2ggYmVmb3JlIGFjdGl2YXRpbmcgRHJhZ1N0YXJ0XG4gICAqIERlbHRhIG9mIHRoZVxuICAgKiBAZGVwcmVjYXRlZCB3aWxsIGJlIHJlbW92ZWQgaW4gdjUgKHVzZSBbdG91Y2hTdGFydExvbmdQcmVzc109XCJ7ZGVsYXk6IDMwMCwgZGVsdGE6IDMwfVwiIG9uIHRoZSBtd2xEcmFnZ2FibGUgZWxlbWVudCBpbnN0ZWFkKVxuICAgKi9cbiAgQElucHV0KCkgbG9uZ1ByZXNzQ29uZmlnID0geyBkdXJhdGlvbjogMzAwLCBkZWx0YTogMzAgfTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KSB7fVxufVxuIl19