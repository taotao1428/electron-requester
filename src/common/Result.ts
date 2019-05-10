export class Result {
  public static readonly SUCCESS_CODE = 2000;
  public static readonly ERROR_CODE = 5000;
  public static readonly DESTROYED_CODE = 5001;
  public static readonly NO_HANDLER_CODE = 5002;

  public code: number;
  public msg: string;
  public data: any;

  public constructor(code: number, msg: string, data: any) {
    this.code = code;
    this.msg = msg;
    this.data = data;
  }

  public isOk(): boolean {
    return this.code == Result.SUCCESS_CODE;
  }

  public isDestroyed(): boolean {
    return this.code == Result.DESTROYED_CODE;
  }

  public isNoHandler(): boolean {
    return this.code == Result.NO_HANDLER_CODE;
  }

  public static ok(data: any): Result {
    return new Result(Result.SUCCESS_CODE, '成功', data);
  }

  public static fail(msg: string): Result {
    return new Result(Result.ERROR_CODE, msg, undefined);
  }

  public static noHandler(): Result {
    return new Result(Result.NO_HANDLER_CODE, '没有handler', undefined);
  }

  /**
   * ipcRenderer被关闭了
   */
  public static destroyed(): Result {
    return new Result(this.DESTROYED_CODE, 'ipcRenderer被关闭', undefined);
  }

    /**
     * 由于前后端在通信时，仅会将数据序列化再反序列化，所以接收的数据并不是Result
     * 通过该方法可以重新将数据转为Result对象
     */
  public static restore(result: {[key: string]: any}) {
      return new Result(result.code, result.msg, result.data);
  }

}
