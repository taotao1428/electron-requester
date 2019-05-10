import { ChannelHandler } from "./ChannelHandler";
import { Dispatcher } from "./Dispatcher";
import { HandlerRegistry } from "./HandlerRegistry";
/**
 * 事件调度器
 */
export declare class DefaultDispatcher implements Dispatcher {
    private handlerRegistry;
    private noHandlerChannelHandler;
    constructor(handlerRegistry: HandlerRegistry);
    dispatch(): void;
    getNoHandlerChannelHandler(): ChannelHandler;
    setNoHandlerChannelHandler(handler: ChannelHandler): void;
}
