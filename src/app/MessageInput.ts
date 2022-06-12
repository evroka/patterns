import { MyComponent } from "./MyComponent";
import { Store } from "./Store";

export class MessageInput extends MyComponent {
    public text: string = '';
    private input: HTMLTextAreaElement = document.createElement('textarea');

    constructor(children: MyComponent[] = [], style: string = '', content: string = '') {
        super(children, style, content)
    }
        
    protected renderSelf(): HTMLElement {
        const elem = document.createElement('div');
        this.input = document.createElement('textarea');
        const btn = document.createElement('button');

        elem.style.cssText = 'display: flex;'
        this.input.style.cssText = 'width:70%;'
        btn.style.cssText = 'width:30%;'
        
        btn.textContent = 'Send';

        const self = this;
        btn.onclick = function() {
             Store.getInstance().messages.push({
                 id: Date.now().toString(), 
                 type: "text", 
                 content: self.input.value, 
                 isMine: true,
                 isDeleted: false,
            });
         }

        elem.appendChild(this.input);
        elem.appendChild(btn);

        return elem;
    }

    public pasteQuote(value: string): void {
        console.log('value = ', value)
        this.input.value = value;
    }
}