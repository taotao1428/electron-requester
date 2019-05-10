"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Result_1 = require("../../common/Result");
/**
 * 返回前端发送过来的数据
 */
class EchoChannelHandler {
    handle(responser, param) {
        responser.send(Result_1.Result.ok(param));
    }
}
exports.EchoChannelHandler = EchoChannelHandler;
//# sourceMappingURL=EchoChannelHandler.js.map