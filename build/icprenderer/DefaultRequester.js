"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Result_1 = require("../common/Result");
const Dispatcher_1 = require("../ipcmain/Dispatcher");
const EventUtil_1 = require("../common/util/EventUtil");
class DefaultRequester {
    constructor(ipc) {
        this.ipc = ipc;
    }
    request(channel, params, handler, progressiveHandler) {
        const token = EventUtil_1.generateToken();
        this.ipc.send(Dispatcher_1.DISPATCHER_CHANNEL, channel, token, params); // 发送请求
        this.getListener().listen(channel, token, this.wrapEndHandler(handler, channel, token), progressiveHandler); // 监听结果
    }
    wrapEndHandler(handler, channel, token) {
        return (result) => {
            this.getListener().remove(channel, token);
            handler(Result_1.Result.restore(result));
        };
    }
    getListener() {
        if (!this.listener) {
            this.listener = new InnerListener(this.ipc);
        }
        return this.listener;
    }
    setListener(listener) {
        this.listener = listener;
    }
}
exports.DefaultRequester = DefaultRequester;
class InnerListener {
    constructor(ipc) {
        this.ipc = ipc;
    }
    listen(channel, token, endHandler, progressiveHandler) {
        this.ipc.once(EventUtil_1.respChannel(channel, token), (event, result) => endHandler(Result_1.Result.restore(result)));
        if (progressiveHandler) {
            this.ipc.on(EventUtil_1.progressiveRespChannel(channel, token), (event, data) => progressiveHandler(data));
        }
    }
    remove(channel, token) {
        this.ipc.removeAllListeners(EventUtil_1.respChannel(channel, token));
        this.ipc.removeAllListeners(EventUtil_1.progressiveRespChannel(channel, token));
    }
}
//# sourceMappingURL=DefaultRequester.js.map