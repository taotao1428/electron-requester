import {ChannelHandler} from "../ChannelHandler";
import {Responser} from "../Responser";
import {Result} from "../../common/Result";

/**
 * 返回前端发送过来的数据
 */
export class EchoChannelHandler implements ChannelHandler {
    handle(responser: Responser, param: { [p: string]: any }) {
        responser.send(Result.ok(param));
    }
}
