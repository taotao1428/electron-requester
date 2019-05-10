import {Result} from '../common/Result';

/**
 * 向ipcRenderer发送响应
 */
export interface Responser {
  /**
   * 发送最后的处理结果，代表整个请求结束
   * 只能发送一次
   * @param result 结果
   */
  send(result: Result);

  /**
   * 发送过程数据，用于告诉ipcRenderer事件处理的进展
   * 可以发送多次
   * @param data 数据
   */
  progressiveSend(data: any);
}
