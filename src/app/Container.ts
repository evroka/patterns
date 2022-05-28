import { API_TYPE } from "../config";
import { messageFactory } from "../store/messageFactory";
import { IMessageApi, messageApiFactory } from "../store/messagesApi";
import { MessageContainer } from "./MessageContainer";
import { MessageInput } from "./MessageInput";
import { MyComponent } from "./MyComponent";

export class Container extends MyComponent {
    private containerStyle = 'width: 350px;'
    public text = '';
    private messageInput?: MessageInput;

    constructor(children: MyComponent[] = [], style: string = '', content: string = '') {
        super(children, style, content, )
    }

    protected renderSelf(): HTMLElement {
        const elem = document.createElement('div');
        elem.style.cssText = this.containerStyle + this.style;

        const messageApi: IMessageApi = messageApiFactory(API_TYPE)
        const messageContainer = new MessageContainer([], '', messageApi, messageFactory, this.onQuote.bind(this))
        this.messageInput = new MessageInput();

        elem.appendChild(messageContainer.render());
        elem.appendChild(this.messageInput?.render());

        return elem;
    }

    private onQuote(value: string): void {
        this.messageInput?.pasteQuote(value);
    }
}