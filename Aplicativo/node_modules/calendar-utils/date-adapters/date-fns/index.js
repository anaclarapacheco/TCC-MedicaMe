"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adapterFactory = void 0;
var date_fns_1 = require("date-fns");
function adapterFactory() {
    return {
        addDays: date_fns_1.addDays,
        addHours: date_fns_1.addHours,
        addMinutes: date_fns_1.addMinutes,
        addSeconds: date_fns_1.addSeconds,
        differenceInDays: date_fns_1.differenceInDays,
        differenceInMinutes: date_fns_1.differenceInMinutes,
        differenceInSeconds: date_fns_1.differenceInSeconds,
        endOfDay: date_fns_1.endOfDay,
        endOfMonth: date_fns_1.endOfMonth,
        endOfWeek: date_fns_1.endOfWeek,
        getDay: date_fns_1.getDay,
        getMonth: date_fns_1.getMonth,
        isSameDay: date_fns_1.isSameDay,
        isSameMonth: date_fns_1.isSameMonth,
        isSameSecond: date_fns_1.isSameSecond,
        max: date_fns_1.max,
        setHours: date_fns_1.setHours,
        setMinutes: date_fns_1.setMinutes,
        startOfDay: date_fns_1.startOfDay,
        startOfMinute: date_fns_1.startOfMinute,
        startOfMonth: date_fns_1.startOfMonth,
        startOfWeek: date_fns_1.startOfWeek,
        getHours: date_fns_1.getHours,
        getMinutes: date_fns_1.getMinutes,
    };
}
exports.adapterFactory = adapterFactory;
//# sourceMappingURL=index.js.map