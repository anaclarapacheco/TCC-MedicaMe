import { addDays, addHours, addMinutes, addSeconds, differenceInDays, differenceInMinutes, differenceInSeconds, endOfDay, endOfMonth, endOfWeek, getDay, getMonth, isSameDay, isSameMonth, isSameSecond, max, setHours, setMinutes, startOfDay, startOfMinute, startOfMonth, startOfWeek, getHours, getMinutes, } from 'date-fns';
export function adapterFactory() {
    return {
        addDays: addDays,
        addHours: addHours,
        addMinutes: addMinutes,
        addSeconds: addSeconds,
        differenceInDays: differenceInDays,
        differenceInMinutes: differenceInMinutes,
        differenceInSeconds: differenceInSeconds,
        endOfDay: endOfDay,
        endOfMonth: endOfMonth,
        endOfWeek: endOfWeek,
        getDay: getDay,
        getMonth: getMonth,
        isSameDay: isSameDay,
        isSameMonth: isSameMonth,
        isSameSecond: isSameSecond,
        max: max,
        setHours: setHours,
        setMinutes: setMinutes,
        startOfDay: startOfDay,
        startOfMinute: startOfMinute,
        startOfMonth: startOfMonth,
        startOfWeek: startOfWeek,
        getHours: getHours,
        getMinutes: getMinutes,
    };
}
//# sourceMappingURL=index.js.map