/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Output, EventEmitter, NgZone, Input, Renderer2, Optional, } from '@angular/core';
import { distinctUntilChanged, pairwise, filter, map } from 'rxjs/operators';
import { DraggableHelper } from './draggable-helper.provider';
import { DraggableScrollContainerDirective } from './draggable-scroll-container.directive';
import { addClass, removeClass } from './util';
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
/**
 * @record
 * @template T
 */
export function DropEvent() { }
if (false) {
    /** @type {?} */
    DropEvent.prototype.dropData;
}
/**
 * @record
 */
export function ValidateDropParams() { }
if (false) {
    /**
     * ClientX value of the mouse location where the drop occurred
     * @type {?}
     */
    ValidateDropParams.prototype.clientX;
    /**
     * ClientY value of the mouse location where the drop occurred
     * @type {?}
     */
    ValidateDropParams.prototype.clientY;
    /**
     * The target of the event where the drop occurred
     * @type {?}
     */
    ValidateDropParams.prototype.target;
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
        this.dragEnter = new EventEmitter();
        /**
         * Called when a draggable element stops overlapping the element
         */
        this.dragLeave = new EventEmitter();
        /**
         * Called when a draggable element is moved over the element
         */
        this.dragOver = new EventEmitter();
        /**
         * Called when a draggable element is dropped on this element
         */
        this.drop = new EventEmitter(); // tslint:disable-line no-output-named-after-standard-event
    }
    /**
     * @return {?}
     */
    DroppableDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.currentDragSubscription = this.draggableHelper.currentDrag.subscribe((/**
         * @param {?} drag$
         * @return {?}
         */
        function (drag$) {
            addClass(_this.renderer, _this.element, _this.dragActiveClass);
            /** @type {?} */
            var droppableElement = {
                updateCache: true,
            };
            /** @type {?} */
            var deregisterScrollListener = _this.renderer.listen(_this.scrollContainer
                ? _this.scrollContainer.elementRef.nativeElement
                : 'window', 'scroll', (/**
             * @return {?}
             */
            function () {
                droppableElement.updateCache = true;
            }));
            /** @type {?} */
            var currentDragDropData;
            /** @type {?} */
            var overlaps$ = drag$.pipe(map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
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
                var isWithinElement = isCoordinateWithinRectangle(clientX, clientY, (/** @type {?} */ (droppableElement.rect)));
                /** @type {?} */
                var isDropAllowed = !_this.validateDrop ||
                    _this.validateDrop({ clientX: clientX, clientY: clientY, target: target });
                if (droppableElement.scrollContainerRect) {
                    return (isWithinElement &&
                        isDropAllowed &&
                        isCoordinateWithinRectangle(clientX, clientY, (/** @type {?} */ (droppableElement.scrollContainerRect))));
                }
                else {
                    return isWithinElement && isDropAllowed;
                }
            })));
            /** @type {?} */
            var overlapsChanged$ = overlaps$.pipe(distinctUntilChanged());
            /** @type {?} */
            var dragOverActive;
            overlapsChanged$
                .pipe(filter((/**
             * @param {?} overlapsNow
             * @return {?}
             */
            function (overlapsNow) { return overlapsNow; })))
                .subscribe((/**
             * @return {?}
             */
            function () {
                dragOverActive = true;
                addClass(_this.renderer, _this.element, _this.dragOverClass);
                _this.zone.run((/**
                 * @return {?}
                 */
                function () {
                    _this.dragEnter.next({
                        dropData: currentDragDropData,
                    });
                }));
            }));
            overlaps$.pipe(filter((/**
             * @param {?} overlapsNow
             * @return {?}
             */
            function (overlapsNow) { return overlapsNow; }))).subscribe((/**
             * @return {?}
             */
            function () {
                _this.zone.run((/**
                 * @return {?}
                 */
                function () {
                    _this.dragOver.next({
                        dropData: currentDragDropData,
                    });
                }));
            }));
            overlapsChanged$
                .pipe(pairwise(), filter((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = tslib_1.__read(_a, 2), didOverlap = _b[0], overlapsNow = _b[1];
                return didOverlap && !overlapsNow;
            })))
                .subscribe((/**
             * @return {?}
             */
            function () {
                dragOverActive = false;
                removeClass(_this.renderer, _this.element, _this.dragOverClass);
                _this.zone.run((/**
                 * @return {?}
                 */
                function () {
                    _this.dragLeave.next({
                        dropData: currentDragDropData,
                    });
                }));
            }));
            drag$.subscribe({
                complete: (/**
                 * @return {?}
                 */
                function () {
                    deregisterScrollListener();
                    removeClass(_this.renderer, _this.element, _this.dragActiveClass);
                    if (dragOverActive) {
                        removeClass(_this.renderer, _this.element, _this.dragOverClass);
                        _this.zone.run((/**
                         * @return {?}
                         */
                        function () {
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
        { type: Directive, args: [{
                    selector: '[mwlDroppable]',
                },] }
    ];
    /** @nocollapse */
    DroppableDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DraggableHelper },
        { type: NgZone },
        { type: Renderer2 },
        { type: DraggableScrollContainerDirective, decorators: [{ type: Optional }] }
    ]; };
    DroppableDirective.propDecorators = {
        dragOverClass: [{ type: Input }],
        dragActiveClass: [{ type: Input }],
        validateDrop: [{ type: Input }],
        dragEnter: [{ type: Output }],
        dragLeave: [{ type: Output }],
        dragOver: [{ type: Output }],
        drop: [{ type: Output }]
    };
    return DroppableDirective;
}());
export { DroppableDirective };
if (false) {
    /**
     * Added to the element when an element is dragged over it
     * @type {?}
     */
    DroppableDirective.prototype.dragOverClass;
    /**
     * Added to the element any time a draggable element is being dragged
     * @type {?}
     */
    DroppableDirective.prototype.dragActiveClass;
    /**
     * Allow custom behaviour to control when the element is dropped
     * @type {?}
     */
    DroppableDirective.prototype.validateDrop;
    /**
     * Called when a draggable element starts overlapping the element
     * @type {?}
     */
    DroppableDirective.prototype.dragEnter;
    /**
     * Called when a draggable element stops overlapping the element
     * @type {?}
     */
    DroppableDirective.prototype.dragLeave;
    /**
     * Called when a draggable element is moved over the element
     * @type {?}
     */
    DroppableDirective.prototype.dragOver;
    /**
     * Called when a draggable element is dropped on this element
     * @type {?}
     */
    DroppableDirective.prototype.drop;
    /** @type {?} */
    DroppableDirective.prototype.currentDragSubscription;
    /**
     * @type {?}
     * @private
     */
    DroppableDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    DroppableDirective.prototype.draggableHelper;
    /**
     * @type {?}
     * @private
     */
    DroppableDirective.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    DroppableDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    DroppableDirective.prototype.scrollContainer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcHBhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItZHJhZ2dhYmxlLWRyb3BwYWJsZS8iLCJzb3VyY2VzIjpbImxpYi9kcm9wcGFibGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxVQUFVLEVBRVYsTUFBTSxFQUNOLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLFNBQVMsRUFDVCxRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzNGLE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7Ozs7O0FBRS9DLFNBQVMsMkJBQTJCLENBQ2xDLE9BQWUsRUFDZixPQUFlLEVBQ2YsSUFBZ0I7SUFFaEIsT0FBTyxDQUNMLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSTtRQUNwQixPQUFPLElBQUksSUFBSSxDQUFDLEtBQUs7UUFDckIsT0FBTyxJQUFJLElBQUksQ0FBQyxHQUFHO1FBQ25CLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUN2QixDQUFDO0FBQ0osQ0FBQzs7Ozs7QUFFRCwrQkFFQzs7O0lBREMsNkJBQVk7Ozs7O0FBR2Qsd0NBYUM7Ozs7OztJQVRDLHFDQUFnQjs7Ozs7SUFJaEIscUNBQWdCOzs7OztJQUloQixvQ0FBb0I7O0FBS3RCO0lBeUNFLDRCQUNVLE9BQWdDLEVBQ2hDLGVBQWdDLEVBQ2hDLElBQVksRUFDWixRQUFtQixFQUNQLGVBQWtEO1FBSjlELFlBQU8sR0FBUCxPQUFPLENBQXlCO1FBQ2hDLG9CQUFl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Ozs7SUFLcEMsdUNBQW9EOzs7OztJQUtwRCx1Q0FBb0Q7Ozs7O0lBS3BELHNDQUFtRDs7Ozs7SUFLbkQsa0NBQStDOztJQUUvQyxxREFBc0M7Ozs7O0lBR3BDLHFDQUF3Qzs7Ozs7SUFDeEMsNkNBQXdDOzs7OztJQUN4QyxrQ0FBb0I7Ozs7O0lBQ3BCLHNDQUEyQjs7Ozs7SUFDM0IsNkNBQXNFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBPbkluaXQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE5nWm9uZSxcbiAgSW5wdXQsXG4gIFJlbmRlcmVyMixcbiAgT3B0aW9uYWwsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgcGFpcndpc2UsIGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRHJhZ2dhYmxlSGVscGVyIH0gZnJvbSAnLi9kcmFnZ2FibGUtaGVscGVyLnByb3ZpZGVyJztcbmltcG9ydCB7IERyYWdnYWJsZVNjcm9sbENvbnRhaW5lckRpcmVjdGl2ZSB9IGZyb20gJy4vZHJhZ2dhYmxlLXNjcm9sbC1jb250YWluZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IGFkZENsYXNzLCByZW1vdmVDbGFzcyB9IGZyb20gJy4vdXRpbCc7XG5cbmZ1bmN0aW9uIGlzQ29vcmRpbmF0ZVdpdGhpblJlY3RhbmdsZShcbiAgY2xpZW50WDogbnVtYmVyLFxuICBjbGllbnRZOiBudW1iZXIsXG4gIHJlY3Q6IENsaWVudFJlY3Rcbik6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIGNsaWVudFggPj0gcmVjdC5sZWZ0ICYmXG4gICAgY2xpZW50WCA8PSByZWN0LnJpZ2h0ICYmXG4gICAgY2xpZW50WSA+PSByZWN0LnRvcCAmJlxuICAgIGNsaWVudFkgPD0gcmVjdC5ib3R0b21cbiAgKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEcm9wRXZlbnQ8VCA9IGFueT4ge1xuICBkcm9wRGF0YTogVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBWYWxpZGF0ZURyb3BQYXJhbXMge1xuICAvKipcbiAgICogQ2xpZW50WCB2YWx1ZSBvZiB0aGUgbW91c2UgbG9jYXRpb24gd2hlcmUgdGhlIGRyb3Agb2NjdXJyZWRcbiAgICovXG4gIGNsaWVudFg6IG51bWJlcjtcbiAgLyoqXG4gICAqIENsaWVudFkgdmFsdWUgb2YgdGhlIG1vdXNlIGxvY2F0aW9uIHdoZXJlIHRoZSBkcm9wIG9jY3VycmVkXG4gICAqL1xuICBjbGllbnRZOiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgdGFyZ2V0IG9mIHRoZSBldmVudCB3aGVyZSB0aGUgZHJvcCBvY2N1cnJlZFxuICAgKi9cbiAgdGFyZ2V0OiBFdmVudFRhcmdldDtcbn1cblxuZXhwb3J0IHR5cGUgVmFsaWRhdGVEcm9wID0gKHBhcmFtczogVmFsaWRhdGVEcm9wUGFyYW1zKSA9PiBib29sZWFuO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbXdsRHJvcHBhYmxlXScsXG59KVxuZXhwb3J0IGNsYXNzIERyb3BwYWJsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIEFkZGVkIHRvIHRoZSBlbGVtZW50IHdoZW4gYW4gZWxlbWVudCBpcyBkcmFnZ2VkIG92ZXIgaXRcbiAgICovXG4gIEBJbnB1dCgpIGRyYWdPdmVyQ2xhc3M6IHN0cmluZztcblxuICAvKipcbiAgICogQWRkZWQgdG8gdGhlIGVsZW1lbnQgYW55IHRpbWUgYSBkcmFnZ2FibGUgZWxlbWVudCBpcyBiZWluZyBkcmFnZ2VkXG4gICAqL1xuICBASW5wdXQoKSBkcmFnQWN0aXZlQ2xhc3M6IHN0cmluZztcblxuICAvKipcbiAgICogQWxsb3cgY3VzdG9tIGJlaGF2aW91ciB0byBjb250cm9sIHdoZW4gdGhlIGVsZW1lbnQgaXMgZHJvcHBlZFxuICAgKi9cbiAgQElucHV0KCkgdmFsaWRhdGVEcm9wOiBWYWxpZGF0ZURyb3A7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGEgZHJhZ2dhYmxlIGVsZW1lbnQgc3RhcnRzIG92ZXJsYXBwaW5nIHRoZSBlbGVtZW50XG4gICAqL1xuICBAT3V0cHV0KCkgZHJhZ0VudGVyID0gbmV3IEV2ZW50RW1pdHRlcjxEcm9wRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGEgZHJhZ2dhYmxlIGVsZW1lbnQgc3RvcHMgb3ZlcmxhcHBpbmcgdGhlIGVsZW1lbnRcbiAgICovXG4gIEBPdXRwdXQoKSBkcmFnTGVhdmUgPSBuZXcgRXZlbnRFbWl0dGVyPERyb3BFdmVudD4oKTtcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYSBkcmFnZ2FibGUgZWxlbWVudCBpcyBtb3ZlZCBvdmVyIHRoZSBlbGVtZW50XG4gICAqL1xuICBAT3V0cHV0KCkgZHJhZ092ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPERyb3BFdmVudD4oKTtcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYSBkcmFnZ2FibGUgZWxlbWVudCBpcyBkcm9wcGVkIG9uIHRoaXMgZWxlbWVudFxuICAgKi9cbiAgQE91dHB1dCgpIGRyb3AgPSBuZXcgRXZlbnRFbWl0dGVyPERyb3BFdmVudD4oKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZSBuby1vdXRwdXQtbmFtZWQtYWZ0ZXItc3RhbmRhcmQtZXZlbnRcblxuICBjdXJyZW50RHJhZ1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBkcmFnZ2FibGVIZWxwZXI6IERyYWdnYWJsZUhlbHBlcixcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBzY3JvbGxDb250YWluZXI6IERyYWdnYWJsZVNjcm9sbENvbnRhaW5lckRpcmVjdGl2ZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jdXJyZW50RHJhZ1N1YnNjcmlwdGlvbiA9IHRoaXMuZHJhZ2dhYmxlSGVscGVyLmN1cnJlbnREcmFnLnN1YnNjcmliZShcbiAgICAgIChkcmFnJCkgPT4ge1xuICAgICAgICBhZGRDbGFzcyh0aGlzLnJlbmRlcmVyLCB0aGlzLmVsZW1lbnQsIHRoaXMuZHJhZ0FjdGl2ZUNsYXNzKTtcbiAgICAgICAgY29uc3QgZHJvcHBhYmxlRWxlbWVudDoge1xuICAgICAgICAgIHJlY3Q/OiBDbGllbnRSZWN0O1xuICAgICAgICAgIHVwZGF0ZUNhY2hlOiBib29sZWFuO1xuICAgICAgICAgIHNjcm9sbENvbnRhaW5lclJlY3Q/OiBDbGllbnRSZWN0O1xuICAgICAgICB9ID0ge1xuICAgICAgICAgIHVwZGF0ZUNhY2hlOiB0cnVlLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGRlcmVnaXN0ZXJTY3JvbGxMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKFxuICAgICAgICAgIHRoaXMuc2Nyb2xsQ29udGFpbmVyXG4gICAgICAgICAgICA/IHRoaXMuc2Nyb2xsQ29udGFpbmVyLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFxuICAgICAgICAgICAgOiAnd2luZG93JyxcbiAgICAgICAgICAnc2Nyb2xsJyxcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBkcm9wcGFibGVFbGVtZW50LnVwZGF0ZUNhY2hlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IGN1cnJlbnREcmFnRHJvcERhdGE6IGFueTtcbiAgICAgICAgY29uc3Qgb3ZlcmxhcHMkID0gZHJhZyQucGlwZShcbiAgICAgICAgICBtYXAoKHsgY2xpZW50WCwgY2xpZW50WSwgZHJvcERhdGEsIHRhcmdldCB9KSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50RHJhZ0Ryb3BEYXRhID0gZHJvcERhdGE7XG4gICAgICAgICAgICBpZiAoZHJvcHBhYmxlRWxlbWVudC51cGRhdGVDYWNoZSkge1xuICAgICAgICAgICAgICBkcm9wcGFibGVFbGVtZW50LnJlY3QgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgZHJvcHBhYmxlRWxlbWVudC5zY3JvbGxDb250YWluZXJSZWN0ID0gdGhpcy5zY3JvbGxDb250YWluZXIuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRyb3BwYWJsZUVsZW1lbnQudXBkYXRlQ2FjaGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGlzV2l0aGluRWxlbWVudCA9IGlzQ29vcmRpbmF0ZVdpdGhpblJlY3RhbmdsZShcbiAgICAgICAgICAgICAgY2xpZW50WCxcbiAgICAgICAgICAgICAgY2xpZW50WSxcbiAgICAgICAgICAgICAgZHJvcHBhYmxlRWxlbWVudC5yZWN0IGFzIENsaWVudFJlY3RcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IGlzRHJvcEFsbG93ZWQgPVxuICAgICAgICAgICAgICAhdGhpcy52YWxpZGF0ZURyb3AgfHxcbiAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZURyb3AoeyBjbGllbnRYLCBjbGllbnRZLCB0YXJnZXQgfSk7XG5cbiAgICAgICAgICAgIGlmIChkcm9wcGFibGVFbGVtZW50LnNjcm9sbENvbnRhaW5lclJlY3QpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBpc1dpdGhpbkVsZW1lbnQgJiZcbiAgICAgICAgICAgICAgICBpc0Ryb3BBbGxvd2VkICYmXG4gICAgICAgICAgICAgICAgaXNDb29yZGluYXRlV2l0aGluUmVjdGFuZ2xlKFxuICAgICAgICAgICAgICAgICAgY2xpZW50WCxcbiAgICAgICAgICAgICAgICAgIGNsaWVudFksXG4gICAgICAgICAgICAgICAgICBkcm9wcGFibGVFbGVtZW50LnNjcm9sbENvbnRhaW5lclJlY3QgYXMgQ2xpZW50UmVjdFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBpc1dpdGhpbkVsZW1lbnQgJiYgaXNEcm9wQWxsb3dlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IG92ZXJsYXBzQ2hhbmdlZCQgPSBvdmVybGFwcyQucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcblxuICAgICAgICBsZXQgZHJhZ092ZXJBY3RpdmU6IGJvb2xlYW47IC8vIFRPRE8gLSBzZWUgaWYgdGhlcmUncyBhIHdheSBvZiBkb2luZyB0aGlzIHZpYSByeGpzXG5cbiAgICAgICAgb3ZlcmxhcHNDaGFuZ2VkJFxuICAgICAgICAgIC5waXBlKGZpbHRlcigob3ZlcmxhcHNOb3cpID0+IG92ZXJsYXBzTm93KSlcbiAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGRyYWdPdmVyQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGFkZENsYXNzKHRoaXMucmVuZGVyZXIsIHRoaXMuZWxlbWVudCwgdGhpcy5kcmFnT3ZlckNsYXNzKTtcbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmRyYWdFbnRlci5uZXh0KHtcbiAgICAgICAgICAgICAgICBkcm9wRGF0YTogY3VycmVudERyYWdEcm9wRGF0YSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICBvdmVybGFwcyQucGlwZShmaWx0ZXIoKG92ZXJsYXBzTm93KSA9PiBvdmVybGFwc05vdykpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRyYWdPdmVyLm5leHQoe1xuICAgICAgICAgICAgICBkcm9wRGF0YTogY3VycmVudERyYWdEcm9wRGF0YSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBvdmVybGFwc0NoYW5nZWQkXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBwYWlyd2lzZSgpLFxuICAgICAgICAgICAgZmlsdGVyKChbZGlkT3ZlcmxhcCwgb3ZlcmxhcHNOb3ddKSA9PiBkaWRPdmVybGFwICYmICFvdmVybGFwc05vdylcbiAgICAgICAgICApXG4gICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICBkcmFnT3ZlckFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5yZW5kZXJlciwgdGhpcy5lbGVtZW50LCB0aGlzLmRyYWdPdmVyQ2xhc3MpO1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZHJhZ0xlYXZlLm5leHQoe1xuICAgICAgICAgICAgICAgIGRyb3BEYXRhOiBjdXJyZW50RHJhZ0Ryb3BEYXRhLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGRyYWckLnN1YnNjcmliZSh7XG4gICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgIGRlcmVnaXN0ZXJTY3JvbGxMaXN0ZW5lcigpO1xuICAgICAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5yZW5kZXJlciwgdGhpcy5lbGVtZW50LCB0aGlzLmRyYWdBY3RpdmVDbGFzcyk7XG4gICAgICAgICAgICBpZiAoZHJhZ092ZXJBY3RpdmUpIHtcbiAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5yZW5kZXJlciwgdGhpcy5lbGVtZW50LCB0aGlzLmRyYWdPdmVyQ2xhc3MpO1xuICAgICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3AubmV4dCh7XG4gICAgICAgICAgICAgICAgICBkcm9wRGF0YTogY3VycmVudERyYWdEcm9wRGF0YSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnREcmFnU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmN1cnJlbnREcmFnU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=