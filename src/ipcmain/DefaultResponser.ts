import {Responser} from './Responser';
import {Event} from 'electron';
import {progressiveRespChannel, respChannel} from '../common/util/EventUtil';
import {Result} from '../common/Result';

export class DefaultResponser implements Responser {
  private event: Event;
  protected channel: string;
  protected token: string;
  public constructor(event: Event, channel: string, token: string) {
    this.event = event;
    this.channel = channel;
    this.token = token;
  }

  progressiveSend(data: any) {
    this.event.sender.send(progressiveRespChannel(this.channel, this.token), data);
  }

  send(result: Result) {
    this.event.sender.send(respChannel(this.channel, this.token), result);
  }
}
