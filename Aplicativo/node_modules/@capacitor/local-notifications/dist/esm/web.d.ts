import { WebPlugin } from '@capacitor/core';
import type { PermissionState } from '@capacitor/core';
import type { EnabledResult, ListChannelsResult, LocalNotificationSchema, LocalNotificationsPlugin, PendingResult, PermissionStatus, ScheduleOptions, ScheduleResult } from './definitions';
export declare class LocalNotificationsWeb extends WebPlugin implements LocalNotificationsPlugin {
    protected pending: LocalNotificationSchema[];
    createChannel(): Promise<void>;
    deleteChannel(): Promise<void>;
    listChannels(): Promise<ListChannelsResult>;
    schedule(options: ScheduleOptions): Promise<ScheduleResult>;
    getPending(): Promise<PendingResult>;
    registerActionTypes(): Promise<void>;
    cancel(pending: ScheduleResult): Promise<void>;
    areEnabled(): Promise<EnabledResult>;
    requestPermissions(): Promise<PermissionStatus>;
    checkPermissions(): Promise<PermissionStatus>;
    protected hasNotificationSupport: () => boolean;
    protected transformNotificationPermission(permission: NotificationPermission): PermissionState;
    protected sendPending(): void;
    protected sendNotification(notification: LocalNotificationSchema): void;
    protected buildNotification(notification: LocalNotificationSchema): Notification;
    protected onClick(notification: LocalNotificationSchema): void;
    protected onShow(notification: LocalNotificationSchema): void;
}
