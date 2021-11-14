import { ElementRef } from '@angular/core';
/**
 * If the window isn't scrollable, then place this on the scrollable container that draggable elements are inside. e.g.
 * ```html
  <div style="overflow: scroll" mwlDraggableScrollContainer>
    <div mwlDraggable>Drag me!</div>
  </div>
  ```
 */
export declare class DraggableScrollContainerDirective {
    elementRef: ElementRef<HTMLElement>;
    /**
     * Trigger the DragStart after a long touch in scrollable container when true
     * @deprecated will be removed in v5 (use [touchStartLongPress]="{delay: 300, delta: 30}" on the mwlDraggable element instead)
     */
    activeLongPressDrag: boolean;
    /**
     * Configuration of a long touch
     * Duration in ms of a long touch before activating DragStart
     * Delta of the
     * @deprecated will be removed in v5 (use [touchStartLongPress]="{delay: 300, delta: 30}" on the mwlDraggable element instead)
     */
    longPressConfig: {
        duration: number;
        delta: number;
    };
    /**
     * @hidden
     */
    constructor(elementRef: ElementRef<HTMLElement>);
}
