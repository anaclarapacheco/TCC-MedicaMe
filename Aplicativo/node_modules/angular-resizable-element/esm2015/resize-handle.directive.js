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
export class ResizeHandleDirective {
    /**
     * @param {?} renderer
     * @param {?} element
     * @param {?} zone
     * @param {?} resizableDirective
     */
    constructor(renderer, element, zone, resizableDirective) {
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
    ngOnInit() {
        this.zone.runOutsideAngular(() => {
            this.listenOnTheHost('mousedown').subscribe(event => {
                this.onMousedown(event, event.clientX, event.clientY);
            });
            this.listenOnTheHost('mouseup').subscribe(event => {
                this.onMouseup(event.clientX, event.clientY);
            });
            if (IS_TOUCH_DEVICE) {
                this.listenOnTheHost('touchstart').subscribe(event => {
                    this.onMousedown(event, event.touches[0].clientX, event.touches[0].clientY);
                });
                merge(this.listenOnTheHost('touchend'), this.listenOnTheHost('touchcancel')).subscribe(event => {
                    this.onMouseup(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
                });
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.unsubscribeEventListeners();
    }
    /**
     * @hidden
     * @param {?} event
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    onMousedown(event, clientX, clientY) {
        event.preventDefault();
        if (!this.eventListeners.touchmove) {
            this.eventListeners.touchmove = this.renderer.listen(this.element.nativeElement, 'touchmove', (touchMoveEvent) => {
                this.onMousemove(touchMoveEvent, touchMoveEvent.targetTouches[0].clientX, touchMoveEvent.targetTouches[0].clientY);
            });
        }
        if (!this.eventListeners.mousemove) {
            this.eventListeners.mousemove = this.renderer.listen(this.element.nativeElement, 'mousemove', (mouseMoveEvent) => {
                this.onMousemove(mouseMoveEvent, mouseMoveEvent.clientX, mouseMoveEvent.clientY);
            });
        }
        this.resizable.mousedown.next({
            clientX,
            clientY,
            edges: this.resizeEdges
        });
    }
    /**
     * @hidden
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    onMouseup(clientX, clientY) {
        this.unsubscribeEventListeners();
        this.resizable.mouseup.next({
            clientX,
            clientY,
            edges: this.resizeEdges
        });
    }
    // directive might be passed from DI or as an input
    /**
     * @private
     * @return {?}
     */
    get resizable() {
        return this.resizableDirective || this.resizableContainer;
    }
    /**
     * @private
     * @param {?} event
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    onMousemove(event, clientX, clientY) {
        this.resizable.mousemove.next({
            clientX,
            clientY,
            edges: this.resizeEdges,
            event
        });
    }
    /**
     * @private
     * @return {?}
     */
    unsubscribeEventListeners() {
        Object.keys(this.eventListeners).forEach(type => {
            ((/** @type {?} */ (this))).eventListeners[type]();
            delete this.eventListeners[type];
        });
    }
    /**
     * @private
     * @template T
     * @param {?} eventName
     * @return {?}
     */
    listenOnTheHost(eventName) {
        return fromEvent(this.element.nativeElement, eventName).pipe(takeUntil(this.destroy$));
    }
}
ResizeHandleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mwlResizeHandle]'
            },] }
];
/** @nocollapse */
ResizeHandleDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: NgZone },
    { type: ResizableDirective, decorators: [{ type: Optional }] }
];
ResizeHandleDirective.propDecorators = {
    resizeEdges: [{ type: Input }],
    resizableContainer: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLWhhbmRsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXJlc2l6YWJsZS1lbGVtZW50LyIsInNvdXJjZXMiOlsicmVzaXplLWhhbmRsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBR1YsTUFBTSxFQUNOLFFBQVEsRUFDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQnBELE1BQU0sT0FBTyxxQkFBcUI7Ozs7Ozs7SUFrQmhDLFlBQ1UsUUFBbUIsRUFDbkIsT0FBbUIsRUFDbkIsSUFBWSxFQUNBLGtCQUFzQztRQUhsRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNBLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7Ozs7UUFsQm5ELGdCQUFXLEdBQVUsRUFBRSxDQUFDO1FBTXpCLG1CQUFjLEdBSWxCLEVBQUUsQ0FBQztRQUVDLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBT3BDLENBQUM7Ozs7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGVBQWUsQ0FBYSxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzlELElBQUksQ0FB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Qzs7Ozs7SUFJakMsbURBQWdEOzs7OztJQUVoRCwrQ0FJTzs7Ozs7SUFFUCx5Q0FBdUM7Ozs7O0lBR3JDLHlDQUEyQjs7Ozs7SUFDM0Isd0NBQTJCOzs7OztJQUMzQixxQ0FBb0I7Ozs7O0lBQ3BCLG1EQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIE5nWm9uZSxcbiAgT3B0aW9uYWxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBSZXNpemFibGVEaXJlY3RpdmUgfSBmcm9tICcuL3Jlc2l6YWJsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRWRnZXMgfSBmcm9tICcuL2ludGVyZmFjZXMvZWRnZXMuaW50ZXJmYWNlJztcbmltcG9ydCB7IElTX1RPVUNIX0RFVklDRSB9IGZyb20gJy4vaXMtdG91Y2gtZGV2aWNlJztcblxuLyoqXG4gKiBBbiBlbGVtZW50IHBsYWNlZCBpbnNpZGUgYSBgbXdsUmVzaXphYmxlYCBkaXJlY3RpdmUgdG8gYmUgdXNlZCBhcyBhIGRyYWcgYW5kIHJlc2l6ZSBoYW5kbGVcbiAqXG4gKiBGb3IgZXhhbXBsZVxuICpcbiAqIGBgYGh0bWxcbiAqIDxkaXYgbXdsUmVzaXphYmxlPlxuICogICA8ZGl2IG13bFJlc2l6ZUhhbmRsZSBbcmVzaXplRWRnZXNdPVwie2JvdHRvbTogdHJ1ZSwgcmlnaHQ6IHRydWV9XCI+PC9kaXY+XG4gKiA8L2Rpdj5cbiAqIGBgYFxuICogT3IgaW4gY2FzZSB0aGV5IGFyZSBzaWJsaW5nIGVsZW1lbnRzOlxuICogYGBgaHRtbFxuICogPGRpdiBtd2xSZXNpemFibGUgI3Jlc2l6YWJsZUVsZW1lbnQ9XCJtd2xSZXNpemFibGVcIj48L2Rpdj5cbiAqIDxkaXYgbXdsUmVzaXplSGFuZGxlIFtyZXNpemFibGVDb250YWluZXJdPVwicmVzaXphYmxlRWxlbWVudFwiIFtyZXNpemVFZGdlc109XCJ7Ym90dG9tOiB0cnVlLCByaWdodDogdHJ1ZX1cIj48L2Rpdj5cbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbXdsUmVzaXplSGFuZGxlXSdcbn0pXG5leHBvcnQgY2xhc3MgUmVzaXplSGFuZGxlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogVGhlIGBFZGdlc2Agb2JqZWN0IHRoYXQgY29udGFpbnMgdGhlIGVkZ2VzIG9mIHRoZSBwYXJlbnQgZWxlbWVudCB0aGF0IGRyYWdnaW5nIHRoZSBoYW5kbGUgd2lsbCB0cmlnZ2VyIGEgcmVzaXplIG9uXG4gICAqL1xuICBASW5wdXQoKSByZXNpemVFZGdlczogRWRnZXMgPSB7fTtcbiAgLyoqXG4gICAqIFJlZmVyZW5jZSB0byBSZXNpemFibGVEaXJlY3RpdmUgaW4gY2FzZSBpZiBoYW5kbGUgaXMgbm90IGxvY2F0ZWQgaW5zaWRlIG9mIGVsZW1lbnQgd2l0aCBSZXNpemFibGVEaXJlY3RpdmVcbiAgICovXG4gIEBJbnB1dCgpIHJlc2l6YWJsZUNvbnRhaW5lcjogUmVzaXphYmxlRGlyZWN0aXZlO1xuXG4gIHByaXZhdGUgZXZlbnRMaXN0ZW5lcnM6IHtcbiAgICB0b3VjaG1vdmU/OiAoKSA9PiB2b2lkO1xuICAgIG1vdXNlbW92ZT86ICgpID0+IHZvaWQ7XG4gICAgW2tleTogc3RyaW5nXTogKCgpID0+IHZvaWQpIHwgdW5kZWZpbmVkO1xuICB9ID0ge307XG5cbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIHJlc2l6YWJsZURpcmVjdGl2ZTogUmVzaXphYmxlRGlyZWN0aXZlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5saXN0ZW5PblRoZUhvc3Q8TW91c2VFdmVudD4oJ21vdXNlZG93bicpLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICAgIHRoaXMub25Nb3VzZWRvd24oZXZlbnQsIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMubGlzdGVuT25UaGVIb3N0PE1vdXNlRXZlbnQ+KCdtb3VzZXVwJykuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5vbk1vdXNldXAoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKElTX1RPVUNIX0RFVklDRSkge1xuICAgICAgICB0aGlzLmxpc3Rlbk9uVGhlSG9zdDxUb3VjaEV2ZW50PigndG91Y2hzdGFydCcpLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy5vbk1vdXNlZG93bihcbiAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgZXZlbnQudG91Y2hlc1swXS5jbGllbnRYLFxuICAgICAgICAgICAgZXZlbnQudG91Y2hlc1swXS5jbGllbnRZXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWVyZ2UoXG4gICAgICAgICAgdGhpcy5saXN0ZW5PblRoZUhvc3Q8VG91Y2hFdmVudD4oJ3RvdWNoZW5kJyksXG4gICAgICAgICAgdGhpcy5saXN0ZW5PblRoZUhvc3Q8VG91Y2hFdmVudD4oJ3RvdWNoY2FuY2VsJylcbiAgICAgICAgKS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgICAgIHRoaXMub25Nb3VzZXVwKFxuICAgICAgICAgICAgZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCxcbiAgICAgICAgICAgIGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFlcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmVFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIG9uTW91c2Vkb3duKFxuICAgIGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCxcbiAgICBjbGllbnRYOiBudW1iZXIsXG4gICAgY2xpZW50WTogbnVtYmVyXG4gICk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCF0aGlzLmV2ZW50TGlzdGVuZXJzLnRvdWNobW92ZSkge1xuICAgICAgdGhpcy5ldmVudExpc3RlbmVycy50b3VjaG1vdmUgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbihcbiAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICd0b3VjaG1vdmUnLFxuICAgICAgICAodG91Y2hNb3ZlRXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgICB0aGlzLm9uTW91c2Vtb3ZlKFxuICAgICAgICAgICAgdG91Y2hNb3ZlRXZlbnQsXG4gICAgICAgICAgICB0b3VjaE1vdmVFdmVudC50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFgsXG4gICAgICAgICAgICB0b3VjaE1vdmVFdmVudC50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuZXZlbnRMaXN0ZW5lcnMubW91c2Vtb3ZlKSB7XG4gICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLm1vdXNlbW92ZSA9IHRoaXMucmVuZGVyZXIubGlzdGVuKFxuICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgJ21vdXNlbW92ZScsXG4gICAgICAgIChtb3VzZU1vdmVFdmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgIHRoaXMub25Nb3VzZW1vdmUoXG4gICAgICAgICAgICBtb3VzZU1vdmVFdmVudCxcbiAgICAgICAgICAgIG1vdXNlTW92ZUV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgICBtb3VzZU1vdmVFdmVudC5jbGllbnRZXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5yZXNpemFibGUubW91c2Vkb3duLm5leHQoe1xuICAgICAgY2xpZW50WCxcbiAgICAgIGNsaWVudFksXG4gICAgICBlZGdlczogdGhpcy5yZXNpemVFZGdlc1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIG9uTW91c2V1cChjbGllbnRYOiBudW1iZXIsIGNsaWVudFk6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMudW5zdWJzY3JpYmVFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMucmVzaXphYmxlLm1vdXNldXAubmV4dCh7XG4gICAgICBjbGllbnRYLFxuICAgICAgY2xpZW50WSxcbiAgICAgIGVkZ2VzOiB0aGlzLnJlc2l6ZUVkZ2VzXG4gICAgfSk7XG4gIH1cblxuICAvLyBkaXJlY3RpdmUgbWlnaHQgYmUgcGFzc2VkIGZyb20gREkgb3IgYXMgYW4gaW5wdXRcbiAgcHJpdmF0ZSBnZXQgcmVzaXphYmxlKCk6IFJlc2l6YWJsZURpcmVjdGl2ZSB7XG4gICAgcmV0dXJuIHRoaXMucmVzaXphYmxlRGlyZWN0aXZlIHx8IHRoaXMucmVzaXphYmxlQ29udGFpbmVyO1xuICB9XG5cbiAgcHJpdmF0ZSBvbk1vdXNlbW92ZShcbiAgICBldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQsXG4gICAgY2xpZW50WDogbnVtYmVyLFxuICAgIGNsaWVudFk6IG51bWJlclxuICApOiB2b2lkIHtcbiAgICB0aGlzLnJlc2l6YWJsZS5tb3VzZW1vdmUubmV4dCh7XG4gICAgICBjbGllbnRYLFxuICAgICAgY2xpZW50WSxcbiAgICAgIGVkZ2VzOiB0aGlzLnJlc2l6ZUVkZ2VzLFxuICAgICAgZXZlbnRcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdW5zdWJzY3JpYmVFdmVudExpc3RlbmVycygpOiB2b2lkIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmV2ZW50TGlzdGVuZXJzKS5mb3JFYWNoKHR5cGUgPT4ge1xuICAgICAgKHRoaXMgYXMgYW55KS5ldmVudExpc3RlbmVyc1t0eXBlXSgpO1xuICAgICAgZGVsZXRlIHRoaXMuZXZlbnRMaXN0ZW5lcnNbdHlwZV07XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGxpc3Rlbk9uVGhlSG9zdDxUIGV4dGVuZHMgRXZlbnQ+KGV2ZW50TmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGZyb21FdmVudDxUPih0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgZXZlbnROYW1lKS5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgKTtcbiAgfVxufVxuIl19