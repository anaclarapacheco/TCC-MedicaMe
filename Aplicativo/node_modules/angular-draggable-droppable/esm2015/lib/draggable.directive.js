/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2, Output, EventEmitter, Input, NgZone, Inject, TemplateRef, ViewContainerRef, Optional, } from '@angular/core';
import { Subject, Observable, merge, ReplaySubject, combineLatest, fromEvent, } from 'rxjs';
import { map, mergeMap, takeUntil, take, takeLast, pairwise, share, filter, count, startWith, } from 'rxjs/operators';
import { DraggableHelper } from './draggable-helper.provider';
import { DOCUMENT } from '@angular/common';
import autoScroll from '@mattlewis92/dom-autoscroller';
import { DraggableScrollContainerDirective } from './draggable-scroll-container.directive';
import { addClass, removeClass } from './util';
/**
 * @record
 */
export function Coordinates() { }
if (false) {
    /** @type {?} */
    Coordinates.prototype.x;
    /** @type {?} */
    Coordinates.prototype.y;
}
/**
 * @record
 */
export function DragAxis() { }
if (false) {
    /** @type {?} */
    DragAxis.prototype.x;
    /** @type {?} */
    DragAxis.prototype.y;
}
/**
 * @record
 */
export function SnapGrid() { }
if (false) {
    /** @type {?|undefined} */
    SnapGrid.prototype.x;
    /** @type {?|undefined} */
    SnapGrid.prototype.y;
}
/**
 * @record
 */
export function DragPointerDownEvent() { }
/**
 * @record
 */
export function DragStartEvent() { }
if (false) {
    /** @type {?} */
    DragStartEvent.prototype.cancelDrag$;
}
/**
 * @record
 */
export function DragMoveEvent() { }
/**
 * @record
 */
export function DragEndEvent() { }
if (false) {
    /** @type {?} */
    DragEndEvent.prototype.dragCancelled;
}
/**
 * @record
 */
export function ValidateDragParams() { }
if (false) {
    /** @type {?} */
    ValidateDragParams.prototype.transform;
}
/**
 * @record
 */
export function PointerEvent() { }
if (false) {
    /** @type {?} */
    PointerEvent.prototype.clientX;
    /** @type {?} */
    PointerEvent.prototype.clientY;
    /** @type {?} */
    PointerEvent.prototype.event;
}
/**
 * @record
 */
export function TimeLongPress() { }
if (false) {
    /** @type {?} */
    TimeLongPress.prototype.timerBegin;
    /** @type {?} */
    TimeLongPress.prototype.timerEnd;
}
/**
 * @record
 */
