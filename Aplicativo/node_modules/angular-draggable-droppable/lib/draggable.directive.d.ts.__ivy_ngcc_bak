import { OnInit, ElementRef, Renderer2, EventEmitter, OnDestroy, OnChanges, NgZone, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';
import { DraggableHelper } from './draggable-helper.provider';
import { DraggableScrollContainerDirective } from './draggable-scroll-container.directive';
export interface Coordinates {
    x: number;
    y: number;
}
export interface DragAxis {
    x: boolean;
    y: boolean;
}
export interface SnapGrid {
    x?: number;
    y?: number;
}
export interface DragPointerDownEvent extends Coordinates {
}
export interface DragStartEvent {
    cancelDrag$: ReplaySubject<void>;
}
export interface DragMoveEvent extends Coordinates {
}
export interface DragEndEvent extends Coordinates {
    dragCancelled: boolean;
}
export interface ValidateDragParams extends Coordinates {
    transform: {
        x: number;
        y: number;
    };
}
export declare type ValidateDrag = (params: ValidateDragParams) => boolean;
export interface PointerEvent {
    clientX: number;
    clientY: number;
    event: MouseEvent | TouchEvent;
}
export interface TimeLongPress {
    timerBegin: number;
    timerEnd: number;
}
export interface GhostElementCreatedEvent {
    clientX: number;
    clientY: number;
    element: HTMLElement;
}
export declare class DraggableDirective implements OnInit, OnChanges, OnDestroy {
    private element;
    private renderer;
    private draggableHelper;
    private zone;
    private vcr;
    private scrollContainer;
    private document;
    /**
     * an object of data you can pass to the drop event
     */
    dropData: any;
    /**
     * The axis along which the element is draggable
     */
    dragAxis: DragAxis;
    /**
     * Snap all drags to an x / y grid
     */
    dragSnapGrid: SnapGrid;
    /**
     * Show a ghost element that shows the drag when dragging
     */
    ghostDragEnabled: boolean;
    /**
     * Show the original element when ghostDragEnabled is true
     */
    showOriginalElementWhileDragging: boolean;
    /**
     * Allow custom behaviour to control when the element is dragged
     */
    validateDrag: ValidateDrag;
    /**
     * The cursor to use when hovering over a draggable element
     */
    dragCursor: string;
    /**
     * The css class to apply when the element is being dragged
     */
    dragActiveClass: string;
    /**
     * The element the ghost element will be appended to. Default is next to the dragged element
     */
    ghostElementAppendTo: HTMLElement;
    /**
     * An ng-template to be inserted into the parent element of the ghost element. It will overwrite any child nodes.
     */
    ghostElementTemplate: TemplateRef<any>;
    /**
     * Amount of milliseconds to wait on touch devices before starting to drag the element (so that you can scroll the page by touching a draggable element)
     */
    touchStartLongPress: {
        delay: number;
        delta: number;
    };
    autoScroll: {
        margin: number | {
            top?: number;
            left?: number;
            right?: number;
            bottom?: number;
        };
        maxSpeed?: number | {
            top?: number;
            left?: number;
            right?: number;
            bottom?: number;
        };
        scrollWhenOutside?: boolean;
    };
    /**
     * Called when the element can be dragged along one axis and has the mouse or pointer device pressed on it
     */
    dragPointerDown: EventEmitter<DragPointerDownEvent>;
    /**
     * Called when the element has started to be dragged.
     * Only called after at least one mouse or touch move event.
     * If you call $event.cancelDrag$.emit() it will cancel the current drag
     */
    dragStart: EventEmitter<DragStartEvent>;
    /**
     * Called after the ghost element has been created
     */
    ghostElementCreated: EventEmitter<GhostElementCreatedEvent>;
    /**
     * Called when the element is being dragged
     */
    dragging: EventEmitter<DragMoveEvent>;
    /**
     * Called after the element is dragged
     */
    dragEnd: EventEmitter<DragEndEvent>;
    /**
     * @hidden
     */
    pointerDown$: Subject<PointerEvent>;
    /**
     * @hidden
     */
    pointerMove$: Subject<PointerEvent>;
    /**
     * @hidden
     */
    pointerUp$: Subject<PointerEvent>;
    private eventListenerSubscriptions;
    private ghostElement;
    private destroy$;
    private timeLongPress;
    private scroller;
    /**
     * @hidden
     */
    constructor(element: ElementRef<HTMLElement>, renderer: Renderer2, draggableHelper: DraggableHelper, zone: NgZone, vcr: ViewContainerRef, scrollContainer: DraggableScrollContainerDirective, document: any);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private checkEventListeners;
    private onMouseDown;
    private onMouseUp;
    private onTouchStart;
    private onTouchEnd;
    private onMouseEnter;
    private onMouseLeave;
    private canDrag;
    private setCursor;
    private unsubscribeEventListeners;
    private setElementStyles;
    private getScrollElement;
    private getScrollPosition;
    private shouldBeginDrag;
    private enableScroll;
    private disableScroll;
    private hasScrollbar;
}
