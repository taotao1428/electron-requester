import { HandlerRegistry } from "./HandlerRegistry";
import { ChannelHandler } from "./ChannelHandler";
export declare class DefaultHandlerRegistry implements HandlerRegistry {
    private handlers;
    getHandler(channel: string): ChannelHandler;
    register(channel: string, handler: ChannelHandler): this;
}
