import { Result } from "../common/Result";
/**
 * ipcRenderer使用的listener
 */
export interface Listener {
    /**
     * 监听响应channel
     * @param channel 事件
     * @param token 区分不同事件的token
     * @param endHandler 请求结束的handler，仅能被调用一次
     * @param progressiveHandler 过程handler，可能会被调用多次
     */
    listen(channel: string, token: string, endHandler: EndHandler, progressiveHandler: ProgressiveHandler): any;
    /**
     * 移除channel的所有监听器
     */
    remove(channel: string, token: string): any;
}
/**
 * 处理最后的结果
 */
export interface EndHandler {
    (result: Result): void;
}
/**
 * 处理过程
 */
export interface ProgressiveHandler {
    (data: any): void;
}
