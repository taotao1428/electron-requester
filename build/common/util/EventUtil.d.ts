/**
 * 生成token
 */
export declare function generateToken(): string;
/**
 * 通过channel与token生成过程通知事件
 */
export declare function progressiveRespChannel(channel: string, token: string): string;
/**
 * 通过channel与token生成结事件
 */
export declare function respChannel(channel: string, token: string): string;