export function GhostElementCreatedEvent() { }
if (false) {
    /** @type {?} */
    GhostElementCreatedEvent.prototype.clientX;
    /** @type {?} */
    GhostElementCreatedEvent.prototype.clientY;
    /** @type {?} */
    GhostElementCreatedEvent.prototype.element;
}
export class DraggableDirective {
    /**
     * @hidden
     * @param {?} element
     * @param {?} renderer
     * @param {?} draggableHelper
     * @param {?} zone
     * @param {?} vcr
     * @param {?} scrollContainer
     * @param {?} document
     */
    constructor(element, renderer, draggableHelper, zone, vcr, scrollContainer, document) {
        this.element = element;
        this.renderer = renderer;
        this.draggableHelper = draggableHelper;
        this.zone = zone;
        this.vcr = vcr;
        this.scrollContainer = scrollContainer;
        this.document = document;
        /**
         * The axis along which the element is draggable
         */
        this.dragAxis = { x: true, y: true };
        /**
         * Snap all drags to an x / y grid
         */
        this.dragSnapGrid = {};
        /**
         * Show a ghost element that shows the drag when dragging
         */
        this.ghostDragEnabled = true;
        /**
         * Show the original element when ghostDragEnabled is true
         */
        this.showOriginalElementWhileDragging = false;
        /**
         * The cursor to use when hovering over a draggable element
         */
        this.dragCursor = '';
        /*
           * Options used to control the behaviour of auto scrolling: https://www.npmjs.com/package/dom-autoscroller
           */
        this.autoScroll = {
            margin: 20,
        };
        /**
         * Called when the element can be dragged along one axis and has the mouse or pointer device pressed on it
         */
        this.dragPointerDown = new EventEmitter();
        /**
         * Called when the element has started to be dragged.
         * Only called after at least one mouse or touch move event.
         * If you call $event.cancelDrag$.emit() it will cancel the current drag
         */
        this.dragStart = new EventEmitter();
        /**
         * Called after the ghost element has been created
         */
        this.ghostElementCreated = new EventEmitter();
        /**
         * Called when the element is being dragged
         */
        this.dragging = new EventEmitter();
        /**
         * Called after the element is dragged
         */
        this.dragEnd = new EventEmitter();
        /**
         * @hidden
         */
        this.pointerDown$ = new Subject();
        /**
         * @hidden
         */
        this.pointerMove$ = new Subject();
        /**
         * @hidden
         */
        this.pointerUp$ = new Subject();
        this.eventListenerSubscriptions = {};
        this.destroy$ = new Subject();
        this.timeLongPress = { timerBegin: 0, timerEnd: 0 };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.checkEventListeners();
        /** @type {?} */
        const pointerDragged$ = this.pointerDown$.pipe(filter((/**
         * @return {?}
         */
        () => this.canDrag())), mergeMap((/**
         * @param {?} pointerDownEvent
         * @return {?}
         */
        (pointerDownEvent) => {
            // fix for https://github.com/mattlewis92/angular-draggable-droppable/issues/61
            // stop mouse events propagating up the chain
            if (pointerDownEvent.event.stopPropagation && !this.scrollContainer) {
                pointerDownEvent.event.stopPropagation();
            }
            // hack to prevent text getting selected in safari while dragging
            /** @type {?} */
            const globalDragStyle = this.renderer.createElement('style');
            this.renderer.setAttribute(globalDragStyle, 'type', 'text/css');
            this.renderer.appendChild(globalDragStyle, this.renderer.createText(`
          body * {
           -moz-user-select: none;
           -ms-user-select: none;
           -webkit-user-select: none;
           user-select: none;
          }
        `));
            requestAnimationFrame((/**
             * @return {?}
             */
            () => {
                this.document.head.appendChild(globalDragStyle);
            }));
            /** @type {?} */
            const startScrollPosition = this.getScrollPosition();
            /** @type {?} */
            const scrollContainerScroll$ = new Observable((/**
             * @param {?} observer
             * @return {?}
             */
            (observer) => {
                /** @type {?} */
                const scrollContainer = this.scrollContainer
                    ? this.scrollContainer.elementRef.nativeElement
                    : 'window';
                return this.renderer.listen(scrollContainer, 'scroll', (/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => observer.next(e)));
            })).pipe(startWith(startScrollPosition), map((/**
             * @return {?}
             */
            () => this.getScrollPosition())));
            /** @type {?} */
            const currentDrag$ = new Subject();
            /** @type {?} */
            const cancelDrag$ = new ReplaySubject();
            this.zone.run((/**
             * @return {?}
             */
            () => {
                this.dragPointerDown.next({ x: 0, y: 0 });
            }));
            /** @type {?} */
            const dragComplete$ = merge(this.pointerUp$, this.pointerDown$, cancelDrag$, this.destroy$).pipe(share());
            /** @type {?} */
            const pointerMove = combineLatest([
                this.pointerMove$,
                scrollContainerScroll$,
            ]).pipe(map((/**
             * @param {?} __0
             * @return {?}
             */
            ([pointerMoveEvent, scroll]) => {
                return {
                    currentDrag$,
                    transformX: pointerMoveEvent.clientX - pointerDownEvent.clientX,
                    transformY: pointerMoveEvent.clientY - pointerDownEvent.clientY,
                    clientX: pointerMoveEvent.clientX,
                    clientY: pointerMoveEvent.clientY,
                    scrollLeft: scroll.left,
                    scrollTop: scroll.top,
                    target: pointerMoveEvent.event.target,
                };
            })), map((/**
             * @param {?} moveData
             * @return {?}
             */
            (moveData) => {
                if (this.dragSnapGrid.x) {
                    moveData.transformX =
                        Math.round(moveData.transformX / this.dragSnapGrid.x) *
                            this.dragSnapGrid.x;
                }
                if (this.dragSnapGrid.y) {
                    moveData.transformY =
                        Math.round(moveData.transformY / this.dragSnapGrid.y) *
                            this.dragSnapGrid.y;
                }
                return moveData;
            })), map((/**
             * @param {?} moveData
             * @return {?}
             */
            (moveData) => {
                if (!this.dragAxis.x) {
                    moveData.transformX = 0;
                }
                if (!this.dragAxis.y) {
                    moveData.transformY = 0;
                }
                return moveData;
            })), map((/**
             * @param {?} moveData
             * @return {?}
             */
            (moveData) => {
                /** @type {?} */
                const scrollX = moveData.scrollLeft - startScrollPosition.left;
                /** @type {?} */
                const scrollY = moveData.scrollTop - startScrollPosition.top;
                return Object.assign({}, moveData, { x: moveData.transformX + scrollX, y: moveData.transformY + scrollY });
            })), filter((/**
             * @param {?} __0
             * @return {?}
             */
            ({ x, y, transformX, transformY }) => !this.validateDrag ||
                this.validateDrag({
                    x,
                    y,
                    transform: { x: transformX, y: transformY },
                }))), takeUntil(dragComplete$), share());
            /** @type {?} */
            const dragStarted$ = pointerMove.pipe(take(1), share());
            /** @type {?} */
            const dragEnded$ = pointerMove.pipe(takeLast(1), share());
            dragStarted$.subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            ({ clientX, clientY, x, y }) => {
                this.zone.run((/**
                 * @return {?}
                 */
                () => {
                    this.dragStart.next({ cancelDrag$ });
                }));
                this.scroller = autoScroll([
                    this.scrollContainer
                        ? this.scrollContainer.elementRef.nativeElement
                        : this.document.defaultView,
                ], Object.assign({}, this.autoScroll, { /**
                     * @return {?}
                     */
                    autoScroll() {
                        return true;
                    } }));
                addClass(this.renderer, this.element, this.dragActiveClass);
                if (this.ghostDragEnabled) {
                    /** @type {?} */
                    const rect = this.element.nativeElement.getBoundingClientRect();
                    /** @type {?} */
                    const clone = (/** @type {?} */ (this.element.nativeElement.cloneNode(true)));
                    if (!this.showOriginalElementWhileDragging) {
                        this.renderer.setStyle(this.element.nativeElement, 'visibility', 'hidden');
                    }
                    if (this.ghostElementAppendTo) {
                        this.ghostElementAppendTo.appendChild(clone);
                    }
                    else {
                        (/** @type {?} */ (this.element.nativeElement.parentNode)).insertBefore(clone, this.element.nativeElement.nextSibling);
                    }
                    this.ghostElement = clone;
                    this.document.body.style.cursor = this.dragCursor;
                    this.setElementStyles(clone, {
                        position: 'fixed',
                        top: `${rect.top}px`,
                        left: `${rect.left}px`,
                        width: `${rect.width}px`,
                        height: `${rect.height}px`,
                        cursor: this.dragCursor,
                        margin: '0',
                        willChange: 'transform',
                        pointerEvents: 'none',
                    });
                    if (this.ghostElementTemplate) {
                        /** @type {?} */
                        const viewRef = this.vcr.createEmbeddedView(this.ghostElementTemplate);
                        clone.innerHTML = '';
                        viewRef.rootNodes
                            .filter((/**
                         * @param {?} node
                         * @return {?}
                         */
                        (node) => node instanceof Node))
                            .forEach((/**
                         * @param {?} node
                         * @return {?}
                         */
                        (node) => {
                            clone.appendChild(node);
                        }));
                        dragEnded$.subscribe((/**
                         * @return {?}
                         */
                        () => {
                            this.vcr.remove(this.vcr.indexOf(viewRef));
                        }));
                    }
                    this.zone.run((/**
                     * @return {?}
                     */
                    () => {
                        this.ghostElementCreated.emit({
                            clientX: clientX - x,
                            clientY: clientY - y,
                            element: clone,
                        });
                    }));
                    dragEnded$.subscribe((/**
                     * @return {?}
                     */
                    () => {
                        (/** @type {?} */ (clone.parentElement)).removeChild(clone);
                        this.ghostElement = null;
                        this.renderer.setStyle(this.element.nativeElement, 'visibility', '');
                    }));
                }
                this.draggableHelper.currentDrag.next(currentDrag$);
            }));
            dragEnded$
                .pipe(mergeMap((/**
             * @param {?} dragEndData
             * @return {?}
             */
            (dragEndData) => {
                /** @type {?} */
                const dragEndData$ = cancelDrag$.pipe(count(), take(1), map((/**
                 * @param {?} calledCount
                 * @return {?}
                 */
                (calledCount) => (Object.assign({}, dragEndData, { dragCancelled: calledCount > 0 })))));
                cancelDrag$.complete();
                return dragEndData$;
            })))
                .subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            ({ x, y, dragCancelled }) => {
                this.scroller.destroy();
                this.zone.run((/**
                 * @return {?}
                 */
                () => {
                    this.dragEnd.next({ x, y, dragCancelled });
                }));
                removeClass(this.renderer, this.element, this.dragActiveClass);
                currentDrag$.complete();
            }));
            merge(dragComplete$, dragEnded$)
                .pipe(take(1))
                .subscribe((/**
             * @return {?}
             */
            () => {
                requestAnimationFrame((/**
                 * @return {?}
                 */
                () => {
                    this.document.head.removeChild(globalDragStyle);
                }));
            }));
            return pointerMove;
        })), share());
        merge(pointerDragged$.pipe(take(1), map((/**
         * @param {?} value
         * @return {?}
         */
        (value) => [, value]))), pointerDragged$.pipe(pairwise()))
            .pipe(filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([previous, next]) => {
            if (!previous) {
                return true;
            }
            return previous.x !== next.x || previous.y !== next.y;
        })), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([previous, next]) => next)))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ x, y, currentDrag$, clientX, clientY, transformX, transformY, target, }) => {
            this.zone.run((/**
             * @return {?}
             */
            () => {
                this.dragging.next({ x, y });
            }));
            requestAnimationFrame((/**
             * @return {?}
             */
            () => {
                if (this.ghostElement) {
                    /** @type {?} */
                    const transform = `translate3d(${transformX}px, ${transformY}px, 0px)`;
                    this.setElementStyles(this.ghostElement, {
                        transform,
                        '-webkit-transform': transform,
                        '-ms-transform': transform,
                        '-moz-transform': transform,
                        '-o-transform': transform,
                    });
                }
            }));
            currentDrag$.next({
                clientX,
                clientY,
                dropData: this.dropData,
                target,
            });
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.dragAxis) {
            this.checkEventListeners();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribeEventListeners();
        this.pointerDown$.complete();
        this.pointerMove$.complete();
        this.pointerUp$.complete();
        this.destroy$.next();
    }
    /**
     * @private
     * @return {?}
     */
    checkEventListeners() {
        /** @type {?} */
        const canDrag = this.canDrag();
        /** @type {?} */
        const hasEventListeners = Object.keys(this.eventListenerSubscriptions).length > 0;
        if (canDrag && !hasEventListeners) {
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this.eventListenerSubscriptions.mousedown = this.renderer.listen(this.element.nativeElement, 'mousedown', (/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    this.onMouseDown(event);
                }));
                this.eventListenerSubscriptions.mouseup = this.renderer.listen('document', 'mouseup', (/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    this.onMouseUp(event);
                }));
                this.eventListenerSubscriptions.touchstart = this.renderer.listen(this.element.nativeElement, 'touchstart', (/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    this.onTouchStart(event);
                }));
                this.eventListenerSubscriptions.touchend = this.renderer.listen('document', 'touchend', (/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    this.onTouchEnd(event);
                }));
                this.eventListenerSubscriptions.touchcancel = this.renderer.listen('document', 'touchcancel', (/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    this.onTouchEnd(event);
                }));
                this.eventListenerSubscriptions.mouseenter = this.renderer.listen(this.element.nativeElement, 'mouseenter', (/**
                 * @return {?}
                 */
                () => {
                    this.onMouseEnter();
                }));
                this.eventListenerSubscriptions.mouseleave = this.renderer.listen(this.element.nativeElement, 'mouseleave', (/**
                 * @return {?}
                 */
                () => {
                    this.onMouseLeave();
                }));
            }));
        }
        else if (!canDrag && hasEventListeners) {
            this.unsubscribeEventListeners();
        }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    onMouseDown(event) {
        if (event.button === 0) {
            if (!this.eventListenerSubscriptions.mousemove) {
                this.eventListenerSubscriptions.mousemove = this.renderer.listen('document', 'mousemove', (/**
                 * @param {?} mouseMoveEvent
                 * @return {?}
                 */
                (mouseMoveEvent) => {
                    this.pointerMove$.next({
                        event: mouseMoveEvent,
                        clientX: mouseMoveEvent.clientX,
                        clientY: mouseMoveEvent.clientY,
                    });
                }));
            }
            this.pointerDown$.next({
                event,
                clientX: event.clientX,
                clientY: event.clientY,
            });
        }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    onMouseUp(event) {
        if (event.button === 0) {
            if (this.eventListenerSubscriptions.mousemove) {
                this.eventListenerSubscriptions.mousemove();
                delete this.eventListenerSubscriptions.mousemove;
            }
            this.pointerUp$.next({
                event,
                clientX: event.clientX,
                clientY: event.clientY,
            });
        }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    onTouchStart(event) {
        /** @type {?} */
        let startScrollPosition;
        /** @type {?} */
        let isDragActivated;
        /** @type {?} */
        let hasContainerScrollbar;
        if ((this.scrollContainer && this.scrollContainer.activeLongPressDrag) ||
            this.touchStartLongPress) {
            this.timeLongPress.timerBegin = Date.now();
            isDragActivated = false;
            hasContainerScrollbar = this.hasScrollbar();
            startScrollPosition = this.getScrollPosition();
        }
        if (!this.eventListenerSubscriptions.touchmove) {
            /** @type {?} */
            const contextMenuListener = fromEvent(this.document, 'contextmenu').subscribe((/**
             * @param {?} e
             * @return {?}
             */
            (e) => {
                e.preventDefault();
            }));
            /** @type {?} */
            const touchMoveListener = fromEvent(this.document, 'touchmove', {
                passive: false,
            }).subscribe((/**
             * @param {?} touchMoveEvent
             * @return {?}
             */
            (touchMoveEvent) => {
                if (((this.scrollContainer && this.scrollContainer.activeLongPressDrag) ||
                    this.touchStartLongPress) &&
                    !isDragActivated &&
                    hasContainerScrollbar) {
                    isDragActivated = this.shouldBeginDrag(event, touchMoveEvent, startScrollPosition);
                }
                if (((!this.scrollContainer ||
                    !this.scrollContainer.activeLongPressDrag) &&
                    !this.touchStartLongPress) ||
                    !hasContainerScrollbar ||
                    isDragActivated) {
                    touchMoveEvent.preventDefault();
                    this.pointerMove$.next({
                        event: touchMoveEvent,
                        clientX: touchMoveEvent.targetTouches[0].clientX,
                        clientY: touchMoveEvent.targetTouches[0].clientY,
                    });
                }
            }));
            this.eventListenerSubscriptions.touchmove = (/**
             * @return {?}
             */
            () => {
                contextMenuListener.unsubscribe();
                touchMoveListener.unsubscribe();
            });
        }
        this.pointerDown$.next({
            event,
            clientX: event.touches[0].clientX,
            clientY: event.touches[0].clientY,
        });
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    onTouchEnd(event) {
        if (this.eventListenerSubscriptions.touchmove) {
            this.eventListenerSubscriptions.touchmove();
            delete this.eventListenerSubscriptions.touchmove;
            if ((this.scrollContainer && this.scrollContainer.activeLongPressDrag) ||
                this.touchStartLongPress) {
                this.enableScroll();
            }
        }
        this.pointerUp$.next({
            event,
            clientX: event.changedTouches[0].clientX,
            clientY: event.changedTouches[0].clientY,
        });
    }
    /**
     * @private
     * @return {?}
     */
    onMouseEnter() {
        this.setCursor(this.dragCursor);
    }
    /**
     * @private
     * @return {?}
     */
    onMouseLeave() {
        this.setCursor('');
    }
    /**
     * @private
     * @return {?}
     */
    canDrag() {
        return this.dragAxis.x || this.dragAxis.y;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    setCursor(value) {
        if (!this.eventListenerSubscriptions.mousemove) {
            this.renderer.setStyle(this.element.nativeElement, 'cursor', value);
        }
    }
    /**
     * @private
     * @return {?}
     */
    unsubscribeEventListeners() {
        Object.keys(this.eventListenerSubscriptions).forEach((/**
         * @param {?} type
         * @return {?}
         */
        (type) => {
            ((/** @type {?} */ (this))).eventListenerSubscriptions[type]();
            delete ((/** @type {?} */ (this))).eventListenerSubscriptions[type];
        }));
    }
    /**
     * @private
     * @param {?} element
     * @param {?} styles
     * @return {?}
     */
    setElementStyles(element, styles) {
        Object.keys(styles).forEach((/**
         * @param {?} key
         * @return {?}
         */
        (key) => {
            this.renderer.setStyle(element, key, styles[key]);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    getScrollElement() {
        if (this.scrollContainer) {
            return this.scrollContainer.elementRef.nativeElement;
        }
        else {
            return this.document.body;
        }
    }
    /**
     * @private
     * @return {?}
     */
    getScrollPosition() {
        if (this.scrollContainer) {
            return {
                top: this.scrollContainer.elementRef.nativeElement.scrollTop,
                left: this.scrollContainer.elementRef.nativeElement.scrollLeft,
            };
        }
        else {
            return {
                top: window.pageYOffset || this.document.documentElement.scrollTop,
                left: window.pageXOffset || this.document.documentElement.scrollLeft,
            };
        }
    }
    /**
     * @private
     * @param {?} event
     * @param {?} touchMoveEvent
     * @param {?} startScrollPosition
     * @return {?}
     */
    shouldBeginDrag(event, touchMoveEvent, startScrollPosition) {
        /** @type {?} */
        const moveScrollPosition = this.getScrollPosition();
        /** @type {?} */
        const deltaScroll = {
            top: Math.abs(moveScrollPosition.top - startScrollPosition.top),
            left: Math.abs(moveScrollPosition.left - startScrollPosition.left),
        };
        /** @type {?} */
        const deltaX = Math.abs(touchMoveEvent.targetTouches[0].clientX - event.touches[0].clientX) - deltaScroll.left;
        /** @type {?} */
        const deltaY = Math.abs(touchMoveEvent.targetTouches[0].clientY - event.touches[0].clientY) - deltaScroll.top;
        /** @type {?} */
        const deltaTotal = deltaX + deltaY;
        /** @type {?} */
        const longPressConfig = this.touchStartLongPress
            ? this.touchStartLongPress
            : /* istanbul ignore next */
                {
                    delta: this.scrollContainer.longPressConfig.delta,
                    delay: this.scrollContainer.longPressConfig.duration,
                };
        if (deltaTotal > longPressConfig.delta ||
            deltaScroll.top > 0 ||
            deltaScroll.left > 0) {
            this.timeLongPress.timerBegin = Date.now();
        }
        this.timeLongPress.timerEnd = Date.now();
        /** @type {?} */
        const duration = this.timeLongPress.timerEnd - this.timeLongPress.timerBegin;
        if (duration >= longPressConfig.delay) {
            this.disableScroll();
            return true;
        }
        return false;
    }
    /**
     * @private
     * @return {?}
     */
    enableScroll() {
        if (this.scrollContainer) {
            this.renderer.setStyle(this.scrollContainer.elementRef.nativeElement, 'overflow', '');
        }
        this.renderer.setStyle(this.document.body, 'overflow', '');
    }
    /**
     * @private
     * @return {?}
     */
    disableScroll() {
        /* istanbul ignore next */
        if (this.scrollContainer) {
            this.renderer.setStyle(this.scrollContainer.elementRef.nativeElement, 'overflow', 'hidden');
        }
        this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
    }
    /**
     * @private
     * @return {?}
     */
    hasScrollbar() {
        /** @type {?} */
        const scrollContainer = this.getScrollElement();
        /** @type {?} */
        const containerHasHorizontalScroll = scrollContainer.scrollWidth > scrollContainer.clientWidth;
        /** @type {?} */
        const containerHasVerticalScroll = scrollContainer.scrollHeight > scrollContainer.clientHeight;
        return containerHasHorizontalScroll || containerHasVerticalScroll;
    }
}
DraggableDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mwlDraggable]',
            },] }
];
/** @nocollapse */
DraggableDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: DraggableHelper },
    { type: NgZone },
    { type: ViewContainerRef },
    { type: DraggableScrollContainerDirective, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
DraggableDirective.propDecorators = {
    dropData: [{ type: Input }],
    dragAxis: [{ type: Input }],
    dragSnapGrid: [{ type: Input }],
    ghostDragEnabled: [{ type: Input }],
    showOriginalElementWhileDragging: [{ type: Input }],
    validateDrag: [{ type: Input }],
    dragCursor: [{ type: Input }],
    dragActiveClass: [{ type: Input }],
    ghostElementAppendTo: [{ type: Input }],
    ghostElementTemplate: [{ type: Input }],
    touchStartLongPress: [{ type: Input }],
    autoScroll: [{ type: Input }],
    dragPointerDown: [{ type: Output }],
    dragStart: [{ type: Output }],
    ghostElementCreated: [{ type: Output }],
    dragging: [{ type: Output }],
    dragEnd: [{ type: Output }]
};
if (false) {
    /**
     * an object of data you can pass to the drop event
     * @type {?}
     */
    DraggableDirective.prototype.dropData;
    /**
     * The axis along which the element is draggable
     * @type {?}
     */
    DraggableDirective.prototype.dragAxis;
    /**
     * Snap all drags to an x / y grid
     * @type {?}
     */
    DraggableDirective.prototype.dragSnapGrid;
    /**
     * Show a ghost element that shows the drag when dragging
     * @type {?}
     */
    DraggableDirective.prototype.ghostDragEnabled;
    /**
     * Show the original element when ghostDragEnabled is true
     * @type {?}
     */
    DraggableDirective.prototype.showOriginalElementWhileDragging;
    /**
     * Allow custom behaviour to control when the element is dragged
     * @type {?}
     */
    DraggableDirective.prototype.validateDrag;
    /**
     * The cursor to use when hovering over a draggable element
     * @type {?}
     */
    DraggableDirective.prototype.dragCursor;
    /**
     * The css class to apply when the element is being dragged
     * @type {?}
     */
    DraggableDirective.prototype.dragActiveClass;
    /**
     * The element the ghost element will be appended to. Default is next to the dragged element
     * @type {?}
     */
    DraggableDirective.prototype.ghostElementAppendTo;
    /**
     * An ng-template to be inserted into the parent element of the ghost element. It will overwrite any child nodes.
     * @type {?}
     */
    DraggableDirective.prototype.ghostElementTemplate;
    /**
     * Amount of milliseconds to wait on touch devices before starting to drag the element (so that you can scroll the page by touching a draggable element)
     * @type {?}
     */
    DraggableDirective.prototype.touchStartLongPress;
    /** @type {?} */
    DraggableDirective.prototype.autoScroll;
    /**
     * Called when the element can be dragged along one axis and has the mouse or pointer device pressed on it
     * @type {?}
     */
    DraggableDirective.prototype.dragPointerDown;
    /**
     * Called when the element has started to be dragged.
     * Only called after at least one mouse or touch move event.
     * If you call $event.cancelDrag$.emit() it will cancel the current drag
     * @type {?}
     */
    DraggableDirective.prototype.dragStart;
    /**
     * Called after the ghost element has been created
     * @type {?}
     */
    DraggableDirective.prototype.ghostElementCreated;
    /**
     * Called when the element is being dragged
     * @type {?}
     */
    DraggableDirective.prototype.dragging;
    /**
     * Called after the element is dragged
     * @type {?}
     */
    DraggableDirective.prototype.dragEnd;
    /**
     * @hidden
     * @type {?}
     */
    DraggableDirective.prototype.pointerDown$;
    /**
     * @hidden
     * @type {?}
     */
    DraggableDirective.prototype.pointerMove$;
    /**
     * @hidden
     * @type {?}
     */
    DraggableDirective.prototype.pointerUp$;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.eventListenerSubscriptions;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.ghostElement;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.timeLongPress;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.scroller;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.draggableHelper;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.vcr;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.scrollContainer;
    /**
     * @type {?}
     * @private
     */
    DraggableDirective.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItZHJhZ2dhYmxlLWRyb3BwYWJsZS8iLCJzb3VyY2VzIjpbImxpYi9kcmFnZ2FibGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULFVBQVUsRUFDVixTQUFTLEVBQ1QsTUFBTSxFQUNOLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUVOLE1BQU0sRUFDTixXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsT0FBTyxFQUNQLFVBQVUsRUFDVixLQUFLLEVBQ0wsYUFBYSxFQUNiLGFBQWEsRUFDYixTQUFTLEdBQ1YsTUFBTSxNQUFNLENBQUM7QUFDZCxPQUFPLEVBQ0wsR0FBRyxFQUNILFFBQVEsRUFDUixTQUFTLEVBQ1QsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBQ1IsS0FBSyxFQUNMLE1BQU0sRUFDTixLQUFLLEVBQ0wsU0FBUyxHQUNWLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFtQixlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxVQUFVLE1BQU0sK0JBQStCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDM0YsT0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxRQUFRLENBQUM7Ozs7QUFFL0MsaUNBR0M7OztJQUZDLHdCQUFVOztJQUNWLHdCQUFVOzs7OztBQUdaLDhCQUdDOzs7SUFGQyxxQkFBVzs7SUFDWCxxQkFBVzs7Ozs7QUFHYiw4QkFHQzs7O0lBRkMscUJBQVc7O0lBQ1gscUJBQVc7Ozs7O0FBR2IsMENBQTREOzs7O0FBRTVELG9DQUVDOzs7SUFE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QUFLO2tDQUtMLEtBQUs7eUJBS0wsS0FBSzs4QkFlTCxNQUFNO3dCQU9OLE1BQU07a0NBS04sTUFBTTt1QkFLTixNQUFNO3NCQUtOLE1BQU07Ozs7Ozs7SUE1RlAsc0NBQXVCOzs7OztJQUt2QixzQ0FBbUQ7Ozs7O0lBS25ELDBDQUFxQzs7Ozs7SUFLckMsOENBQTBDOzs7OztJQUsxQyw4REFBMkQ7Ozs7O0lBSzNELDBDQUFvQzs7Ozs7SUFLcEMsd0NBQWlDOzs7OztJQUtqQyw2Q0FBaUM7Ozs7O0lBS2pDLGtEQUEyQzs7Ozs7SUFLM0Msa0RBQWdEOzs7OztJQUtoRCxpREFBK0Q7O0lBSy9ELHdDQVVFOzs7OztJQUtGLDZDQUFxRTs7Ozs7OztJQU9yRSx1Q0FBeUQ7Ozs7O0lBS3pELGlEQUE2RTs7Ozs7SUFLN0Usc0NBQXVEOzs7OztJQUt2RCxxQ0FBcUQ7Ozs7O0lBS3JELDBDQUEyQzs7Ozs7SUFLM0MsMENBQTJDOzs7OztJQUszQyx3Q0FBeUM7Ozs7O0lBRXpDLHdEQVVPOzs7OztJQUVQLDBDQUF5Qzs7Ozs7SUFFekMsc0NBQWlDOzs7OztJQUVqQywyQ0FBc0U7Ozs7O0lBRXRFLHNDQUEwQzs7Ozs7SUFNeEMscUNBQXdDOzs7OztJQUN4QyxzQ0FBMkI7Ozs7O0lBQzNCLDZDQUF3Qzs7Ozs7SUFDeEMsa0NBQW9COzs7OztJQUNwQixpQ0FBNkI7Ozs7O0lBQzdCLDZDQUFzRTs7Ozs7SUFDdEUsc0NBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBPbkluaXQsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uQ2hhbmdlcyxcbiAgTmdab25lLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBJbmplY3QsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBPcHRpb25hbCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBTdWJqZWN0LFxuICBPYnNlcnZhYmxlLFxuICBtZXJnZSxcbiAgUmVwbGF5U3ViamVjdCxcbiAgY29tYmluZUxhdGVzdCxcbiAgZnJvbUV2ZW50LFxufSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIG1hcCxcbiAgbWVyZ2VNYXAsXG4gIHRha2VVbnRpbCxcbiAgdGFrZSxcbiAgdGFrZUxhc3QsXG4gIHBhaXJ3aXNlLFxuICBzaGFyZSxcbiAgZmlsdGVyLFxuICBjb3VudCxcbiAgc3RhcnRXaXRoLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDdXJyZW50RHJhZ0RhdGEsIERyYWdnYWJsZUhlbHBlciB9IGZyb20gJy4vZHJhZ2dhYmxlLWhlbHBlci5wcm92aWRlcic7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgYXV0b1Njcm9sbCBmcm9tICdAbWF0dGxld2lzOTIvZG9tLWF1dG9zY3JvbGxlcic7XG5pbXBvcnQgeyBEcmFnZ2FibGVTY3JvbGxDb250YWluZXJEaXJlY3RpdmUgfSBmcm9tICcuL2RyYWdnYWJsZS1zY3JvbGwtY29udGFpbmVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBhZGRDbGFzcywgcmVtb3ZlQ2xhc3MgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvb3JkaW5hdGVzIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhZ0F4aXMge1xuICB4OiBib29sZWFuO1xuICB5OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNuYXBHcmlkIHtcbiAgeD86IG51bWJlcjtcbiAgeT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEcmFnUG9pbnRlckRvd25FdmVudCBleHRlbmRzIENvb3JkaW5hdGVzIHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhZ1N0YXJ0RXZlbnQge1xuICBjYW5jZWxEcmFnJDogUmVwbGF5U3ViamVjdDx2b2lkPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEcmFnTW92ZUV2ZW50IGV4dGVuZHMgQ29vcmRpbmF0ZXMge31cblxuZXhwb3J0IGludGVyZmFjZSBEcmFnRW5kRXZlbnQgZXh0ZW5kcyBDb29yZGluYXRlcyB7XG4gIGRyYWdDYW5jZWxsZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmFsaWRhdGVEcmFnUGFyYW1zIGV4dGVuZHMgQ29vcmRpbmF0ZXMge1xuICB0cmFuc2Zvcm06IHtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICB9O1xufVxuXG5leHBvcnQgdHlwZSBWYWxpZGF0ZURyYWcgPSAocGFyYW1zOiBWYWxpZGF0ZURyYWdQYXJhbXMpID0+IGJvb2xlYW47XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9pbnRlckV2ZW50IHtcbiAgY2xpZW50WDogbnVtYmVyO1xuICBjbGllbnRZOiBudW1iZXI7XG4gIGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaW1lTG9uZ1ByZXNzIHtcbiAgdGltZXJCZWdpbjogbnVtYmVyO1xuICB0aW1lckVuZDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdob3N0RWxlbWVudENyZWF0ZWRFdmVudCB7XG4gIGNsaWVudFg6IG51bWJlcjtcbiAgY2xpZW50WTogbnVtYmVyO1xuICBlbGVtZW50OiBIVE1MRWxlbWVudDtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW213bERyYWdnYWJsZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIGFuIG9iamVjdCBvZiBkYXRhIHlvdSBjYW4gcGFzcyB0byB0aGUgZHJvcCBldmVudFxuICAgKi9cbiAgQElucHV0KCkgZHJvcERhdGE6IGFueTtcblxuICAvKipcbiAgICogVGhlIGF4aXMgYWxvbmcgd2hpY2ggdGhlIGVsZW1lbnQgaXMgZHJhZ2dhYmxlXG4gICAqL1xuICBASW5wdXQoKSBkcmFnQXhpczogRHJhZ0F4aXMgPSB7IHg6IHRydWUsIHk6IHRydWUgfTtcblxuICAvKipcbiAgICogU25hcCBhbGwgZHJhZ3MgdG8gYW4geCAvIHkgZ3JpZFxuICAgKi9cbiAgQElucHV0KCkgZHJhZ1NuYXBHcmlkOiBTbmFwR3JpZCA9IHt9O1xuXG4gIC8qKlxuICAgKiBTaG93IGEgZ2hvc3QgZWxlbWVudCB0aGF0IHNob3dzIHRoZSBkcmFnIHdoZW4gZHJhZ2dpbmdcbiAgICovXG4gIEBJbnB1dCgpIGdob3N0RHJhZ0VuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBTaG93IHRoZSBvcmlnaW5hbCBlbGVtZW50IHdoZW4gZ2hvc3REcmFnRW5hYmxlZCBpcyB0cnVlXG4gICAqL1xuICBASW5wdXQoKSBzaG93T3JpZ2luYWxFbGVtZW50V2hpbGVEcmFnZ2luZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBbGxvdyBjdXN0b20gYmVoYXZpb3VyIHRvIGNvbnRyb2wgd2hlbiB0aGUgZWxlbWVudCBpcyBkcmFnZ2VkXG4gICAqL1xuICBASW5wdXQoKSB2YWxpZGF0ZURyYWc6IFZhbGlkYXRlRHJhZztcblxuICAvKipcbiAgICogVGhlIGN1cnNvciB0byB1c2Ugd2hlbiBob3ZlcmluZyBvdmVyIGEgZHJhZ2dhYmxlIGVsZW1lbnRcbiAgICovXG4gIEBJbnB1dCgpIGRyYWdDdXJzb3I6IHN0cmluZyA9ICcnO1xuXG4gIC8qKlxuICAgKiBUaGUgY3NzIGNsYXNzIHRvIGFwcGx5IHdoZW4gdGhlIGVsZW1lbnQgaXMgYmVpbmcgZHJhZ2dlZFxuICAgKi9cbiAgQElucHV0KCkgZHJhZ0FjdGl2ZUNsYXNzOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBlbGVtZW50IHRoZSBnaG9zdCBlbGVtZW50IHdpbGwgYmUgYXBwZW5kZWQgdG8uIERlZmF1bHQgaXMgbmV4dCB0byB0aGUgZHJhZ2dlZCBlbGVtZW50XG4gICAqL1xuICBASW5wdXQoKSBnaG9zdEVsZW1lbnRBcHBlbmRUbzogSFRNTEVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqIEFuIG5nLXRlbXBsYXRlIHRvIGJlIGluc2VydGVkIGludG8gdGhlIHBhcmVudCBlbGVtZW50IG9mIHRoZSBnaG9zdCBlbGVtZW50LiBJdCB3aWxsIG92ZXJ3cml0ZSBhbnkgY2hpbGQgbm9kZXMuXG4gICAqL1xuICBASW5wdXQoKSBnaG9zdEVsZW1lbnRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogQW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byB3YWl0IG9uIHRvdWNoIGRldmljZXMgYmVmb3JlIHN0YXJ0aW5nIHRvIGRyYWcgdGhlIGVsZW1lbnQgKHNvIHRoYXQgeW91IGNhbiBzY3JvbGwgdGhlIHBhZ2UgYnkgdG91Y2hpbmcgYSBkcmFnZ2FibGUgZWxlbWVudClcbiAgICovXG4gIEBJbnB1dCgpIHRvdWNoU3RhcnRMb25nUHJlc3M6IHsgZGVsYXk6IG51bWJlcjsgZGVsdGE6IG51bWJlciB9O1xuXG4gIC8qXG4gICAqIE9wdGlvbnMgdXNlZCB0byBjb250cm9sIHRoZSBiZWhhdmlvdXIgb2YgYXV0byBzY3JvbGxpbmc6IGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL2RvbS1hdXRvc2Nyb2xsZXJcbiAgICovXG4gIEBJbnB1dCgpIGF1dG9TY3JvbGw6IHtcbiAgICBtYXJnaW46XG4gICAgICB8IG51bWJlclxuICAgICAgfCB7IHRvcD86IG51bWJlcjsgbGVmdD86IG51bWJlcjsgcmlnaHQ/OiBudW1iZXI7IGJvdHRvbT86IG51bWJlciB9O1xuICAgIG1heFNwZWVkPzpcbiAgICAgIHwgbnVtYmVyXG4gICAgICB8IHsgdG9wPzogbnVtYmVyOyBsZWZ0PzogbnVtYmVyOyByaWdodD86IG51bWJlcjsgYm90dG9tPzogbnVtYmVyIH07XG4gICAgc2Nyb2xsV2hlbk91dHNpZGU/OiBib29sZWFuO1xuICB9ID0ge1xuICAgIG1hcmdpbjogMjAsXG4gIH07XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSBlbGVtZW50IGNhbiBiZSBkcmFnZ2VkIGFsb25nIG9uZSBheGlzIGFuZCBoYXMgdGhlIG1vdXNlIG9yIHBvaW50ZXIgZGV2aWNlIHByZXNzZWQgb24gaXRcbiAgICovXG4gIEBPdXRwdXQoKSBkcmFnUG9pbnRlckRvd24gPSBuZXcgRXZlbnRFbWl0dGVyPERyYWdQb2ludGVyRG93bkV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgZWxlbWVudCBoYXMgc3RhcnRlZCB0byBiZSBkcmFnZ2VkLlxuICAgKiBPbmx5IGNhbGxlZCBhZnRlciBhdCBsZWFzdCBvbmUgbW91c2Ugb3IgdG91Y2ggbW92ZSBldmVudC5cbiAgICogSWYgeW91IGNhbGwgJGV2ZW50LmNhbmNlbERyYWckLmVtaXQoKSBpdCB3aWxsIGNhbmNlbCB0aGUgY3VycmVudCBkcmFnXG4gICAqL1xuICBAT3V0cHV0KCkgZHJhZ1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnU3RhcnRFdmVudD4oKTtcblxuICAvKipcbiAgICogQ2FsbGVkIGFmdGVyIHRoZSBnaG9zdCBlbGVtZW50IGhhcyBiZWVuIGNyZWF0ZWRcbiAgICovXG4gIEBPdXRwdXQoKSBnaG9zdEVsZW1lbnRDcmVhdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxHaG9zdEVsZW1lbnRDcmVhdGVkRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSBlbGVtZW50IGlzIGJlaW5nIGRyYWdnZWRcbiAgICovXG4gIEBPdXRwdXQoKSBkcmFnZ2luZyA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ01vdmVFdmVudD4oKTtcblxuICAvKipcbiAgICogQ2FsbGVkIGFmdGVyIHRoZSBlbGVtZW50IGlzIGRyYWdnZWRcbiAgICovXG4gIEBPdXRwdXQoKSBkcmFnRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnRW5kRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHBvaW50ZXJEb3duJCA9IG5ldyBTdWJqZWN0PFBvaW50ZXJFdmVudD4oKTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcG9pbnRlck1vdmUkID0gbmV3IFN1YmplY3Q8UG9pbnRlckV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwb2ludGVyVXAkID0gbmV3IFN1YmplY3Q8UG9pbnRlckV2ZW50PigpO1xuXG4gIHByaXZhdGUgZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnM6IHtcbiAgICBtb3VzZW1vdmU/OiAoKSA9PiB2b2lkO1xuICAgIG1vdXNlZG93bj86ICgpID0+IHZvaWQ7XG4gICAgbW91c2V1cD86ICgpID0+IHZvaWQ7XG4gICAgbW91c2VlbnRlcj86ICgpID0+IHZvaWQ7XG4gICAgbW91c2VsZWF2ZT86ICgpID0+IHZvaWQ7XG4gICAgdG91Y2hzdGFydD86ICgpID0+IHZvaWQ7XG4gICAgdG91Y2htb3ZlPzogKCkgPT4gdm9pZDtcbiAgICB0b3VjaGVuZD86ICgpID0+IHZvaWQ7XG4gICAgdG91Y2hjYW5jZWw/OiAoKSA9PiB2b2lkO1xuICB9ID0ge307XG5cbiAgcHJpdmF0ZSBnaG9zdEVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbDtcblxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcblxuICBwcml2YXRlIHRpbWVMb25nUHJlc3M6IFRpbWVMb25nUHJlc3MgPSB7IHRpbWVyQmVnaW46IDAsIHRpbWVyRW5kOiAwIH07XG5cbiAgcHJpdmF0ZSBzY3JvbGxlcjogeyBkZXN0cm95OiAoKSA9PiB2b2lkIH07XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZHJhZ2dhYmxlSGVscGVyOiBEcmFnZ2FibGVIZWxwZXIsXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSB2Y3I6IFZpZXdDb250YWluZXJSZWYsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBzY3JvbGxDb250YWluZXI6IERyYWdnYWJsZVNjcm9sbENvbnRhaW5lckRpcmVjdGl2ZSxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnlcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tFdmVudExpc3RlbmVycygpO1xuXG4gICAgY29uc3QgcG9pbnRlckRyYWdnZWQkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLnBvaW50ZXJEb3duJC5waXBlKFxuICAgICAgZmlsdGVyKCgpID0+IHRoaXMuY2FuRHJhZygpKSxcbiAgICAgIG1lcmdlTWFwKChwb2ludGVyRG93bkV2ZW50OiBQb2ludGVyRXZlbnQpID0+IHtcbiAgICAgICAgLy8gZml4IGZvciBodHRwczovL2dpdGh1Yi5jb20vbWF0dGxld2lzOTIvYW5ndWxhci1kcmFnZ2FibGUtZHJvcHBhYmxlL2lzc3Vlcy82MVxuICAgICAgICAvLyBzdG9wIG1vdXNlIGV2ZW50cyBwcm9wYWdhdGluZyB1cCB0aGUgY2hhaW5cbiAgICAgICAgaWYgKHBvaW50ZXJEb3duRXZlbnQuZXZlbnQuc3RvcFByb3BhZ2F0aW9uICYmICF0aGlzLnNjcm9sbENvbnRhaW5lcikge1xuICAgICAgICAgIHBvaW50ZXJEb3duRXZlbnQuZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBoYWNrIHRvIHByZXZlbnQgdGV4dCBnZXR0aW5nIHNlbGVjdGVkIGluIHNhZmFyaSB3aGlsZSBkcmFnZ2luZ1xuICAgICAgICBjb25zdCBnbG9iYWxEcmFnU3R5bGU6IEhUTUxTdHlsZUVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ3N0eWxlJ1xuICAgICAgICApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShnbG9iYWxEcmFnU3R5bGUsICd0eXBlJywgJ3RleHQvY3NzJyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgZ2xvYmFsRHJhZ1N0eWxlLFxuICAgICAgICAgIHRoaXMucmVuZGVyZXIuY3JlYXRlVGV4dChgXG4gICAgICAgICAgYm9keSAqIHtcbiAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIGApXG4gICAgICAgICk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGdsb2JhbERyYWdTdHlsZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHN0YXJ0U2Nyb2xsUG9zaXRpb24gPSB0aGlzLmdldFNjcm9sbFBvc2l0aW9uKCk7XG5cbiAgICAgICAgY29uc3Qgc2Nyb2xsQ29udGFpbmVyU2Nyb2xsJCA9IG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcikgPT4ge1xuICAgICAgICAgIGNvbnN0IHNjcm9sbENvbnRhaW5lciA9IHRoaXMuc2Nyb2xsQ29udGFpbmVyXG4gICAgICAgICAgICA/IHRoaXMuc2Nyb2xsQ29udGFpbmVyLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFxuICAgICAgICAgICAgOiAnd2luZG93JztcbiAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5saXN0ZW4oc2Nyb2xsQ29udGFpbmVyLCAnc2Nyb2xsJywgKGUpID0+XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KGUpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSkucGlwZShcbiAgICAgICAgICBzdGFydFdpdGgoc3RhcnRTY3JvbGxQb3NpdGlvbiksXG4gICAgICAgICAgbWFwKCgpID0+IHRoaXMuZ2V0U2Nyb2xsUG9zaXRpb24oKSlcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBjdXJyZW50RHJhZyQgPSBuZXcgU3ViamVjdDxDdXJyZW50RHJhZ0RhdGE+KCk7XG4gICAgICAgIGNvbnN0IGNhbmNlbERyYWckID0gbmV3IFJlcGxheVN1YmplY3Q8dm9pZD4oKTtcblxuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmRyYWdQb2ludGVyRG93bi5uZXh0KHsgeDogMCwgeTogMCB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZHJhZ0NvbXBsZXRlJCA9IG1lcmdlKFxuICAgICAgICAgIHRoaXMucG9pbnRlclVwJCxcbiAgICAgICAgICB0aGlzLnBvaW50ZXJEb3duJCxcbiAgICAgICAgICBjYW5jZWxEcmFnJCxcbiAgICAgICAgICB0aGlzLmRlc3Ryb3kkXG4gICAgICAgICkucGlwZShzaGFyZSgpKTtcblxuICAgICAgICBjb25zdCBwb2ludGVyTW92ZSA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgICAgIHRoaXMucG9pbnRlck1vdmUkLFxuICAgICAgICAgIHNjcm9sbENvbnRhaW5lclNjcm9sbCQsXG4gICAgICAgIF0pLnBpcGUoXG4gICAgICAgICAgbWFwKChbcG9pbnRlck1vdmVFdmVudCwgc2Nyb2xsXSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgY3VycmVudERyYWckLFxuICAgICAgICAgICAgICB0cmFuc2Zvcm1YOiBwb2ludGVyTW92ZUV2ZW50LmNsaWVudFggLSBwb2ludGVyRG93bkV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgICAgIHRyYW5zZm9ybVk6IHBvaW50ZXJNb3ZlRXZlbnQuY2xpZW50WSAtIHBvaW50ZXJEb3duRXZlbnQuY2xpZW50WSxcbiAgICAgICAgICAgICAgY2xpZW50WDogcG9pbnRlck1vdmVFdmVudC5jbGllbnRYLFxuICAgICAgICAgICAgICBjbGllbnRZOiBwb2ludGVyTW92ZUV2ZW50LmNsaWVudFksXG4gICAgICAgICAgICAgIHNjcm9sbExlZnQ6IHNjcm9sbC5sZWZ0LFxuICAgICAgICAgICAgICBzY3JvbGxUb3A6IHNjcm9sbC50b3AsXG4gICAgICAgICAgICAgIHRhcmdldDogcG9pbnRlck1vdmVFdmVudC5ldmVudC50YXJnZXQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1hcCgobW92ZURhdGEpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRyYWdTbmFwR3JpZC54KSB7XG4gICAgICAgICAgICAgIG1vdmVEYXRhLnRyYW5zZm9ybVggPVxuICAgICAgICAgICAgICAgIE1hdGgucm91bmQobW92ZURhdGEudHJhbnNmb3JtWCAvIHRoaXMuZHJhZ1NuYXBHcmlkLngpICpcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdTbmFwR3JpZC54O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5kcmFnU25hcEdyaWQueSkge1xuICAgICAgICAgICAgICBtb3ZlRGF0YS50cmFuc2Zvcm1ZID1cbiAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKG1vdmVEYXRhLnRyYW5zZm9ybVkgLyB0aGlzLmRyYWdTbmFwR3JpZC55KSAqXG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnU25hcEdyaWQueTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG1vdmVEYXRhO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1hcCgobW92ZURhdGEpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kcmFnQXhpcy54KSB7XG4gICAgICAgICAgICAgIG1vdmVEYXRhLnRyYW5zZm9ybVggPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMuZHJhZ0F4aXMueSkge1xuICAgICAgICAgICAgICBtb3ZlRGF0YS50cmFuc2Zvcm1ZID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG1vdmVEYXRhO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1hcCgobW92ZURhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFggPSBtb3ZlRGF0YS5zY3JvbGxMZWZ0IC0gc3RhcnRTY3JvbGxQb3NpdGlvbi5sZWZ0O1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsWSA9IG1vdmVEYXRhLnNjcm9sbFRvcCAtIHN0YXJ0U2Nyb2xsUG9zaXRpb24udG9wO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgLi4ubW92ZURhdGEsXG4gICAgICAgICAgICAgIHg6IG1vdmVEYXRhLnRyYW5zZm9ybVggKyBzY3JvbGxYLFxuICAgICAgICAgICAgICB5OiBtb3ZlRGF0YS50cmFuc2Zvcm1ZICsgc2Nyb2xsWSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZmlsdGVyKFxuICAgICAgICAgICAgKHsgeCwgeSwgdHJhbnNmb3JtWCwgdHJhbnNmb3JtWSB9KSA9PlxuICAgICAgICAgICAgICAhdGhpcy52YWxpZGF0ZURyYWcgfHxcbiAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZURyYWcoe1xuICAgICAgICAgICAgICAgIHgsXG4gICAgICAgICAgICAgICAgeSxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHsgeDogdHJhbnNmb3JtWCwgeTogdHJhbnNmb3JtWSB9LFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICksXG4gICAgICAgICAgdGFrZVVudGlsKGRyYWdDb21wbGV0ZSQpLFxuICAgICAgICAgIHNoYXJlKClcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBkcmFnU3RhcnRlZCQgPSBwb2ludGVyTW92ZS5waXBlKHRha2UoMSksIHNoYXJlKCkpO1xuICAgICAgICBjb25zdCBkcmFnRW5kZWQkID0gcG9pbnRlck1vdmUucGlwZSh0YWtlTGFzdCgxKSwgc2hhcmUoKSk7XG5cbiAgICAgICAgZHJhZ1N0YXJ0ZWQkLnN1YnNjcmliZSgoeyBjbGllbnRYLCBjbGllbnRZLCB4LCB5IH0pID0+IHtcbiAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZHJhZ1N0YXJ0Lm5leHQoeyBjYW5jZWxEcmFnJCB9KTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHRoaXMuc2Nyb2xsZXIgPSBhdXRvU2Nyb2xsKFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICB0aGlzLnNjcm9sbENvbnRhaW5lclxuICAgICAgICAgICAgICAgID8gdGhpcy5zY3JvbGxDb250YWluZXIuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XG4gICAgICAgICAgICAgICAgOiB0aGlzLmRvY3VtZW50LmRlZmF1bHRWaWV3LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgLi4udGhpcy5hdXRvU2Nyb2xsLFxuICAgICAgICAgICAgICBhdXRvU2Nyb2xsKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgICAgYWRkQ2xhc3ModGhpcy5yZW5kZXJlciwgdGhpcy5lbGVtZW50LCB0aGlzLmRyYWdBY3RpdmVDbGFzcyk7XG5cbiAgICAgICAgICBpZiAodGhpcy5naG9zdERyYWdFbmFibGVkKSB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCBjbG9uZSA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsb25lTm9kZShcbiAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgIGlmICghdGhpcy5zaG93T3JpZ2luYWxFbGVtZW50V2hpbGVEcmFnZ2luZykge1xuICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JyxcbiAgICAgICAgICAgICAgICAnaGlkZGVuJ1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5naG9zdEVsZW1lbnRBcHBlbmRUbykge1xuICAgICAgICAgICAgICB0aGlzLmdob3N0RWxlbWVudEFwcGVuZFRvLmFwcGVuZENoaWxkKGNsb25lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUhLmluc2VydEJlZm9yZShcbiAgICAgICAgICAgICAgICBjbG9uZSxcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5uZXh0U2libGluZ1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmdob3N0RWxlbWVudCA9IGNsb25lO1xuXG4gICAgICAgICAgICB0aGlzLmRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gdGhpcy5kcmFnQ3Vyc29yO1xuXG4gICAgICAgICAgICB0aGlzLnNldEVsZW1lbnRTdHlsZXMoY2xvbmUsIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICAgIHRvcDogYCR7cmVjdC50b3B9cHhgLFxuICAgICAgICAgICAgICBsZWZ0OiBgJHtyZWN0LmxlZnR9cHhgLFxuICAgICAgICAgICAgICB3aWR0aDogYCR7cmVjdC53aWR0aH1weGAsXG4gICAgICAgICAgICAgIGhlaWdodDogYCR7cmVjdC5oZWlnaHR9cHhgLFxuICAgICAgICAgICAgICBjdXJzb3I6IHRoaXMuZHJhZ0N1cnNvcixcbiAgICAgICAgICAgICAgbWFyZ2luOiAnMCcsXG4gICAgICAgICAgICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nLFxuICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZ2hvc3RFbGVtZW50VGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgY29uc3Qgdmlld1JlZiA9IHRoaXMudmNyLmNyZWF0ZUVtYmVkZGVkVmlldyhcbiAgICAgICAgICAgICAgICB0aGlzLmdob3N0RWxlbWVudFRlbXBsYXRlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGNsb25lLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICB2aWV3UmVmLnJvb3ROb2Rlc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoKG5vZGUpID0+IG5vZGUgaW5zdGFuY2VvZiBOb2RlKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjbG9uZS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgZHJhZ0VuZGVkJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudmNyLnJlbW92ZSh0aGlzLnZjci5pbmRleE9mKHZpZXdSZWYpKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmdob3N0RWxlbWVudENyZWF0ZWQuZW1pdCh7XG4gICAgICAgICAgICAgICAgY2xpZW50WDogY2xpZW50WCAtIHgsXG4gICAgICAgICAgICAgICAgY2xpZW50WTogY2xpZW50WSAtIHksXG4gICAgICAgICAgICAgICAgZWxlbWVudDogY2xvbmUsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRyYWdFbmRlZCQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgY2xvbmUucGFyZW50RWxlbWVudCEucmVtb3ZlQ2hpbGQoY2xvbmUpO1xuICAgICAgICAgICAgICB0aGlzLmdob3N0RWxlbWVudCA9IG51bGw7XG4gICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknLFxuICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmRyYWdnYWJsZUhlbHBlci5jdXJyZW50RHJhZy5uZXh0KGN1cnJlbnREcmFnJCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRyYWdFbmRlZCRcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIG1lcmdlTWFwKChkcmFnRW5kRGF0YSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBkcmFnRW5kRGF0YSQgPSBjYW5jZWxEcmFnJC5waXBlKFxuICAgICAgICAgICAgICAgIGNvdW50KCksXG4gICAgICAgICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICAgICAgICBtYXAoKGNhbGxlZENvdW50KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgLi4uZHJhZ0VuZERhdGEsXG4gICAgICAgICAgICAgICAgICBkcmFnQ2FuY2VsbGVkOiBjYWxsZWRDb3VudCA+IDAsXG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGNhbmNlbERyYWckLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgIHJldHVybiBkcmFnRW5kRGF0YSQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgICAuc3Vic2NyaWJlKCh7IHgsIHksIGRyYWdDYW5jZWxsZWQgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxlci5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kcmFnRW5kLm5leHQoeyB4LCB5LCBkcmFnQ2FuY2VsbGVkIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZW1vdmVDbGFzcyh0aGlzLnJlbmRlcmVyLCB0aGlzLmVsZW1lbnQsIHRoaXMuZHJhZ0FjdGl2ZUNsYXNzKTtcbiAgICAgICAgICAgIGN1cnJlbnREcmFnJC5jb21wbGV0ZSgpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIG1lcmdlKGRyYWdDb21wbGV0ZSQsIGRyYWdFbmRlZCQpXG4gICAgICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZG9jdW1lbnQuaGVhZC5yZW1vdmVDaGlsZChnbG9iYWxEcmFnU3R5bGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHBvaW50ZXJNb3ZlO1xuICAgICAgfSksXG4gICAgICBzaGFyZSgpXG4gICAgKTtcblxuICAgIG1lcmdlKFxuICAgICAgcG9pbnRlckRyYWdnZWQkLnBpcGUoXG4gICAgICAgIHRha2UoMSksXG4gICAgICAgIG1hcCgodmFsdWUpID0+IFssIHZhbHVlXSlcbiAgICAgICksXG4gICAgICBwb2ludGVyRHJhZ2dlZCQucGlwZShwYWlyd2lzZSgpKVxuICAgIClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKFtwcmV2aW91cywgbmV4dF0pID0+IHtcbiAgICAgICAgICBpZiAoIXByZXZpb3VzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHByZXZpb3VzLnggIT09IG5leHQueCB8fCBwcmV2aW91cy55ICE9PSBuZXh0Lnk7XG4gICAgICAgIH0pLFxuICAgICAgICBtYXAoKFtwcmV2aW91cywgbmV4dF0pID0+IG5leHQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoe1xuICAgICAgICAgIHgsXG4gICAgICAgICAgeSxcbiAgICAgICAgICBjdXJyZW50RHJhZyQsXG4gICAgICAgICAgY2xpZW50WCxcbiAgICAgICAgICBjbGllbnRZLFxuICAgICAgICAgIHRyYW5zZm9ybVgsXG4gICAgICAgICAgdHJhbnNmb3JtWSxcbiAgICAgICAgICB0YXJnZXQsXG4gICAgICAgIH0pID0+IHtcbiAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dpbmcubmV4dCh7IHgsIHkgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdob3N0RWxlbWVudCkge1xuICAgICAgICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHt0cmFuc2Zvcm1YfXB4LCAke3RyYW5zZm9ybVl9cHgsIDBweClgO1xuICAgICAgICAgICAgICB0aGlzLnNldEVsZW1lbnRTdHlsZXModGhpcy5naG9zdEVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0sXG4gICAgICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogdHJhbnNmb3JtLFxuICAgICAgICAgICAgICAgICctbXMtdHJhbnNmb3JtJzogdHJhbnNmb3JtLFxuICAgICAgICAgICAgICAgICctbW96LXRyYW5zZm9ybSc6IHRyYW5zZm9ybSxcbiAgICAgICAgICAgICAgICAnLW8tdHJhbnNmb3JtJzogdHJhbnNmb3JtLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjdXJyZW50RHJhZyQubmV4dCh7XG4gICAgICAgICAgICBjbGllbnRYLFxuICAgICAgICAgICAgY2xpZW50WSxcbiAgICAgICAgICAgIGRyb3BEYXRhOiB0aGlzLmRyb3BEYXRhLFxuICAgICAgICAgICAgdGFyZ2V0LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICApO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmRyYWdBeGlzKSB7XG4gICAgICB0aGlzLmNoZWNrRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLnBvaW50ZXJEb3duJC5jb21wbGV0ZSgpO1xuICAgIHRoaXMucG9pbnRlck1vdmUkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5wb2ludGVyVXAkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrRXZlbnRMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgY29uc3QgY2FuRHJhZzogYm9vbGVhbiA9IHRoaXMuY2FuRHJhZygpO1xuICAgIGNvbnN0IGhhc0V2ZW50TGlzdGVuZXJzOiBib29sZWFuID1cbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMpLmxlbmd0aCA+IDA7XG5cbiAgICBpZiAoY2FuRHJhZyAmJiAhaGFzRXZlbnRMaXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMubW91c2Vkb3duID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgJ21vdXNlZG93bicsXG4gICAgICAgICAgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy5tb3VzZXVwID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgJ2RvY3VtZW50JyxcbiAgICAgICAgICAnbW91c2V1cCcsXG4gICAgICAgICAgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uTW91c2VVcChldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMudG91Y2hzdGFydCA9IHRoaXMucmVuZGVyZXIubGlzdGVuKFxuICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICd0b3VjaHN0YXJ0JyxcbiAgICAgICAgICAoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaFN0YXJ0KGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy50b3VjaGVuZCA9IHRoaXMucmVuZGVyZXIubGlzdGVuKFxuICAgICAgICAgICdkb2N1bWVudCcsXG4gICAgICAgICAgJ3RvdWNoZW5kJyxcbiAgICAgICAgICAoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaEVuZChldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMudG91Y2hjYW5jZWwgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbihcbiAgICAgICAgICAnZG9jdW1lbnQnLFxuICAgICAgICAgICd0b3VjaGNhbmNlbCcsXG4gICAgICAgICAgKGV2ZW50OiBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hFbmQoZXZlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJTdWJzY3JpcHRpb25zLm1vdXNlZW50ZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbihcbiAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAnbW91c2VlbnRlcicsXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbk1vdXNlRW50ZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy5tb3VzZWxlYXZlID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgJ21vdXNlbGVhdmUnLFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25Nb3VzZUxlYXZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICghY2FuRHJhZyAmJiBoYXNFdmVudExpc3RlbmVycykge1xuICAgICAgdGhpcy51bnN1YnNjcmliZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvbk1vdXNlRG93bihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudC5idXR0b24gPT09IDApIHtcbiAgICAgIGlmICghdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy5tb3VzZW1vdmUpIHtcbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy5tb3VzZW1vdmUgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbihcbiAgICAgICAgICAnZG9jdW1lbnQnLFxuICAgICAgICAgICdtb3VzZW1vdmUnLFxuICAgICAgICAgIChtb3VzZU1vdmVFdmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wb2ludGVyTW92ZSQubmV4dCh7XG4gICAgICAgICAgICAgIGV2ZW50OiBtb3VzZU1vdmVFdmVudCxcbiAgICAgICAgICAgICAgY2xpZW50WDogbW91c2VNb3ZlRXZlbnQuY2xpZW50WCxcbiAgICAgICAgICAgICAgY2xpZW50WTogbW91c2VNb3ZlRXZlbnQuY2xpZW50WSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucG9pbnRlckRvd24kLm5leHQoe1xuICAgICAgICBldmVudCxcbiAgICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb25Nb3VzZVVwKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMCkge1xuICAgICAgaWYgKHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMubW91c2Vtb3ZlKSB7XG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMubW91c2Vtb3ZlKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50TGlzdGVuZXJTdWJzY3JpcHRpb25zLm1vdXNlbW92ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMucG9pbnRlclVwJC5uZXh0KHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uVG91Y2hTdGFydChldmVudDogVG91Y2hFdmVudCk6IHZvaWQge1xuICAgIGxldCBzdGFydFNjcm9sbFBvc2l0aW9uOiBhbnk7XG4gICAgbGV0IGlzRHJhZ0FjdGl2YXRlZDogYm9vbGVhbjtcbiAgICBsZXQgaGFzQ29udGFpbmVyU2Nyb2xsYmFyOiBib29sZWFuO1xuICAgIGlmIChcbiAgICAgICh0aGlzLnNjcm9sbENvbnRhaW5lciAmJiB0aGlzLnNjcm9sbENvbnRhaW5lci5hY3RpdmVMb25nUHJlc3NEcmFnKSB8fFxuICAgICAgdGhpcy50b3VjaFN0YXJ0TG9uZ1ByZXNzXG4gICAgKSB7XG4gICAgICB0aGlzLnRpbWVMb25nUHJlc3MudGltZXJCZWdpbiA9IERhdGUubm93KCk7XG4gICAgICBpc0RyYWdBY3RpdmF0ZWQgPSBmYWxzZTtcbiAgICAgIGhhc0NvbnRhaW5lclNjcm9sbGJhciA9IHRoaXMuaGFzU2Nyb2xsYmFyKCk7XG4gICAgICBzdGFydFNjcm9sbFBvc2l0aW9uID0gdGhpcy5nZXRTY3JvbGxQb3NpdGlvbigpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy50b3VjaG1vdmUpIHtcbiAgICAgIGNvbnN0IGNvbnRleHRNZW51TGlzdGVuZXIgPSBmcm9tRXZlbnQ8RXZlbnQ+KFxuICAgICAgICB0aGlzLmRvY3VtZW50LFxuICAgICAgICAnY29udGV4dG1lbnUnXG4gICAgICApLnN1YnNjcmliZSgoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgdG91Y2hNb3ZlTGlzdGVuZXIgPSBmcm9tRXZlbnQ8VG91Y2hFdmVudD4oXG4gICAgICAgIHRoaXMuZG9jdW1lbnQsXG4gICAgICAgICd0b3VjaG1vdmUnLFxuICAgICAgICB7XG4gICAgICAgICAgcGFzc2l2ZTogZmFsc2UsXG4gICAgICAgIH1cbiAgICAgICkuc3Vic2NyaWJlKCh0b3VjaE1vdmVFdmVudCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgKCh0aGlzLnNjcm9sbENvbnRhaW5lciAmJiB0aGlzLnNjcm9sbENvbnRhaW5lci5hY3RpdmVMb25nUHJlc3NEcmFnKSB8fFxuICAgICAgICAgICAgdGhpcy50b3VjaFN0YXJ0TG9uZ1ByZXNzKSAmJlxuICAgICAgICAgICFpc0RyYWdBY3RpdmF0ZWQgJiZcbiAgICAgICAgICBoYXNDb250YWluZXJTY3JvbGxiYXJcbiAgICAgICAgKSB7XG4gICAgICAgICAgaXNEcmFnQWN0aXZhdGVkID0gdGhpcy5zaG91bGRCZWdpbkRyYWcoXG4gICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgIHRvdWNoTW92ZUV2ZW50LFxuICAgICAgICAgICAgc3RhcnRTY3JvbGxQb3NpdGlvblxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFxuICAgICAgICAgICgoIXRoaXMuc2Nyb2xsQ29udGFpbmVyIHx8XG4gICAgICAgICAgICAhdGhpcy5zY3JvbGxDb250YWluZXIuYWN0aXZlTG9uZ1ByZXNzRHJhZykgJiZcbiAgICAgICAgICAgICF0aGlzLnRvdWNoU3RhcnRMb25nUHJlc3MpIHx8XG4gICAgICAgICAgIWhhc0NvbnRhaW5lclNjcm9sbGJhciB8fFxuICAgICAgICAgIGlzRHJhZ0FjdGl2YXRlZFxuICAgICAgICApIHtcbiAgICAgICAgICB0b3VjaE1vdmVFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMucG9pbnRlck1vdmUkLm5leHQoe1xuICAgICAgICAgICAgZXZlbnQ6IHRvdWNoTW92ZUV2ZW50LFxuICAgICAgICAgICAgY2xpZW50WDogdG91Y2hNb3ZlRXZlbnQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYLFxuICAgICAgICAgICAgY2xpZW50WTogdG91Y2hNb3ZlRXZlbnQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRZLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy50b3VjaG1vdmUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnRleHRNZW51TGlzdGVuZXIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdG91Y2hNb3ZlTGlzdGVuZXIudW5zdWJzY3JpYmUoKTtcbiAgICAgIH07XG4gICAgfVxuICAgIHRoaXMucG9pbnRlckRvd24kLm5leHQoe1xuICAgICAgZXZlbnQsXG4gICAgICBjbGllbnRYOiBldmVudC50b3VjaGVzWzBdLmNsaWVudFgsXG4gICAgICBjbGllbnRZOiBldmVudC50b3VjaGVzWzBdLmNsaWVudFksXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG9uVG91Y2hFbmQoZXZlbnQ6IFRvdWNoRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy50b3VjaG1vdmUpIHtcbiAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMudG91Y2htb3ZlKCk7XG4gICAgICBkZWxldGUgdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy50b3VjaG1vdmU7XG5cbiAgICAgIGlmIChcbiAgICAgICAgKHRoaXMuc2Nyb2xsQ29udGFpbmVyICYmIHRoaXMuc2Nyb2xsQ29udGFpbmVyLmFjdGl2ZUxvbmdQcmVzc0RyYWcpIHx8XG4gICAgICAgIHRoaXMudG91Y2hTdGFydExvbmdQcmVzc1xuICAgICAgKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlU2Nyb2xsKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucG9pbnRlclVwJC5uZXh0KHtcbiAgICAgIGV2ZW50LFxuICAgICAgY2xpZW50WDogZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCxcbiAgICAgIGNsaWVudFk6IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFksXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG9uTW91c2VFbnRlcigpOiB2b2lkIHtcbiAgICB0aGlzLnNldEN1cnNvcih0aGlzLmRyYWdDdXJzb3IpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbk1vdXNlTGVhdmUoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDdXJzb3IoJycpO1xuICB9XG5cbiAgcHJpdmF0ZSBjYW5EcmFnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRyYWdBeGlzLnggfHwgdGhpcy5kcmFnQXhpcy55O1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDdXJzb3IodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy5tb3VzZW1vdmUpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdjdXJzb3InLCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1bnN1YnNjcmliZUV2ZW50TGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIE9iamVjdC5rZXlzKHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMpLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICh0aGlzIGFzIGFueSkuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnNbdHlwZV0oKTtcbiAgICAgIGRlbGV0ZSAodGhpcyBhcyBhbnkpLmV2ZW50TGlzdGVuZXJTdWJzY3JpcHRpb25zW3R5cGVdO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRFbGVtZW50U3R5bGVzKFxuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIHN0eWxlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfVxuICApIHtcbiAgICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShlbGVtZW50LCBrZXksIHN0eWxlc1trZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2Nyb2xsRWxlbWVudCgpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxDb250YWluZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjcm9sbENvbnRhaW5lci5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmRvY3VtZW50LmJvZHk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRTY3JvbGxQb3NpdGlvbigpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxDb250YWluZXIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogdGhpcy5zY3JvbGxDb250YWluZXIuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCxcbiAgICAgICAgbGVmdDogdGhpcy5zY3JvbGxDb250YWluZXIuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b3A6IHdpbmRvdy5wYWdlWU9mZnNldCB8fCB0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AsXG4gICAgICAgIGxlZnQ6IHdpbmRvdy5wYWdlWE9mZnNldCB8fCB0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNob3VsZEJlZ2luRHJhZyhcbiAgICBldmVudDogVG91Y2hFdmVudCxcbiAgICB0b3VjaE1vdmVFdmVudDogVG91Y2hFdmVudCxcbiAgICBzdGFydFNjcm9sbFBvc2l0aW9uOiB7IHRvcDogbnVtYmVyOyBsZWZ0OiBudW1iZXIgfVxuICApOiBib29sZWFuIHtcbiAgICBjb25zdCBtb3ZlU2Nyb2xsUG9zaXRpb24gPSB0aGlzLmdldFNjcm9sbFBvc2l0aW9uKCk7XG4gICAgY29uc3QgZGVsdGFTY3JvbGwgPSB7XG4gICAgICB0b3A6IE1hdGguYWJzKG1vdmVTY3JvbGxQb3NpdGlvbi50b3AgLSBzdGFydFNjcm9sbFBvc2l0aW9uLnRvcCksXG4gICAgICBsZWZ0OiBNYXRoLmFicyhtb3ZlU2Nyb2xsUG9zaXRpb24ubGVmdCAtIHN0YXJ0U2Nyb2xsUG9zaXRpb24ubGVmdCksXG4gICAgfTtcbiAgICBjb25zdCBkZWx0YVggPVxuICAgICAgTWF0aC5hYnMoXG4gICAgICAgIHRvdWNoTW92ZUV2ZW50LnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WCAtIGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WFxuICAgICAgKSAtIGRlbHRhU2Nyb2xsLmxlZnQ7XG4gICAgY29uc3QgZGVsdGFZID1cbiAgICAgIE1hdGguYWJzKFxuICAgICAgICB0b3VjaE1vdmVFdmVudC50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFkgLSBldmVudC50b3VjaGVzWzBdLmNsaWVudFlcbiAgICAgICkgLSBkZWx0YVNjcm9sbC50b3A7XG4gICAgY29uc3QgZGVsdGFUb3RhbCA9IGRlbHRhWCArIGRlbHRhWTtcbiAgICBjb25zdCBsb25nUHJlc3NDb25maWcgPSB0aGlzLnRvdWNoU3RhcnRMb25nUHJlc3NcbiAgICAgID8gdGhpcy50b3VjaFN0YXJ0TG9uZ1ByZXNzXG4gICAgICA6IC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIHtcbiAgICAgICAgICBkZWx0YTogdGhpcy5zY3JvbGxDb250YWluZXIubG9uZ1ByZXNzQ29uZmlnLmRlbHRhLFxuICAgICAgICAgIGRlbGF5OiB0aGlzLnNjcm9sbENvbnRhaW5lci5sb25nUHJlc3NDb25maWcuZHVyYXRpb24sXG4gICAgICAgIH07XG4gICAgaWYgKFxuICAgICAgZGVsdGFUb3RhbCA+IGxvbmdQcmVzc0NvbmZpZy5kZWx0YSB8fFxuICAgICAgZGVsdGFTY3JvbGwudG9wID4gMCB8fFxuICAgICAgZGVsdGFTY3JvbGwubGVmdCA+IDBcbiAgICApIHtcbiAgICAgIHRoaXMudGltZUxvbmdQcmVzcy50aW1lckJlZ2luID0gRGF0ZS5ub3coKTtcbiAgICB9XG4gICAgdGhpcy50aW1lTG9uZ1ByZXNzLnRpbWVyRW5kID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBkdXJhdGlvbiA9XG4gICAgICB0aGlzLnRpbWVMb25nUHJlc3MudGltZXJFbmQgLSB0aGlzLnRpbWVMb25nUHJlc3MudGltZXJCZWdpbjtcbiAgICBpZiAoZHVyYXRpb24gPj0gbG9uZ1ByZXNzQ29uZmlnLmRlbGF5KSB7XG4gICAgICB0aGlzLmRpc2FibGVTY3JvbGwoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIGVuYWJsZVNjcm9sbCgpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxDb250YWluZXIpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgIHRoaXMuc2Nyb2xsQ29udGFpbmVyLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICAgJ292ZXJmbG93JyxcbiAgICAgICAgJydcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5kb2N1bWVudC5ib2R5LCAnb3ZlcmZsb3cnLCAnJyk7XG4gIH1cblxuICBwcml2YXRlIGRpc2FibGVTY3JvbGwoKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAodGhpcy5zY3JvbGxDb250YWluZXIpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgIHRoaXMuc2Nyb2xsQ29udGFpbmVyLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICAgJ292ZXJmbG93JyxcbiAgICAgICAgJ2hpZGRlbidcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5kb2N1bWVudC5ib2R5LCAnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG4gIH1cblxuICBwcml2YXRlIGhhc1Njcm9sbGJhcigpOiBib29sZWFuIHtcbiAgICBjb25zdCBzY3JvbGxDb250YWluZXIgPSB0aGlzLmdldFNjcm9sbEVsZW1lbnQoKTtcbiAgICBjb25zdCBjb250YWluZXJIYXNIb3Jpem9udGFsU2Nyb2xsID1cbiAgICAgIHNjcm9sbENvbnRhaW5lci5zY3JvbGxXaWR0aCA+IHNjcm9sbENvbnRhaW5lci5jbGllbnRXaWR0aDtcbiAgICBjb25zdCBjb250YWluZXJIYXNWZXJ0aWNhbFNjcm9sbCA9XG4gICAgICBzY3JvbGxDb250YWluZXIuc2Nyb2xsSGVpZ2h0ID4gc2Nyb2xsQ29udGFpbmVyLmNsaWVudEhlaWdodDtcbiAgICByZXR1cm4gY29udGFpbmVySGFzSG9yaXpvbnRhbFNjcm9sbCB8fCBjb250YWluZXJIYXNWZXJ0aWNhbFNjcm9sbDtcbiAgfVxufVxuIl19