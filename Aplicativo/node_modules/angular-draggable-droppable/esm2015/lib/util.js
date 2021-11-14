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
export function addClass(renderer, element, classToAdd) {
    if (classToAdd) {
        classToAdd
            .split(' ')
            .forEach((/**
         * @param {?} className
         * @return {?}
         */
        (className) => renderer.addClass(element.nativeElement, className)));
    }
}
/**
 * @param {?} renderer
 * @param {?} element
 * @param {?} classToRemove
 * @return {?}
 */
export function removeClass(renderer, element, classToRemove) {
    if (classToRemove) {
        classToRemove
            .split(' ')
            .forEach((/**
         * @param {?} className
         * @return {?}
         */
        (className) => renderer.removeClass(element.nativeElement, className)));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItZHJhZ2dhYmxlLWRyb3BwYWJsZS8iLCJzb3VyY2VzIjpbImxpYi91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSxNQUFNLFVBQVUsUUFBUSxDQUN0QixRQUFtQixFQUNuQixPQUFnQyxFQUNoQyxVQUFrQjtJQUVsQixJQUFJLFVBQVUsRUFBRTtRQUNkLFVBQVU7YUFDUCxLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ1YsT0FBTzs7OztRQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FDckIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxFQUNwRCxDQUFDO0tBQ0w7QUFDSCxDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLFdBQVcsQ0FDekIsUUFBbUIsRUFDbkIsT0FBZ0MsRUFDaEMsYUFBcUI7SUFFckIsSUFBSSxhQUFhLEVBQUU7UUFDakIsYUFBYTthQUNWLEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDVixPQUFPOzs7O1FBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUNyQixRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLEVBQ3ZELENBQUM7S0FDTDtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKFxuICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICBlbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgY2xhc3NUb0FkZDogc3RyaW5nXG4pIHtcbiAgaWYgKGNsYXNzVG9BZGQpIHtcbiAgICBjbGFzc1RvQWRkXG4gICAgICAuc3BsaXQoJyAnKVxuICAgICAgLmZvckVhY2goKGNsYXNzTmFtZSkgPT5cbiAgICAgICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudC5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpXG4gICAgICApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzcyhcbiAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgZWxlbWVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gIGNsYXNzVG9SZW1vdmU6IHN0cmluZ1xuKSB7XG4gIGlmIChjbGFzc1RvUmVtb3ZlKSB7XG4gICAgY2xhc3NUb1JlbW92ZVxuICAgICAgLnNwbGl0KCcgJylcbiAgICAgIC5mb3JFYWNoKChjbGFzc05hbWUpID0+XG4gICAgICAgIHJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnQubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKVxuICAgICAgKTtcbiAgfVxufVxuIl19