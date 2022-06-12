import { IMessage } from "../store/messageFactory";
import { CachedMessageApi } from '../store/messagesApi';

export class Store {
    private static instance: Store | undefined;
    public messages: IMessage[] = []; // null-object pattern
    private _onChange: Function = () => {}; // null-object pattern
    public savedMessages: IMessage[] = [];
    private api: CachedMessageApi = new CachedMessageApi();
    public isChat = this.observe({
        value: true,
    });

    set onChange(value: Function) {
        this._onChange = value;
    }

    private constructor() {
        this.load();
        this.loadSavedMessages();
    }

    public static getInstance(): Store {
        if (!this.instance) {
            this.instance = new Store();
        }
        return this.instance;
    }

    public observe <T extends Object> (targetValue: T): T {
        const self = this;

        return new Proxy(targetValue, {
            set: function(target, property, value: IMessage, receiver) {
                // @ts-ignore: Unreachable code error
                target[property] = value;
                self._onChange();

                return true;
              }
        })
    }

    public async load(): Promise<void> {
        let rawMessages = await this.api.getMessages();
        rawMessages = rawMessages.map(message => this.observe(message));
        this.messages = this.observe(rawMessages);

        this._onChange();
    }

    public async loadSavedMessages(): Promise<void> {
        let rawMessages = await this.api.getSavedMessages();
        rawMessages = rawMessages.map(message => this.observe(message));
        this.savedMessages = this.observe(rawMessages);

        this._onChange();
    }
}
