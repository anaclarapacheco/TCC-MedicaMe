/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @record
 */
export function CurrentDragData() { }
if (false) {
    /** @type {?} */
    CurrentDragData.prototype.clientX;
    /** @type {?} */
    CurrentDragData.prototype.clientY;
    /** @type {?} */
    CurrentDragData.prototype.dropData;
    /** @type {?} */
    CurrentDragData.prototype.target;
}
var DraggableHelper = /** @class */ (function () {
    function DraggableHelper() {
        this.currentDrag = new Subject();
    }
    DraggableHelper.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ DraggableHelper.ngInjectableDef = i0.defineInjectable({ factory: function DraggableHelper_Factory() { return new DraggableHelper(); }, token: DraggableHelper, providedIn: "root" });
    return DraggableHelper;
}());
export { DraggableHelper };
if (false) {
    /** @type {?} */
    DraggableHelper.prototype.currentDrag;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLWhlbHBlci5wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItZHJhZ2dhYmxlLWRyb3BwYWJsZS8iLCJzb3VyY2VzIjpbImxpYi9kcmFnZ2FibGUtaGVscGVyLnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBRTNDLHFDQUtDOzs7SUFKQyxrQ0FBZ0I7O0lBQ2hCLGtDQUFnQjs7SUFDaEIsbUNBQWM7O0lBQ2QsaUNBQW9COztBQUd0QjtJQUFBO1FBSUUsZ0JBQVcsR0FBRyxJQUFJLE9BQU8sRUFBNEIsQ0FBQztLQUN2RDs7Z0JBTEEsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OzBCQVpEO0NBZUMsQUFMRCxJQUtDO1NBRlksZUFBZTs7O0lBQzFCLHNDQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBDdXJyZW50RHJhZ0RhdGEge1xuICBjbGllbnRYOiBudW1iZXI7XG4gIGNsaWVudFk6IG51bWJlcjtcbiAgZHJvcERhdGE6IGFueTtcbiAgdGFyZ2V0OiBFdmVudFRhcmdldDtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZUhlbHBlciB7XG4gIGN1cnJlbnREcmFnID0gbmV3IFN1YmplY3Q8U3ViamVjdDxDdXJyZW50RHJhZ0RhdGE+PigpO1xufVxuIl19