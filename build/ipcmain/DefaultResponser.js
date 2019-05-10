"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventUtil_1 = require("../common/util/EventUtil");
class DefaultResponser {
    constructor(event, channel, token) {
        this.event = event;
        this.channel = channel;
        this.token = token;
    }
    progressiveSend(data) {
        this.event.sender.send(EventUtil_1.progressiveRespChannel(this.channel, this.token), data);
    }
    send(result) {
        this.event.sender.send(EventUtil_1.respChannel(this.channel, this.token), result);
    }
}
exports.DefaultResponser = DefaultResponser;
//# sourceMappingURL=DefaultResponser.js.map