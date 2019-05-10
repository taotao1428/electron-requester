import { ChannelHandler } from "../ChannelHandler";
import { Responser } from "../Responser";
/**
 * 返回前端发送过来的数据
 */
export declare class EchoChannelHandler implements ChannelHandler {
    handle(responser: Responser, param: {
        [p: string]: any;
    }): void;
}
