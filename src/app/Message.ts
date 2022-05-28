import { MyComponent } from "./MyComponent";

export abstract class Message extends MyComponent {
    protected messsageStyle = `
        width: 200px; 
        heigth: 40px; 
        padding: 10px; 
        border: 2px; 0
        border-radius: 8px; 
        font-size: 10px; 
        margin-top: 10px;
    `
    protected onQuote: (value: string) => void = () => {};

    constructor(style: string, content: string, isMine = false, onQuote: (value: string) => void) {
        super([], style, content)
        if (isMine) {
            this.style = this.style + 'align-self:end;'
        }

        this.onQuote = onQuote;
    }
}

