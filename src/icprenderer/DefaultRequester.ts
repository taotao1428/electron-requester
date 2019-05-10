import {Requester} from "./Requester";
import {Result} from "../common/Result";
import IpcRenderer = Electron.IpcRenderer;
import {EndHandler, Listener, ProgressiveHandler} from "./Listener";
import {DISPATCHER_CHANNEL} from "../ipcmain/Dispatcher";
import {generateToken, progressiveRespChannel, respChannel} from "../common/util/EventUtil";


export class DefaultRequester implements Requester {
    private ipc: IpcRenderer;
    private listener: Listener;
    public constructor(ipc: IpcRenderer) {
        this.ipc = ipc;
    }

    public request(channel: string,
            params: { [p: string]: any },
            handler: EndHandler,
            progressiveHandler?: ProgressiveHandler) {
        const token = generateToken();
        this.ipc.send(DISPATCHER_CHANNEL, channel, token, params); // 发送请求
        this.getListener().listen(channel, token, this.wrapEndHandler(handler, channel, token), progressiveHandler); // 监听结果
    }

    private wrapEndHandler(handler: EndHandler, channel: string, token: string): EndHandler {
        return (result: Result) => {
            this.getListener().remove(channel, token);
            handler(Result.restore(result));
        }
    }

    public getListener(): Listener {
        if (!this.listener) {
            this.listener = new InnerListener(this.ipc);
        }
        return this.listener;
    }

    public setListener(listener: Listener) {
        this.listener = listener;
    }
}

class InnerListener implements Listener {
    private ipc: IpcRenderer;
    public constructor (ipc: IpcRenderer) {
        this.ipc = ipc;
    }

    listen(channel: string, token: string, endHandler: EndHandler, progressiveHandler: ProgressiveHandler) {
        this.ipc.once(respChannel(channel, token),
            (event: Event, result: Result) => endHandler(Result.restore(result)));
        if (progressiveHandler) {
            this.ipc.on(progressiveRespChannel(channel, token),
                (event: Event, data: any) => progressiveHandler(data));
        }
    }

    remove(channel: string, token: string) {
        this.ipc.removeAllListeners(respChannel(channel, token));
        this.ipc.removeAllListeners(progressiveRespChannel(channel, token));
    }
}
