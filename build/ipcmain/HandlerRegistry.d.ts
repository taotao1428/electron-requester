import { ChannelHandler } from "./ChannelHandler";
/**
 * handler注册器
 */
export interface HandlerRegistry {
    /**
     * 注册handler
     * @param channel 事件
     * @param handler 处理器
     */
    register(channel: string, handler: ChannelHandler): this;
    /**
     * 获得handler
     */
    getHandler(channel: string): ChannelHandler;
}
