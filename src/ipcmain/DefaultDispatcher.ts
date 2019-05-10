import {DefaultResponser} from "./DefaultResponser";
import {Event} from 'electron';
import {ChannelHandler} from "./ChannelHandler";
import {Dispatcher, DISPATCHER_CHANNEL} from "./Dispatcher";
import {Responser} from "./Responser";
import {Result} from "../common/Result";
import {HandlerRegistry} from "./HandlerRegistry";
import {ipcMain} from 'electron';

/**
 * 事件调度器
 */
export class DefaultDispatcher implements Dispatcher {
    private handlerRegistry: HandlerRegistry;
    private noHandlerChannelHandler: ChannelHandler; // 如果没有找到handler时使用的handler
    public constructor(handlerRegistry: HandlerRegistry) {
        this.handlerRegistry = handlerRegistry;
    }

    public dispatch(): void {
        ipcMain.on(DISPATCHER_CHANNEL,
            (event: Event, channel: string, token: string, params: {[key: string]: any}) => {
            let handler = this.handlerRegistry.getHandler(channel);
            if (!handler) {
                handler = this.getNoHandlerChannelHandler();
            }
            handler.handle(new DefaultResponser(event, channel, token), params);
        })
    }

    public getNoHandlerChannelHandler(): ChannelHandler {
        if (!this.noHandlerChannelHandler) {
            this.noHandlerChannelHandler = new InnerNoHandlerChannelHandler();
        }
        return this.noHandlerChannelHandler;
    }

    public setNoHandlerChannelHandler(handler: ChannelHandler) {
        this.noHandlerChannelHandler = handler;
    }
}

class InnerNoHandlerChannelHandler implements ChannelHandler {
    handle(responser: Responser, param: { [p: string]: any }) {
        responser.send(Result.noHandler());
    }
}
