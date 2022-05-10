export abstract class MyComponent {
    protected children: MyComponent[];
    protected style: string;
    protected content: string;

    protected constructor(children: MyComponent[], style: string, content: string) {
        this.children = children;
        this.style = style;
        this.content = content;
    }

    abstract render(): HTMLElement
}

export default {}