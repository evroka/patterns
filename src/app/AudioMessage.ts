import { Message } from "./Message";

export class AudioMessage extends Message {
    private audioMessageStyle = 'background-color: red;'

    renderSelf(): HTMLElement {
        const elem = document.createElement('div');
        const newAudio = document.createElement('audio');

        newAudio.src = this.content;
        newAudio.controls = true;
        newAudio.style.cssText = 'width: 100px; height: 30px;'

        elem.appendChild(newAudio);

        elem.style.cssText = this.messsageStyle + this.audioMessageStyle + this.style;
        return elem; 
    }
}