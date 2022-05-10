import { MyComponent } from "./MyComponent";

export abstract class Message extends MyComponent {
    protected messsageStyle = `
        width:100px; 
        heigth:25px; 
        padding: 10px; 
        border:2px; 
        border-radius:8px; 
        font-size:10px; 
        margin-top:5px;
    `

    constructor(style: string, content: string, isMine = false) {
        super([], style, content)
        if (isMine) {
            this.style = this.style + 'align-self:end;'
        }
    }
}

