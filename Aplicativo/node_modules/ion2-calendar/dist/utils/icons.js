"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getIconMap = function () {
    if (typeof window === 'undefined') {
        return new Map();
    }
    else {
        var win = window;
        win.Ionicons = win.Ionicons || {};
        win.Ionicons.map = win.Ionicons.map || new Map();
        return win.Ionicons.map;
    }
};
var ɵ0 = getIconMap;
exports.ɵ0 = ɵ0;
exports.isIonIconsV4 = function () {
    var iconMap = getIconMap();
    return !!iconMap.get('md-arrow-dropdown');
};
//# sourceMappingURL=icons.js.map