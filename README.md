# electron-requester
用于electron中ipcRenderer与ipcMain通信。electron提供的api是事件的发送与监听，但是这种模式在开发的过程中并不方便。所以我将这些接口封装成服务端与客户端的形式，ipcRenderer为客户端，ipcMain作为服务端。

# 安装
```
npm install electron-requester
```

# 接口介绍

## 1. Requester
提供给ipcRenderer使用，用于请求ipcMain。有一个实现类`DefaultRequester`

```typescript
export interface Requester {
  /**
   * 发送请求
   * @param channel             通道。注意这不会ipcRenderer.send(channel, listener)中的通道，仅是一个参数
   * @param params              参数
   * @param handler             处理最后结果的handler
   * @param progressiveHandler  处理过程通知的handler
   */
  request(channel: string,
          params: {[key: string]: any},
          handler: EndHandler,
          progressiveHandler?: ProgressiveHandler);
}
```


## 2. Dispatcher
提供给ipcMain使用，用于监听ipcRenderer发送的请求。有一个实现类`DefaultDispatcher`

```typescript
/**
 * 事件调度器
 */
export interface Dispatcher {
    dispatch(): void;
}
```

## 3. HandlerRegistry
用于注册处理器，有一个实现类`DefaultHandlerRegistry`
```typescript
/**
 * handler注册器
 */
export interface HandlerRegistry {
    /**
     * 注册handler
     * @param channel 事件
     * @param handler 处理器
     */
    register(channel: string, handler: ChannelHandler): this;

    /**
     * 获得handler
     */
    getHandler(channel: string): ChannelHandler;
}
```
## 4. ChannelHandler
用于处理请求，有一个实现类`EchoChannelHandler`
```typescript
/**
 * 处理事件
 */
export interface ChannelHandler {
  /**
   * 处理事件
   * @param responser
   * @param param
   */
  handle(responser: Responser, param: {[key: string]: any});
}
```

# 使用

## 1. ipcRenderer中使用
```typescript
import {DefaultRequester, Result} from "electron-requester";
import {ipcRenderer} from 'electron';

const requester = new DefaultRequester(ipcRenderer); // 构建一个Requester对象

// 发送请求
requester.request('echo', {info: 'hello'}, (result: Result) => {
    console.log(result);
});
```

## 2. ipcMain中使用
```typescript
import {
    DefaultDispatcher,
    DefaultHandlerRegistry,
    EchoChannelHandler
} from "electron-requester";

const handlerRegistry = new DefaultHandlerRegistry();
handlerRegistry.register('echo', new EchoChannelHandler()); // 注册监听的channel

const dispatcher = new DefaultDispatcher(handlerRegistry); // 监听channel
dispatcher.dispatch();
```
