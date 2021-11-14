import { Renderer2, ElementRef, OnInit, OnDestroy, NgZone } from '@angular/core';
import { ResizableDirective } from './resizable.directive';
import { Edges } from './interfaces/edges.interface';
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
export declare class ResizeHandleDirective implements OnInit, OnDestroy {
    private renderer;
    private element;
    private zone;
    private resizableDirective;
    /**
     * The `Edges` object that contains the edges of the parent element that dragging the handle will trigger a resize on
     */
    resizeEdges: Edges;
    /**
     * Reference to ResizableDirective in case if handle is not located inside of element with ResizableDirective
     */
    resizableContainer: ResizableDirective;
    private eventListeners;
    private destroy$;
    constructor(renderer: Renderer2, element: ElementRef, zone: NgZone, resizableDirective: ResizableDirective);
    ngOnInit(): void;
    ngOnDestroy(): void;
    /**
     * @hidden
     */
    onMousedown(event: MouseEvent | TouchEvent, clientX: number, clientY: number): void;
    /**
     * @hidden
     */
    onMouseup(clientX: number, clientY: number): void;
    private readonly resizable;
    private onMousemove;
    private unsubscribeEventListeners;
    private listenOnTheHost;
}
