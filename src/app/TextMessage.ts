import { Message } from "./Message";

export class TextMessage extends Message {
    private textMessageStyle = 'background-color: lime;'

    renderSelf(): HTMLElement {
        const elem = document.createElement('div');
        const btn = document.createElement('button');
        btn.textContent = 'q';
        btn.style.cssText = 'margin-left: 10px;'

        const self = this;

        btn.onclick = function() {
            self.onQuote(self.content)
        }

        elem.innerText = this.content;
        elem.style.cssText = this.messsageStyle + this.textMessageStyle + this.style;

        elem.appendChild(btn);

        return elem;
    }
}