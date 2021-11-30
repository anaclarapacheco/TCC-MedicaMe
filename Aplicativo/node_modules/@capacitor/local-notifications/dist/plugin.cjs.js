'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const LocalNotifications = core.registerPlugin('LocalNotifications', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.LocalNotificationsWeb()),
});

class LocalNotificationsWeb extends core.WebPlugin {
    constructor() {
        super(...arguments);
        this.pending = [];
        this.hasNotificationSupport = () => {
            if (!('Notification' in window) || !Notification.requestPermission) {
                return false;
            }
            if (Notification.permission !== 'granted') {
                // don't test for `new Notification` if permission has already been granted
                // otherwise this sends a real notification on supported browsers
                try {
                    new Notification('');
                }
                catch (e) {
                    if (e.name == 'TypeError') {
                        return false;
                    }
                }
            }
            return true;
        };
    }
    async createChannel() {
        throw this.unimplemented('Not implemented on web.');
    }
    async deleteChannel() {
        throw this.unimplemented('Not implemented on web.');
    }
    async listChannels() {
        throw this.unimplemented('Not implemented on web.');
    }
    async schedule(options) {
        if (!this.hasNotificationSupport()) {
            throw this.unavailable('Notifications not supported in this browser.');
        }
        for (const notification of options.notifications) {
            this.sendNotification(notification);
        }
        return {
            notifications: options.notifications.map(notification => ({
                id: notification.id,
            })),
        };
    }
    async getPending() {
        return {
            notifications: this.pending,
        };
    }
    async registerActionTypes() {
        throw this.unimplemented('Not implemented on web.');
    }
    async cancel(pending) {
        this.pending = this.pending.filter(notification => !pending.notifications.find(n => n.id === notification.id));
    }
    async areEnabled() {
        const { display } = await this.checkPermissions();
        return {
            value: display === 'granted',
        };
    }
    async requestPermissions() {
        if (!this.hasNotificationSupport()) {
            throw this.unavailable('Notifications not supported in this browser.');
        }
        const display = this.transformNotificationPermission(await Notification.requestPermission());
        return { display };
    }
    async checkPermissions() {
        if (!this.hasNotificationSupport()) {
            throw this.unavailable('Notifications not supported in this browser.');
        }
        const display = this.transformNotificationPermission(Notification.permission);
        return { display };
    }
    transformNotificationPermission(permission) {
        switch (permission) {
            case 'granted':
                return 'granted';
            case 'denied':
                return 'denied';
            default:
                return 'prompt';
        }
    }
    sendPending() {
        var _a;
        const toRemove = [];
        const now = new Date().getTime();
        for (const notification of this.pending) {
            if (((_a = notification.schedule) === null || _a === void 0 ? void 0 : _a.at) &&
                notification.schedule.at.getTime() <= now) {
                this.buildNotification(notification);
                toRemove.push(notification);
            }
        }
        this.pending = this.pending.filter(notification => !toRemove.find(n => n === notification));
    }
    sendNotification(notification) {
        var _a;
        if ((_a = notification.schedule) === null || _a === void 0 ? void 0 : _a.at) {
            const diff = notification.schedule.at.getTime() - new Date().getTime();
            this.pending.push(notification);
            setTimeout(() => {
                this.sendPending();
            }, diff);
            return;
        }
        this.buildNotification(notification);
    }
    buildNotification(notification) {
        const localNotification = new Notification(notification.title, {
            body: notification.body,
        });
        localNotification.addEventListener('click', this.onClick.bind(this, notification), false);
        localNotification.addEventListener('show', this.onShow.bind(this, notification), false);
        return localNotification;
    }
    onClick(notification) {
        const data = {
            actionId: 'tap',
            notification,
        };
        this.notifyListeners('localNotificationActionPerformed', data);
    }
    onShow(notification) {
        this.notifyListeners('localNotificationReceived', notification);
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    LocalNotificationsWeb: LocalNotificationsWeb
});

exports.LocalNotifications = LocalNotifications;
//# sourceMappingURL=plugin.cjs.js.map
