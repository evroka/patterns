import { MyComponent } from "./MyComponent";
import { Store } from "./Store";

export class MessageInput extends MyComponent {
    public text: string = ''

    constructor(children: MyComponent[] = [], style: string = '', content: string = '') {
        super(children, style, content)
    }
        
    protected renderSelf(): HTMLElement {
        const elem = document.createElement('div');
        const input = document.createElement('textarea');
        const btn = document.createElement('button');

        elem.style.cssText = 'display: flex;'
        input.style.cssText = 'width:70%;'
        btn.style.cssText = 'width:30%;'
        
        btn.textContent = 'Send';

        btn.onclick = function() {
             Store.getInstance().messages.push({
                 id: Date.now().toString(), 
                 type: "text", 
                 content: input.value, 
                 isMine: true,
            });
         }

        elem.appendChild(input);
        elem.appendChild(btn);

        return elem;
    }

}