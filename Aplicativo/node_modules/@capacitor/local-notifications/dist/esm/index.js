import { registerPlugin } from '@capacitor/core';
const LocalNotifications = registerPlugin('LocalNotifications', {
    web: () => import('./web').then(m => new m.LocalNotificationsWeb()),
});
export * from './definitions';
export { LocalNotifications };
//# sourceMappingURL=index.js.map