export abstract class MyComponent {
    protected children: MyComponent[];
    protected style: string;
    protected content: string;
    protected elem: HTMLElement =  document.createElement('div');

    protected constructor(children: MyComponent[], style: string, content: string) {
        this.children = children;
        this.style = style;
        this.content = content;
    }

    public render(): HTMLElement {
        this.elem = this.renderSelf();
        this.renderChildren();

        return this.elem;
    };

    private renderChildren(): void {
        this.children.forEach(child => {
            this.elem.appendChild(child.render())
        });
    };

    protected abstract renderSelf(): HTMLElement;
}

export default {}