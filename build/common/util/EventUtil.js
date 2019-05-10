"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let tokenId = 0;
/**
 * 生成token
 */
function generateToken() {
    return 'token_' + tokenId++;
}
exports.generateToken = generateToken;
/**
 * 通过channel与token生成过程通知事件
 */
function progressiveRespChannel(channel, token) {
    return channel + '_' + token + '_progressive';
}
exports.progressiveRespChannel = progressiveRespChannel;
/**
 * 通过channel与token生成结事件
 */
function respChannel(channel, token) {
    return channel + '_' + token + '_resp';
}
exports.respChannel = respChannel;
