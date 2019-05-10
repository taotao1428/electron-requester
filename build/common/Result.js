"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Result {
    constructor(code, msg, data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }
    isOk() {
        return this.code == Result.SUCCESS_CODE;
    }
    isDestroyed() {
        return this.code == Result.DESTROYED_CODE;
    }
    isNoHandler() {
        return this.code == Result.NO_HANDLER_CODE;
    }
    static ok(data) {
        return new Result(Result.SUCCESS_CODE, '成功', data);
    }
    static fail(msg) {
        return new Result(Result.ERROR_CODE, msg, undefined);
    }
    static noHandler() {
        return new Result(Result.NO_HANDLER_CODE, '没有handler', undefined);
    }
    /**
     * ipcRenderer被关闭了
     */
    static destroyed() {
        return new Result(this.DESTROYED_CODE, 'ipcRenderer被关闭', undefined);
    }
    /**
     * 由于前后端在通信时，仅会将数据序列化再反序列化，所以接收的数据并不是Result
     * 通过该方法可以重新将数据转为Result对象
     */
    static restore(result) {
        return new Result(result.code, result.msg, result.data);
    }
}
Result.SUCCESS_CODE = 2000;
Result.ERROR_CODE = 5000;
Result.DESTROYED_CODE = 5001;
Result.NO_HANDLER_CODE = 5002;
exports.Result = Result;
