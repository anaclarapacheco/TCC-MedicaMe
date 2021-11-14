import { DateAdapter } from './date-adapters/date-adapter/index';
export declare enum DAYS_OF_WEEK {
    SUNDAY = 0,
    MONDAY = 1,
    TUESDAY = 2,
    WEDNESDAY = 3,
    THURSDAY = 4,
    FRIDAY = 5,
    SATURDAY = 6
}
export declare const SECONDS_IN_DAY: number;
export interface WeekDay {
    date: Date;
    day: number;
    isPast: boolean;
    isToday: boolean;
    isFuture: boolean;
    isWeekend: boolean;
    cssClass?: string;
}
export interface EventColor {
    primary: string;
    secondary: string;
}
export interface EventAction {
    id?: string | number;
    label: string;
    cssClass?: string;
    a11yLabel?: string;
    onClick({ event, sourceEvent, }: {
        event: CalendarEvent;
        sourceEvent: MouseEvent | KeyboardEvent;
    }): any;
}
export interface CalendarEvent<MetaType = any> {
    id?: string | number;
    start: Date;
    end?: Date;
    title: string;
    color?: EventColor;
    actions?: EventAction[];
    allDay?: boolean;
    cssClass?: string;
    resizable?: {
        beforeStart?: boolean;
        afterEnd?: boolean;
    };
    draggable?: boolean;
    meta?: MetaType;
}
export interface WeekViewAllDayEvent {
    event: CalendarEvent;
    offset: number;
    span: number;
    startsBeforeWeek: boolean;
    endsAfterWeek: boolean;
}
export interface WeekViewAllDayEventRow {
    id?: string;
    row: WeekViewAllDayEvent[];
}
export interface WeekView {
    period: ViewPeriod;
    allDayEventRows: WeekViewAllDayEventRow[];
    hourColumns: WeekViewHourColumn[];
}
export interface MonthViewDay<MetaType = any> extends WeekDay {
    inMonth: boolean;
    events: CalendarEvent[];
    backgroundColor?: string;
    badgeTotal: number;
    meta?: MetaType;
}
export interface MonthView {
    rowOffsets: number[];
    days: MonthViewDay[];
    totalDaysVisibleInWeek: number;
    period: ViewPeriod;
}
export interface WeekViewTimeEvent {
    event: CalendarEvent;
    height: number;
    width: number;
    top: number;
    left: number;
    startsBeforeDay: boolean;
    endsAfterDay: boolean;
}
export interface WeekViewHourSegment {
    isStart: boolean;
    date: Date;
    displayDate: Date;
    cssClass?: string;
}
export interface WeekViewHour {
    segments: WeekViewHourSegment[];
}
export interface WeekViewHourColumn {
    date: Date;
    hours: WeekViewHour[];
    events: WeekViewTimeEvent[];
}
export interface ViewPeriod {
    start: Date;
    end: Date;
    events: CalendarEvent[];
}
export interface GetEventsInPeriodArgs {
    events: CalendarEvent[];
    periodStart: Date;
    periodEnd: Date;
}
export declare function getEventsInPeriod(dateAdapter: DateAdapter, { events, periodStart, periodEnd }: GetEventsInPeriodArgs): CalendarEvent[];
export interface GetWeekViewHeaderArgs {
    viewDate: Date;
    weekStartsOn: number;
    excluded?: number[];
    weekendDays?: number[];
    viewStart?: Date;
    viewEnd?: Date;
}
export declare function getWeekViewHeader(dateAdapter: DateAdapter, { viewDate, weekStartsOn, excluded, weekendDays, viewStart, viewEnd, }: GetWeekViewHeaderArgs): WeekDay[];
export interface GetWeekViewArgs {
    events?: CalendarEvent[];
    viewDate: Date;
    weekStartsOn: number;
    excluded?: number[];
    precision?: 'minutes' | 'days';
    absolutePositionedEvents?: boolean;
    hourSegments?: number;
    hourDuration?: number;
    dayStart: Time;
    dayEnd: Time;
    weekendDays?: number[];
    segmentHeight: number;
    viewStart?: Date;
    viewEnd?: Date;
    minimumEventHeight?: number;
}
export declare function getDifferenceInDaysWithExclusions(dateAdapter: DateAdapter, { date1, date2, excluded }: {
    date1: Date;
    date2: Date;
    excluded: number[];
}): number;
interface GetAllDayEventArgs {
    precision?: 'days' | 'minutes';
    events?: CalendarEvent[];
    absolutePositionedEvents?: boolean;
    viewStart: Date;
    viewEnd: Date;
    excluded?: number[];
}
export declare function getAllDayWeekEvents(dateAdapter: DateAdapter, { events, excluded, precision, absolutePositionedEvents, viewStart, viewEnd, }: GetAllDayEventArgs): WeekViewAllDayEventRow[];
export declare function getWeekView(dateAdapter: DateAdapter, { events, viewDate, weekStartsOn, excluded, precision, absolutePositionedEvents, hourSegments, hourDuration, dayStart, dayEnd, weekendDays, segmentHeight, minimumEventHeight, viewStart, viewEnd, }: GetWeekViewArgs): WeekView;
export interface GetMonthViewArgs {
    events?: CalendarEvent[];
    viewDate: Date;
    weekStartsOn: number;
    excluded?: number[];
    viewStart?: Date;
    viewEnd?: Date;
    weekendDays?: number[];
}
export declare function getMonthView(dateAdapter: DateAdapter, { events, viewDate, weekStartsOn, excluded, viewStart, viewEnd, weekendDays, }: GetMonthViewArgs): MonthView;
export interface GetDayViewArgs {
    events?: CalendarEvent[];
    viewDate: Date;
    hourSegments: number;
    dayStart: {
        hour: number;
        minute: number;
    };
    dayEnd: {
        hour: number;
        minute: number;
    };
    eventWidth: number;
    segmentHeight: number;
    hourDuration: number;
    minimumEventHeight: number;
}
interface Time {
    hour: number;
    minute: number;
}
export declare enum EventValidationErrorMessage {
    NotArray = "Events must be an array",
    StartPropertyMissing = "Event is missing the `start` property",
    StartPropertyNotDate = "Event `start` property should be a javascript date object. Do `new Date(event.start)` to fix it.",
    EndPropertyNotDate = "Event `end` property should be a javascript date object. Do `new Date(event.end)` to fix it.",
    EndsBeforeStart = "Event `start` property occurs after the `end`"
}
export declare function validateEvents(events: CalendarEvent[], log: (...args: any[]) => void): boolean;
export {};
