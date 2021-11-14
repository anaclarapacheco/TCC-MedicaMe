/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class DroppableDirective {
    /**
     * @param {?} element
     * @param {?} draggableHelper
     * @param {?} zone
     * @param {?} renderer
     * @param {?} scrollContainer
     */
    constructor(element, draggableHelper, zone, renderer, scrollContainer) {
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
    ngOnInit() {
        this.currentDragSubscription = this.draggableHelper.currentDrag.subscribe((/**
         * @param {?} drag$
         * @return {?}
         */
        (drag$) => {
            addClass(this.renderer, this.element, this.dragActiveClass);
            /** @type {?} */
            const droppableElement = {
                updateCache: true,
            };
            /** @type {?} */
            const deregisterScrollListener = this.renderer.listen(this.scrollContainer
                ? this.scrollContainer.elementRef.nativeElement
                : 'window', 'scroll', (/**
             * @return {?}
             */
            () => {
                droppableElement.updateCache = true;
            }));
            /** @type {?} */
            let currentDragDropData;
            /** @type {?} */
            const overlaps$ = drag$.pipe(map((/**
             * @param {?} __0
             * @return {?}
             */
            ({ clientX, clientY, dropData, target }) => {
                currentDragDropData = dropData;
                if (droppableElement.updateCache) {
                    droppableElement.rect = this.element.nativeElement.getBoundingClientRect();
                    if (this.scrollContainer) {
                        droppableElement.scrollContainerRect = this.scrollContainer.elementRef.nativeElement.getBoundingClientRect();
                    }
                    droppableElement.updateCache = false;
                }
                /** @type {?} */
                const isWithinElement = isCoordinateWithinRectangle(clientX, clientY, (/** @type {?} */ (droppableElement.rect)));
                /** @type {?} */
                const isDropAllowed = !this.validateDrop ||
                    this.validateDrop({ clientX, clientY, target });
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
            const overlapsChanged$ = overlaps$.pipe(distinctUntilChanged());
            /** @type {?} */
            let dragOverActive;
            overlapsChanged$
                .pipe(filter((/**
             * @param {?} overlapsNow
             * @return {?}
             */
            (overlapsNow) => overlapsNow)))
                .subscribe((/**
             * @return {?}
             */
            () => {
                dragOverActive = true;
                addClass(this.renderer, this.element, this.dragOverClass);
                this.zone.run((/**
                 * @return {?}
                 */
                () => {
                    this.dragEnter.next({
                        dropData: currentDragDropData,
                    });
                }));
            }));
            overlaps$.pipe(filter((/**
             * @param {?} overlapsNow
             * @return {?}
             */
            (overlapsNow) => overlapsNow))).subscribe((/**
             * @return {?}
             */
            () => {
                this.zone.run((/**
                 * @return {?}
                 */
                () => {
                    this.dragOver.next({
                        dropData: currentDragDropData,
                    });
                }));
            }));
            overlapsChanged$
                .pipe(pairwise(), filter((/**
             * @param {?} __0
             * @return {?}
             */
            ([didOverlap, overlapsNow]) => didOverlap && !overlapsNow)))
                .subscribe((/**
             * @return {?}
             */
            () => {
                dragOverActive = false;
                removeClass(this.renderer, this.element, this.dragOverClass);
                this.zone.run((/**
                 * @return {?}
                 */
                () => {
                    this.dragLeave.next({
                        dropData: currentDragDropData,
                    });
                }));
            }));
            drag$.subscribe({
                complete: (/**
                 * @return {?}
                 */
                () => {
                    deregisterScrollListener();
                    removeClass(this.renderer, this.element, this.dragActiveClass);
                    if (dragOverActive) {
                        removeClass(this.renderer, this.element, this.dragOverClass);
                        this.zone.run((/**
                         * @return {?}
                         */
                        () => {
                            this.drop.next({
                                dropData: currentDragDropData,
                            });
                        }));
                    }
                }),
            });
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.currentDragSubscription) {
            this.currentDragSubscription.unsubscribe();
        }
    }
}
DroppableDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mwlDroppable]',
            },] }
];
/** @nocollapse */
DroppableDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: DraggableHelper },
    { type: NgZone },
    { type: Renderer2 },
    { type: DraggableScrollContainerDirective, decorators: [{ type: Optional }] }
];
DroppableDirective.propDecorators = {
    dragOverClass: [{ type: Input }],
    dragActiveClass: [{ type: Input }],
    validateDrop: [{ type: Input }],
    dragEnter: [{ type: Output }],
    dragLeave: [{ type: Output }],
    dragOver: [{ type: Output }],
    drop: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcHBhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItZHJhZ2dhYmxlLWRyb3BwYWJsZS8iLCJzb3VyY2VzIjpbImxpYi9kcm9wcGFibGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULFVBQVUsRUFFVixNQUFNLEVBQ04sWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsU0FBUyxFQUNULFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDM0YsT0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxRQUFRLENBQUM7Ozs7Ozs7QUFFL0MsU0FBUywyQkFBMkIsQ0FDbEMsT0FBZSxFQUNmLE9BQWUsRUFDZixJQUFnQjtJQUVoQixPQUFPLENBQ0wsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJO1FBQ3BCLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSztRQUNyQixPQUFPLElBQUksSUFBSSxDQUFDLEdBQUc7UUFDbkIsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQ3ZCLENBQUM7QUFDSixDQUFDOzs7OztBQUVELCtCQUVDOzs7SUFEQyw2QkFBWTs7Ozs7QUFHZCx3Q0FhQzs7Ozs7O0lBVEMscUNBQWdCOzs7OztJQUloQixxQ0FBZ0I7Ozs7O0lBSWhCLG9DQUFvQjs7QUFRdEIsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7Ozs7SUFzQzdCLFlBQ1UsT0FBZ0MsRUFDaEMsZUFBZ0MsRUFDaEMsSUFBWSxFQUNaLFFBQW1CLEVBQ1AsZUFBa0Q7UUFKOUQsWUFBTyxHQUFQ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Ozs7OztJQUtwQyx1Q0FBb0Q7Ozs7O0lBS3BELHVDQUFvRDs7Ozs7SUFLcEQsc0NBQW1EOzs7OztJQUtuRCxrQ0FBK0M7O0lBRS9DLHFEQUFzQzs7Ozs7SUFHcEMscUNBQXdDOzs7OztJQUN4Qyw2Q0FBd0M7Ozs7O0lBQ3hDLGtDQUFvQjs7Ozs7SUFDcEIsc0NBQTJCOzs7OztJQUMzQiw2Q0FBc0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIE9uSW5pdCxcbiAgRWxlbWVudFJlZixcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgTmdab25lLFxuICBJbnB1dCxcbiAgUmVuZGVyZXIyLFxuICBPcHRpb25hbCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBwYWlyd2lzZSwgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBEcmFnZ2FibGVIZWxwZXIgfSBmcm9tICcuL2RyYWdnYWJsZS1oZWxwZXIucHJvdmlkZXInO1xuaW1wb3J0IHsgRHJhZ2dhYmxlU2Nyb2xsQ29udGFpbmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9kcmFnZ2FibGUtc2Nyb2xsLWNvbnRhaW5lci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzIH0gZnJvbSAnLi91dGlsJztcblxuZnVuY3Rpb24gaXNDb29yZGluYXRlV2l0aGluUmVjdGFuZ2xlKFxuICBjbGllbnRYOiBudW1iZXIsXG4gIGNsaWVudFk6IG51bWJlcixcbiAgcmVjdDogQ2xpZW50UmVjdFxuKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgY2xpZW50WCA+PSByZWN0LmxlZnQgJiZcbiAgICBjbGllbnRYIDw9IHJlY3QucmlnaHQgJiZcbiAgICBjbGllbnRZID49IHJlY3QudG9wICYmXG4gICAgY2xpZW50WSA8PSByZWN0LmJvdHRvbVxuICApO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERyb3BFdmVudDxUID0gYW55PiB7XG4gIGRyb3BEYXRhOiBUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZhbGlkYXRlRHJvcFBhcmFtcyB7XG4gIC8qKlxuICAgKiBDbGllbnRYIHZhbHVlIG9mIHRoZSBtb3VzZSBsb2NhdGlvbiB3aGVyZSB0aGUgZHJvcCBvY2N1cnJlZFxuICAgKi9cbiAgY2xpZW50WDogbnVtYmVyO1xuICAvKipcbiAgICogQ2xpZW50WSB2YWx1ZSBvZiB0aGUgbW91c2UgbG9jYXRpb24gd2hlcmUgdGhlIGRyb3Agb2NjdXJyZWRcbiAgICovXG4gIGNsaWVudFk6IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSB0YXJnZXQgb2YgdGhlIGV2ZW50IHdoZXJlIHRoZSBkcm9wIG9jY3VycmVkXG4gICAqL1xuICB0YXJnZXQ6IEV2ZW50VGFyZ2V0O1xufVxuXG5leHBvcnQgdHlwZSBWYWxpZGF0ZURyb3AgPSAocGFyYW1zOiBWYWxpZGF0ZURyb3BQYXJhbXMpID0+IGJvb2xlYW47XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttd2xEcm9wcGFibGVdJyxcbn0pXG5leHBvcnQgY2xhc3MgRHJvcHBhYmxlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogQWRkZWQgdG8gdGhlIGVsZW1lbnQgd2hlbiBhbiBlbGVtZW50IGlzIGRyYWdnZWQgb3ZlciBpdFxuICAgKi9cbiAgQElucHV0KCkgZHJhZ092ZXJDbGFzczogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBZGRlZCB0byB0aGUgZWxlbWVudCBhbnkgdGltZSBhIGRyYWdnYWJsZSBlbGVtZW50IGlzIGJlaW5nIGRyYWdnZWRcbiAgICovXG4gIEBJbnB1dCgpIGRyYWdBY3RpdmVDbGFzczogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBbGxvdyBjdXN0b20gYmVoYXZpb3VyIHRvIGNvbnRyb2wgd2hlbiB0aGUgZWxlbWVudCBpcyBkcm9wcGVkXG4gICAqL1xuICBASW5wdXQoKSB2YWxpZGF0ZURyb3A6IFZhbGlkYXRlRHJvcDtcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYSBkcmFnZ2FibGUgZWxlbWVudCBzdGFydHMgb3ZlcmxhcHBpbmcgdGhlIGVsZW1lbnRcbiAgICovXG4gIEBPdXRwdXQoKSBkcmFnRW50ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPERyb3BFdmVudD4oKTtcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYSBkcmFnZ2FibGUgZWxlbWVudCBzdG9wcyBvdmVybGFwcGluZyB0aGUgZWxlbWVudFxuICAgKi9cbiAgQE91dHB1dCgpIGRyYWdMZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8RHJvcEV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhIGRyYWdnYWJsZSBlbGVtZW50IGlzIG1vdmVkIG92ZXIgdGhlIGVsZW1lbnRcbiAgICovXG4gIEBPdXRwdXQoKSBkcmFnT3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8RHJvcEV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhIGRyYWdnYWJsZSBlbGVtZW50IGlzIGRyb3BwZWQgb24gdGhpcyBlbGVtZW50XG4gICAqL1xuICBAT3V0cHV0KCkgZHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8RHJvcEV2ZW50PigpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lIG5vLW91dHB1dC1uYW1lZC1hZnRlci1zdGFuZGFyZC1ldmVudFxuXG4gIGN1cnJlbnREcmFnU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcml2YXRlIGRyYWdnYWJsZUhlbHBlcjogRHJhZ2dhYmxlSGVscGVyLFxuICAgIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIHNjcm9sbENvbnRhaW5lcjogRHJhZ2dhYmxlU2Nyb2xsQ29udGFpbmVyRGlyZWN0aXZlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmN1cnJlbnREcmFnU3Vic2NyaXB0aW9uID0gdGhpcy5kcmFnZ2FibGVIZWxwZXIuY3VycmVudERyYWcuc3Vic2NyaWJlKFxuICAgICAgKGRyYWckKSA9PiB7XG4gICAgICAgIGFkZENsYXNzKHRoaXMucmVuZGVyZXIsIHRoaXMuZWxlbWVudCwgdGhpcy5kcmFnQWN0aXZlQ2xhc3MpO1xuICAgICAgICBjb25zdCBkcm9wcGFibGVFbGVtZW50OiB7XG4gICAgICAgICAgcmVjdD86IENsaWVudFJlY3Q7XG4gICAgICAgICAgdXBkYXRlQ2FjaGU6IGJvb2xlYW47XG4gICAgICAgICAgc2Nyb2xsQ29udGFpbmVyUmVjdD86IENsaWVudFJlY3Q7XG4gICAgICAgIH0gPSB7XG4gICAgICAgICAgdXBkYXRlQ2FjaGU6IHRydWUsXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZGVyZWdpc3RlclNjcm9sbExpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgdGhpcy5zY3JvbGxDb250YWluZXJcbiAgICAgICAgICAgID8gdGhpcy5zY3JvbGxDb250YWluZXIuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XG4gICAgICAgICAgICA6ICd3aW5kb3cnLFxuICAgICAgICAgICdzY3JvbGwnLFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGRyb3BwYWJsZUVsZW1lbnQudXBkYXRlQ2FjaGUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgY3VycmVudERyYWdEcm9wRGF0YTogYW55O1xuICAgICAgICBjb25zdCBvdmVybGFwcyQgPSBkcmFnJC5waXBlKFxuICAgICAgICAgIG1hcCgoeyBjbGllbnRYLCBjbGllbnRZLCBkcm9wRGF0YSwgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgICAgIGN1cnJlbnREcmFnRHJvcERhdGEgPSBkcm9wRGF0YTtcbiAgICAgICAgICAgIGlmIChkcm9wcGFibGVFbGVtZW50LnVwZGF0ZUNhY2hlKSB7XG4gICAgICAgICAgICAgIGRyb3BwYWJsZUVsZW1lbnQucmVjdCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICBkcm9wcGFibGVFbGVtZW50LnNjcm9sbENvbnRhaW5lclJlY3QgPSB0aGlzLnNjcm9sbENvbnRhaW5lci5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZHJvcHBhYmxlRWxlbWVudC51cGRhdGVDYWNoZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaXNXaXRoaW5FbGVtZW50ID0gaXNDb29yZGluYXRlV2l0aGluUmVjdGFuZ2xlKFxuICAgICAgICAgICAgICBjbGllbnRYLFxuICAgICAgICAgICAgICBjbGllbnRZLFxuICAgICAgICAgICAgICBkcm9wcGFibGVFbGVtZW50LnJlY3QgYXMgQ2xpZW50UmVjdFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgaXNEcm9wQWxsb3dlZCA9XG4gICAgICAgICAgICAgICF0aGlzLnZhbGlkYXRlRHJvcCB8fFxuICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlRHJvcCh7IGNsaWVudFgsIGNsaWVudFksIHRhcmdldCB9KTtcblxuICAgICAgICAgICAgaWYgKGRyb3BwYWJsZUVsZW1lbnQuc2Nyb2xsQ29udGFpbmVyUmVjdCkge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIGlzV2l0aGluRWxlbWVudCAmJlxuICAgICAgICAgICAgICAgIGlzRHJvcEFsbG93ZWQgJiZcbiAgICAgICAgICAgICAgICBpc0Nvb3JkaW5hdGVXaXRoaW5SZWN0YW5nbGUoXG4gICAgICAgICAgICAgICAgICBjbGllbnRYLFxuICAgICAgICAgICAgICAgICAgY2xpZW50WSxcbiAgICAgICAgICAgICAgICAgIGRyb3BwYWJsZUVsZW1lbnQuc2Nyb2xsQ29udGFpbmVyUmVjdCBhcyBDbGllbnRSZWN0XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGlzV2l0aGluRWxlbWVudCAmJiBpc0Ryb3BBbGxvd2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3Qgb3ZlcmxhcHNDaGFuZ2VkJCA9IG92ZXJsYXBzJC5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuXG4gICAgICAgIGxldCBkcmFnT3ZlckFjdGl2ZTogYm9vbGVhbjsgLy8gVE9ETyAtIHNlZSBpZiB0aGVyZSdzIGEgd2F5IG9mIGRvaW5nIHRoaXMgdmlhIHJ4anNcblxuICAgICAgICBvdmVybGFwc0NoYW5nZWQkXG4gICAgICAgICAgLnBpcGUoZmlsdGVyKChvdmVybGFwc05vdykgPT4gb3ZlcmxhcHNOb3cpKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgZHJhZ092ZXJBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgYWRkQ2xhc3ModGhpcy5yZW5kZXJlciwgdGhpcy5lbGVtZW50LCB0aGlzLmRyYWdPdmVyQ2xhc3MpO1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZHJhZ0VudGVyLm5leHQoe1xuICAgICAgICAgICAgICAgIGRyb3BEYXRhOiBjdXJyZW50RHJhZ0Ryb3BEYXRhLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIG92ZXJsYXBzJC5waXBlKGZpbHRlcigob3ZlcmxhcHNOb3cpID0+IG92ZXJsYXBzTm93KSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZHJhZ092ZXIubmV4dCh7XG4gICAgICAgICAgICAgIGRyb3BEYXRhOiBjdXJyZW50RHJhZ0Ryb3BEYXRhLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG92ZXJsYXBzQ2hhbmdlZCRcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIHBhaXJ3aXNlKCksXG4gICAgICAgICAgICBmaWx0ZXIoKFtkaWRPdmVybGFwLCBvdmVybGFwc05vd10pID0+IGRpZE92ZXJsYXAgJiYgIW92ZXJsYXBzTm93KVxuICAgICAgICAgIClcbiAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGRyYWdPdmVyQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICByZW1vdmVDbGFzcyh0aGlzLnJlbmRlcmVyLCB0aGlzLmVsZW1lbnQsIHRoaXMuZHJhZ092ZXJDbGFzcyk7XG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kcmFnTGVhdmUubmV4dCh7XG4gICAgICAgICAgICAgICAgZHJvcERhdGE6IGN1cnJlbnREcmFnRHJvcERhdGEsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgZHJhZyQuc3Vic2NyaWJlKHtcbiAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgZGVyZWdpc3RlclNjcm9sbExpc3RlbmVyKCk7XG4gICAgICAgICAgICByZW1vdmVDbGFzcyh0aGlzLnJlbmRlcmVyLCB0aGlzLmVsZW1lbnQsIHRoaXMuZHJhZ0FjdGl2ZUNsYXNzKTtcbiAgICAgICAgICAgIGlmIChkcmFnT3ZlckFjdGl2ZSkge1xuICAgICAgICAgICAgICByZW1vdmVDbGFzcyh0aGlzLnJlbmRlcmVyLCB0aGlzLmVsZW1lbnQsIHRoaXMuZHJhZ092ZXJDbGFzcyk7XG4gICAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJvcC5uZXh0KHtcbiAgICAgICAgICAgICAgICAgIGRyb3BEYXRhOiBjdXJyZW50RHJhZ0Ryb3BEYXRhLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudERyYWdTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuY3VycmVudERyYWdTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==