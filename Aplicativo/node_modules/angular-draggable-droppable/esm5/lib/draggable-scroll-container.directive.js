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
        { type: Directive, args: [{
                    selector: '[mwlDraggableScrollContainer]',
                },] }
    ];
    /** @nocollapse */
    DraggableScrollContainerDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    DraggableScrollContainerDirective.propDecorators = {
        activeLongPressDrag: [{ type: Input }],
        longPressConfig: [{ type: Input }]
    };
    return DraggableScrollContainerDirective;
}());
export { DraggableScrollContainerDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLXNjcm9sbC1jb250YWluZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1kcmFnZ2FibGUtZHJvcHBhYmxlLyIsInNvdXJjZXMiOlsibGliL2RyYWdnYWJsZS1zY3JvbGwtY29udGFpbmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxHQUlOLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7QUFVdkI7SUFrQkU7O09BRUc7SUFDSCwyQ0FBbUIsVUFBbUM7UUFBbkMsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7Ozs7O1FBYjdDLHdCQUFtQixHQUFZLEtBQUssQ0FBQzs7Ozs7OztRQVFyQyxvQkFBZSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFLQyxDQUFDOztnQkFyQjNELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsK0JBQStCO2lCQUMxQzs7OztnQkFqQkMsVUFBVTs7O3NDQXVCVCxLQUFLO2tDQVFMLEtBQUs7O0lBTVIsd0NBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQW5CWSxpQ0FBaUM7Ozs7Ozs7SUFLNUMsZ0VBQThDOzs7Ozs7OztJQVE5Qyw0REFBd0Q7O0lBSzVDLHVEQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIElmIHRoZSB3aW5kb3cgaXNuJ3Qgc2Nyb2xsYWJsZSwgdGhlbiBwbGFjZSB0aGlzIG9uIHRoZSBzY3JvbGxhYmxlIGNvbnRhaW5lciB0aGF0IGRyYWdnYWJsZSBlbGVtZW50cyBhcmUgaW5zaWRlLiBlLmcuXG4gKiBgYGBodG1sXG4gIDxkaXYgc3R5bGU9XCJvdmVyZmxvdzogc2Nyb2xsXCIgbXdsRHJhZ2dhYmxlU2Nyb2xsQ29udGFpbmVyPlxuICAgIDxkaXYgbXdsRHJhZ2dhYmxlPkRyYWcgbWUhPC9kaXY+XG4gIDwvZGl2PlxuICBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW213bERyYWdnYWJsZVNjcm9sbENvbnRhaW5lcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVTY3JvbGxDb250YWluZXJEaXJlY3RpdmUge1xuICAvKipcbiAgICogVHJpZ2dlciB0aGUgRHJhZ1N0YXJ0IGFmdGVyIGEgbG9uZyB0b3VjaCBpbiBzY3JvbGxhYmxlIGNvbnRhaW5lciB3aGVuIHRydWVcbiAgICogQGRlcHJlY2F0ZWQgd2lsbCBiZSByZW1vdmVkIGluIHY1ICh1c2UgW3RvdWNoU3RhcnRMb25nUHJlc3NdPVwie2RlbGF5OiAzMDAsIGRlbHRhOiAzMH1cIiBvbiB0aGUgbXdsRHJhZ2dhYmxlIGVsZW1lbnQgaW5zdGVhZClcbiAgICovXG4gIEBJbnB1dCgpIGFjdGl2ZUxvbmdQcmVzc0RyYWc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQ29uZmlndXJhdGlvbiBvZiBhIGxvbmcgdG91Y2hcbiAgICogRHVyYXRpb24gaW4gbXMgb2YgYSBsb25nIHRvdWNoIGJlZm9yZSBhY3RpdmF0aW5nIERyYWdTdGFydFxuICAgKiBEZWx0YSBvZiB0aGVcbiAgICogQGRlcHJlY2F0ZWQgd2lsbCBiZSByZW1vdmVkIGluIHY1ICh1c2UgW3RvdWNoU3RhcnRMb25nUHJlc3NdPVwie2RlbGF5OiAzMDAsIGRlbHRhOiAzMH1cIiBvbiB0aGUgbXdsRHJhZ2dhYmxlIGVsZW1lbnQgaW5zdGVhZClcbiAgICovXG4gIEBJbnB1dCgpIGxvbmdQcmVzc0NvbmZpZyA9IHsgZHVyYXRpb246IDMwMCwgZGVsdGE6IDMwIH07XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge31cbn1cbiJdfQ==