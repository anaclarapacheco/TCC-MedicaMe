/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule, InjectionToken } from '@angular/core';
import { FlatpickrDirective } from './flatpickr.directive';
import { FlatpickrDefaults } from './flatpickr-defaults.service';
export var /** @type {?} */ USER_DEFAULTS = new InjectionToken('flatpickr defaults');
/**
 * @param {?} userDefaults
 * @return {?}
 */
export function defaultsFactory(userDefaults) {
    var /** @type {?} */ defaults = new FlatpickrDefaults();
    Object.assign(defaults, userDefaults);
    return defaults;
}
var FlatpickrModule = /** @class */ (function () {
    function FlatpickrModule() {
    }
    /**
     * @param {?=} userDefaults
     * @return {?}
     */
    FlatpickrModule.forRoot = /**
     * @param {?=} userDefaults
     * @return {?}
     */
    function (userDefaults) {
        if (userDefaults === void 0) { userDefaults = {}; }
        return {
            ngModule: FlatpickrModule,
            providers: [
                {
                    provide: USER_DEFAULTS,
                    useValue: userDefaults
                },
                {
                    provide: FlatpickrDefaults,
                    useFactory: defaultsFactory,
                    deps: [USER_DEFAULTS]
                }
            ]
        };
    };
    FlatpickrModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [FlatpickrDirective],
                    exports: [FlatpickrDirective]
                },] },
    ];
    return FlatpickrModule;
}());
export { FlatpickrModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhdHBpY2tyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXJ4LWZsYXRwaWNrci8iLCJzb3VyY2VzIjpbImZsYXRwaWNrci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxRQUFRLEVBRVIsY0FBYyxFQUVmLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFDTCxpQkFBaUIsRUFFbEIsTUFBTSw4QkFBOEIsQ0FBQztBQUV0QyxNQUFNLENBQUMscUJBQU0sYUFBYSxHQUFHLElBQUksY0FBYyxDQUFDLG9CQUFvQixDQUFDLENBQUM7Ozs7O0FBRXRFLE1BQU0sMEJBQ0osWUFBd0M7SUFFeEMscUJBQU0sUUFBUSxHQUFzQixJQUFJLGlCQUFpQixFQUFFLENBQUM7SUFDNUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDdEMsTUFBTSxDQUFDLFFBQVEsQ0FBQztDQUNqQjs7Ozs7Ozs7SUFPUSx1QkFBTzs7OztJQUFkLFVBQ0UsWUFBNkM7UUFBN0MsNkJBQUEsRUFBQSxpQkFBNkM7UUFFN0MsTUFBTSxDQUFDO1lBQ0wsUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxhQUFhO29CQUN0QixRQUFRLEVBQUUsWUFBWTtpQkFDdkI7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsVUFBVSxFQUFFLGVBQWU7b0JBQzNCLElBQUksRUFBRSxDQUFDLGFBQWEsQ0FBQztpQkFDdEI7YUFDRjtTQUNGLENBQUM7S0FDSDs7Z0JBdEJGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztvQkFDbEMsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7aUJBQzlCOzswQkF6QkQ7O1NBMEJhLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBOZ01vZHVsZSxcbiAgTW9kdWxlV2l0aFByb3ZpZGVycyxcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIFByb3ZpZGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmxhdHBpY2tyRGlyZWN0aXZlIH0gZnJvbSAnLi9mbGF0cGlja3IuZGlyZWN0aXZlJztcbmltcG9ydCB7XG4gIEZsYXRwaWNrckRlZmF1bHRzLFxuICBGbGF0cGlja3JEZWZhdWx0c0ludGVyZmFjZVxufSBmcm9tICcuL2ZsYXRwaWNrci1kZWZhdWx0cy5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IFVTRVJfREVGQVVMVFMgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ2ZsYXRwaWNrciBkZWZhdWx0cycpO1xuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdHNGYWN0b3J5KFxuICB1c2VyRGVmYXVsdHM6IEZsYXRwaWNrckRlZmF1bHRzSW50ZXJmYWNlXG4pOiBGbGF0cGlja3JEZWZhdWx0cyB7XG4gIGNvbnN0IGRlZmF1bHRzOiBGbGF0cGlja3JEZWZhdWx0cyA9IG5ldyBGbGF0cGlja3JEZWZhdWx0cygpO1xuICBPYmplY3QuYXNzaWduKGRlZmF1bHRzLCB1c2VyRGVmYXVsdHMpO1xuICByZXR1cm4gZGVmYXVsdHM7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0ZsYXRwaWNrckRpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtGbGF0cGlja3JEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIEZsYXRwaWNrck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KFxuICAgIHVzZXJEZWZhdWx0czogRmxhdHBpY2tyRGVmYXVsdHNJbnRlcmZhY2UgPSB7fVxuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEZsYXRwaWNrck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogVVNFUl9ERUZBVUxUUyxcbiAgICAgICAgICB1c2VWYWx1ZTogdXNlckRlZmF1bHRzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBGbGF0cGlja3JEZWZhdWx0cyxcbiAgICAgICAgICB1c2VGYWN0b3J5OiBkZWZhdWx0c0ZhY3RvcnksXG4gICAgICAgICAgZGVwczogW1VTRVJfREVGQVVMVFNdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=