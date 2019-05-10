"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DefaultResponser_1 = require("./DefaultResponser");
const Dispatcher_1 = require("./Dispatcher");
const Result_1 = require("../common/Result");
const electron_1 = require("electron");
/**
 * 事件调度器
 */
class DefaultDispatcher {
    constructor(handlerRegistry) {
        this.handlerRegistry = handlerRegistry;
    }
    dispatch() {
        electron_1.ipcMain.on(Dispatcher_1.DISPATCHER_CHANNEL, (event, channel, token, params) => {
            let handler = this.handlerRegistry.getHandler(channel);
            if (!handler) {
                handler = this.getNoHandlerChannelHandler();
            }
            handler.handle(new DefaultResponser_1.DefaultResponser(event, channel, token), params);
        });
    }
    getNoHandlerChannelHandler() {
        if (!this.noHandlerChannelHandler) {
            this.noHandlerChannelHandler = new InnerNoHandlerChannelHandler();
        }
        return this.noHandlerChannelHandler;
    }
    setNoHandlerChannelHandler(handler) {
        this.noHandlerChannelHandler = handler;
    }
}
exports.DefaultDispatcher = DefaultDispatcher;
class InnerNoHandlerChannelHandler {
    handle(responser, param) {
        responser.send(Result_1.Result.noHandler());
    }
}
//# sourceMappingURL=DefaultDispatcher.js.map