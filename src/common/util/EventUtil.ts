let tokenId = 0;

/**
 * 生成token
 */
export function generateToken(): string {
  return 'token_' + tokenId++;
}

/**
 * 通过channel与token生成过程通知事件
 */
export function progressiveRespChannel(channel: string, token: string) {
  return channel + '_' + token + '_progressive';
}

/**
 * 通过channel与token生成结事件
 */
export function respChannel(channel: string, token: string) {
  return channel + '_' + token + '_resp';
}
