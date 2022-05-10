import { Message } from "./Message";
import { MyComponent } from "./MyComponent";

export class MessageContainer extends MyComponent {
    private baseStyle = `
        width:180px;
        height:240px;
        border:1px solid grey; 
        border-radius:8px; 
        background-image: url("https://i.pinimg.com/originals/51/ed/c0/51edc046eb80046ee4755ee71d0f19ca.jpg"); 
        background-size:cover;
        display: flex;
        flex-direction: column;
        justify-content: end;
    `
    constructor(messages: Message[], style: string) {
        super(messages, style, '')

    }

    render(): HTMLElement {
        const elem = document.createElement('div');

        elem.style.cssText = this.baseStyle + this.style;

        this.children.forEach(child => {
            elem.appendChild(child.render())
        });

        return elem;
    }
}