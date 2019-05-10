import {Responser} from './Responser';

/**
 * 处理事件
 */
export interface ChannelHandler {
  handle(responser: Responser, param: {[key: string]: any});
}
