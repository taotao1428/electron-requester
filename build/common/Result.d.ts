export declare class Result {
    static readonly SUCCESS_CODE = 2000;
    static readonly ERROR_CODE = 5000;
    static readonly DESTROYED_CODE = 5001;
    static readonly NO_HANDLER_CODE = 5002;
    code: number;
    msg: string;
    data: any;
    constructor(code: number, msg: string, data: any);
    isOk(): boolean;
    isDestroyed(): boolean;
    isNoHandler(): boolean;
    static ok(data: any): Result;
    static fail(msg: string): Result;
    static noHandler(): Result;
    /**
     * ipcRenderer被关闭了
     */
    static destroyed(): Result;
    /**
     * 由于前后端在通信时，仅会将数据序列化再反序列化，所以接收的数据并不是Result
     * 通过该方法可以重新将数据转为Result对象
     */
    static restore(result: {
        [key: string]: any;
    }): Result;
}
