import { EndHandler, ProgressiveHandler } from "./Listener";
/**
 * 用于发送请求到ipcMain
 */
export interface Requester {
    /**
     * 发送请求
     * @param channel             通道。注意这不会ipcRenderer.send(channel, listener)中的通道，仅是一个参数
     * @param params              参数
     * @param handler             处理最后结果的handler
     * @param progressiveHandler  处理过程通知的handler
     */
    request(channel: string, params: {
        [key: string]: any;
    }, handler: EndHandler, progressiveHandler?: ProgressiveHandler): any;
}
