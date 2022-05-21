import { CACHED_API, CACHED_API_2 } from "../constants"
import { IMessage } from "./messageFactory"

export interface IMessageApi {
    getMessages: () => Promise<IMessage[]>
}

export class MessageApi implements IMessageApi {
    private syncWait(ms: number): void {
        const end = Date.now() + ms
        while (Date.now() < end) continue
    }
   
    public async getMessages(): Promise<IMessage[]>  {
        await new Promise(r => setTimeout(r, 3000));

        return [
            {"id": "1", "type": "text", "content": "test text" + Date.now(), "isMine": true },
            {"id": "2", "type": "image", "content": "https://via.placeholder.com/100x80/ff006f/ffffff", "isMine": false },
            {"id": "3", "type": "audio", "content": "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3", "isMine": false },
        ]
    }
}

export class CachedMessageApi implements IMessageApi {
    private cache: IMessage[] | undefined;
    private messageApi = new MessageApi();

    public async getMessages(): Promise<IMessage[]> {
        if (!this.cache) {
            this.cache = await this.messageApi.getMessages();
        } 
        return this.cache;
    }
}

export class CachedMessageApiTwo extends MessageApi {
    private cache: IMessage[] | undefined;

    public async getMessages(): Promise<IMessage[]> {
        if (!this.cache) {
            this.cache = await super.getMessages();
        } 
        return this.cache;
    }
}

export function messageApiFactory(apiType: string = ''): IMessageApi {
    if (apiType === CACHED_API) {
        return new CachedMessageApi()
    }

    if (apiType === CACHED_API_2) {
        return new CachedMessageApiTwo()
    }

    return new MessageApi()
    
}