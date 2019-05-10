import { Responser } from './Responser';
/**
 * 处理事件
 */
export interface ChannelHandler {
    /**
     * 处理事件
     * @param responser
     * @param param
     */
    handle(responser: Responser, param: {
        [key: string]: any;
    }): any;
}
