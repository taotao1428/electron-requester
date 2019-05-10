import {HandlerRegistry} from "./HandlerRegistry";
import {ChannelHandler} from "./ChannelHandler";

export abstract class DefaultHandlerRegistry implements HandlerRegistry {
    private handlers = new Map<string, ChannelHandler>();

    getHandler(channel: string): ChannelHandler {
        return this.handlers.get(channel);
    }

    register(channel: string, handler: ChannelHandler): this {
        this.handlers.set(channel, handler);
        return this;
    }
}
