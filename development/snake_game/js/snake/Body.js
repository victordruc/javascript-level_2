class Body {
    constructor(x = 0, y = 0, dir) {

        switch (dir) {
            case "up":
                this.position = "-128px -64px"
                this.x = x
                this.y = y + 1
                break

            case "down":
                this.position = "-128px -64px"
                this.x = x
                this.y = y - 1
                break

            case "left":
                this.position = "-64px 0"
                this.x = x + 1
                this.y = y
                break

            case "right":
                this.position = "-64px 0"
                this.x = x - 1
                this.y = y
                break

            default:
                this.position = "-128px -64px";
                this.x = x
                this.y = y + 1
        }
    }

    render() {
        return `
        <div
            style="
            width: 64px;
            height: 64px;
            background: url(images/snake.png);
            background-position: ${this.position};
            position: absolute;
            top: ${this.y*64}px;
            left: ${this.x*64}px;
            "
        ></div>
        `
    }
}