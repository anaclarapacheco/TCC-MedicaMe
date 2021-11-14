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
        function (className) {
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
export function removeClass(renderer, element, classToRemove) {
    if (classToRemove) {
        classToRemove
            .split(' ')
            .forEach((/**
         * @param {?} className
         * @return {?}
         */
        function (className) {
            return renderer.removeClass(element.nativeElement, className);
        }));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItZHJhZ2dhYmxlLWRyb3BwYWJsZS8iLCJzb3VyY2VzIjpbImxpYi91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSxNQUFNLFVBQVUsUUFBUSxDQUN0QixRQUFtQixFQUNuQixPQUFnQyxFQUNoQyxVQUFrQjtJQUVsQixJQUFJLFVBQVUsRUFBRTtRQUNkLFVBQVU7YUFDUCxLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ1YsT0FBTzs7OztRQUFDLFVBQUMsU0FBUztZQUNqQixPQUFBLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUM7UUFBbkQsQ0FBbUQsRUFDcEQsQ0FBQztLQUNMO0FBQ0gsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxXQUFXLENBQ3pCLFFBQW1CLEVBQ25CLE9BQWdDLEVBQ2hDLGFBQXFCO0lBRXJCLElBQUksYUFBYSxFQUFFO1FBQ2pCLGFBQWE7YUFDVixLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ1YsT0FBTzs7OztRQUFDLFVBQUMsU0FBUztZQUNqQixPQUFBLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUM7UUFBdEQsQ0FBc0QsRUFDdkQsQ0FBQztLQUNMO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3MoXG4gIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gIGVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICBjbGFzc1RvQWRkOiBzdHJpbmdcbikge1xuICBpZiAoY2xhc3NUb0FkZCkge1xuICAgIGNsYXNzVG9BZGRcbiAgICAgIC5zcGxpdCgnICcpXG4gICAgICAuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PlxuICAgICAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSlcbiAgICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKFxuICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICBlbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgY2xhc3NUb1JlbW92ZTogc3RyaW5nXG4pIHtcbiAgaWYgKGNsYXNzVG9SZW1vdmUpIHtcbiAgICBjbGFzc1RvUmVtb3ZlXG4gICAgICAuc3BsaXQoJyAnKVxuICAgICAgLmZvckVhY2goKGNsYXNzTmFtZSkgPT5cbiAgICAgICAgcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbWVudC5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpXG4gICAgICApO1xuICB9XG59XG4iXX0=