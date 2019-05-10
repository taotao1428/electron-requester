export const DISPATCHER_CHANNEL = '__DISPATCHER_CHANNEL__';

/**
 * 事件调度器
 */
export interface Dispatcher {
    dispatch(): void;
}
