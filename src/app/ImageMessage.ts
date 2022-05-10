import { Message } from "./Message";

export class ImageMessage extends Message {
    private imageMessageStyle = 'background-color: yellow;'

    render(): HTMLElement {
        const elem = document.createElement('div');
        const newImg = document.createElement('img');

        newImg.style.cssText = 'width: 50%; height:80%;'

        newImg.src = this.content;

        elem.appendChild(newImg);

        elem.style.cssText = this.messsageStyle + this.imageMessageStyle + this.style;

        this.children.forEach(child => {
            elem.appendChild(child.render())
        });

        return elem;
    }
}