import { MyComponent } from "./MyComponent";
import { IMessage } from "../store/messageFactory";
import { Button } from "./Button";
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
    protected onSave: (message: IMessage) => void = () => {}; 
    protected onDelete: (message: IMessage) => void;
    protected message: IMessage;

    constructor(
        style: string,
        content: string,
        isMine = false,
        onQuote: (value: string) => void,
        onSave: (message: IMessage) => void,
        onDelete: (message: IMessage) => void,
        message: IMessage,
        isDeleted = false, 
        ) {
        const saveBtn = new Button([], '', 'Save', () => onSave(message))
        const deleteBtn = new Button([], '', 'x', () => onDelete(message))
        
        super([saveBtn, deleteBtn], style, content)
        if (isMine) {
            this.style = this.style + 'align-self:end;'
        }

        this.onQuote = onQuote;
        this.onSave = onSave;
        this.message = message;
        this.onDelete = onDelete
    }
}

