import { IMessage } from "../store/messageFactory";
import { Message } from "./Message";
import { MyComponent } from "./MyComponent";
import { IMessageApi } from "../store/messagesApi";
import { Store } from "./Store";

export class MessageContainer extends MyComponent {
    private baseStyle = `
        width:350px;
        height:500px;
        border:1px solid grey; 
        border-radius:8px; 
        background-image: url("https://i.pinimg.com/originals/51/ed/c0/51edc046eb80046ee4755ee71d0f19ca.jpg"); 
        background-size:cover;
        display: flex;
        flex-direction: column;
        justify-content: end;
        position: relative;
    `; 

    private messageApi: IMessageApi;
    private messageFactory: (
        message: IMessage,
        onQuote: (value: string) => void,
        onSave: (message: IMessage) => void,
        onDelete: (message: IMessage) => void,
        ) => Message;
    private store: Store = Store.getInstance();
    private onQuote: (value: string) => void = () => {};

    constructor(
            messages: Message[], 
            style: string, 
            messageApi: IMessageApi, 
            messageFactory: (
                message: IMessage, 
                onQuote: (value: string) => void, 
                onSave: (message: IMessage) => void, 
                onDelete: (message: IMessage) => void
                ) => Message,
            onQuote: (value: string) => void = () => {},
        ) {
        super(messages, style, '')
        this.messageApi = messageApi;
        this.messageFactory = messageFactory;
        this.onQuote = onQuote;
    }

    renderSelf(): HTMLElement {
        const elem = document.createElement('div');
        elem.style.cssText = this.baseStyle + this.style;

        const header = document.createElement('div');
        const headerTitle = document.createElement('span');

        header.style.cssText = `
            position: absolute;
            top:0;
            background-color: darkslategrey;
            width: 100%;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
        `

        headerTitle.style.cssText = 'color: white; font-weight: 800;'

        headerTitle.textContent = this.store.isChat.value ? 'Chat' : 'Saved Messages';
        const self = this
        header.onclick = function() {
            self.store.isChat.value = !self.store.isChat.value;
        }

        header.appendChild(headerTitle);
        elem.appendChild(header);
        
        const rawMessages = self.store.isChat.value ? this.store.messages : this.store.savedMessages;
        this.children = rawMessages
            .filter(({ isDeleted }) => !isDeleted)
            .map(message => this.messageFactory(message, this.onQuote, this.onSave.bind(this), this.onDelete.bind(this)))

        return elem;
    }

    public onSave(message: IMessage): void {
        this.store.savedMessages.push(this.store.observe({...message}));
    }

    public onDelete(message: IMessage): void {
        message.isDeleted = true;
    }
}