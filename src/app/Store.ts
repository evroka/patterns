import { IMessage } from "../store/messageFactory";
import { CachedMessageApi } from '../store/messagesApi';
import { reRender } from '../index';

export class Store {
    private static instance: Store | undefined;
    public messages: IMessage[] = []; // null-object pattern
    private _onChange: Function = () => {}; // null-object pattern

    private constructor() {
        this.load();
    }

    public static getInstance(): Store {
        if (!this.instance) {
            this.instance = new Store();
        }
        return this.instance;
    }

    public async load(): Promise<void> {
        const api = new CachedMessageApi();
        this.messages = await api.getMessages();

        reRender();
    }
}
