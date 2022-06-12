import { IMessage } from "../store/messageFactory";
import { MyComponent } from "./MyComponent";

export class Button extends MyComponent {
    protected onClick = () => {};

    constructor(children: MyComponent[] = [], style: string = '', content: string = '', onClick: () => void) {
        super(children, style, content)
        this.onClick = onClick;
    }

    renderSelf(): HTMLElement {
        const btn = document.createElement('button');
        btn.textContent = this.content;
        btn.style.cssText = 'margin-left:5px;';

     
        btn.onclick = this.onClick;

        return btn;

    }
}