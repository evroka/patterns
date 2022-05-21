import { MyComponent } from "./MyComponent";

export class Container extends MyComponent {
    private containerStyle = 'width: 350px;'

    constructor(children: MyComponent[] = [], style: string = '', content: string = '') {
        super(children, style, content)
    }

    protected renderSelf(): HTMLElement {
        const elem = document.createElement('div');
        elem.style.cssText = this.containerStyle + this.style;

        return elem;
    }
    
}