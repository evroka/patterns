import { Message } from "./Message";

export class TextMessage extends Message {
    private textMessageStyle = 'background-color: green;'

    renderSelf(): HTMLElement {
        const elem = document.createElement('div');
        elem.innerText = this.content;
        elem.style.cssText = this.messsageStyle + this.textMessageStyle + this.style;

        return elem;
    }
}