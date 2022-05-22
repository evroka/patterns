import { IMessage } from "../store/messageFactory";
import { CachedMessageApi } from '../store/messagesApi';

export class Store {
    private static instance: Store | undefined;
    public messages: IMessage[] = []; // null-object pattern
    private _onChange: Function = () => {}; // null-object pattern

    set onChange(value: Function) {
        this._onChange = value;
    }

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
        const rawMessages = await api.getMessages();
        const self = this;
        this.messages = new Proxy(rawMessages, {
            set: function(target, property, value: IMessage, receiver) {
                // @ts-ignore: Unreachable code error
                target[property] = value;
                self._onChange();

                return true;
              }
        })

        this._onChange();
    }
}
