class Apple {

    constructor(x=0,y=0) {
        this.x = x
        this.y = y
    }

    render() {
        return `
        <div
            style="
            width: 64px;
            height: 64px;
            background: url(images/snake.png);
            background-position: 0 -192px;
            position: absolute;
            top: ${this.y*64}px;
            left: ${this.x*64}px;
            "
        ></div>
        `
    }
}