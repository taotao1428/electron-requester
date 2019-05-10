import { Requester } from "./Requester";
import IpcRenderer = Electron.IpcRenderer;
import { EndHandler, Listener, ProgressiveHandler } from "./Listener";
export declare class DefaultRequester implements Requester {
    private ipc;
    private listener;
    constructor(ipc: IpcRenderer);
    request(channel: string, params: {
        [p: string]: any;
    }, handler: EndHandler, progressiveHandler?: ProgressiveHandler): void;
    private wrapEndHandler;
    getListener(): Listener;
    setListener(listener: Listener): void;
}
