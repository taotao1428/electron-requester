import { Responser } from './Responser';
import { Event } from 'electron';
import { Result } from '../common/Result';
export declare class DefaultResponser implements Responser {
    private event;
    protected channel: string;
    protected token: string;
    constructor(event: Event, channel: string, token: string);
    progressiveSend(data: any): void;
    send(result: Result): void;
}
