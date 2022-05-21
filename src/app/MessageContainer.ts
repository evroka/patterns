import { IMessage } from "../store/messageFactory";
import { MessageApi } from "../store/messagesApi";
import { Message } from "./Message";
import { MyComponent } from "./MyComponent";
import { IMessageApi } from "../store/messagesApi";

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
    `; 

    private messageApi: IMessageApi;
    private messageFactory: (message: IMessage) => Message;

    constructor(messages: Message[], style: string, messageApi: IMessageApi, messageFactory: (message: IMessage) => Message) {
        super(messages, style, '')
        this.messageApi = messageApi;
        this.messageFactory = messageFactory
    }

    renderSelf(): HTMLElement {
        const elem = document.createElement('div');
        elem.style.cssText = this.baseStyle + this.style;
        
        const rawMessages = this.messageApi.getMessages();
        this.children = rawMessages.map(message => this.messageFactory(message))

        return elem;
    }
}