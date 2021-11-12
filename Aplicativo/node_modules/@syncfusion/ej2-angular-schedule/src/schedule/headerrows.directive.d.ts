import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
/**
 * `e-header-rows` directive represent a header rows of the Schedule.
 * It must be contained in a Schedule component(`ejs-schedule`).
 * ```html
 * <ejs-schedule>
 *   <e-header-rows>
 *    <e-header-row option='Week'></e-header-row>
 *    <e-header-row option='Date'></e-header-row>
 *   </e-header-rows>
 * </ejs-schedule>
 * ```
 */
export declare class HeaderRowDirective extends ComplexBase<HeaderRowDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * It defines the header row type, which accepts either of the following values.
     * * Year
     * * Month
     * * Week
     * * Date
     * * Hour
     * @default null
     */
    option: any;
    /**
     * Template option to customize the individual header rows. It accepts either the string or HTMLElement as template design
     *  content and parse it appropriately before displaying it onto the header cells. The field that
     *  can be accessed via this template is `date`.
     * @default null
     */
    template: any;
    constructor(viewContainerRef: ViewContainerRef);
}
/**
 * HeaderRow Array Directive
 * @private
 */
export declare class HeaderRowsDirective extends ArrayBase<HeaderRowsDirective> {
    constructor();
}
