class Body {
    constructor(x = 0, y = 0, dir) {
        this.x = x
        this.y = y
        this.dir = dir
    }

    render() {

        switch (this.dir) {
            case "up":
                this.position = "-128px -64px"
                break

            case "up-turn-right":
                this.position = "-128px -128px"
                break

            case "up-turn-left":
                this.position = "0 -64px"
                break

            case "down":
                this.position = "-128px -64px"
                break

            case "down-turn-right":
                this.position = "-128px 0"
                break

            case "down-turn-left":
                this.position = "0 0"
                break

            case "left":
                this.position = "-64px 0"
                break

            case "left-turn-down":
                this.position = "-128px 128px"
                break

            case "left-turn-up":
                this.position = "-128px 0"
                break

            case "right":
                this.position = "-64px 0"
                break

            case "right-turn-down":
                this.position = "0 -64px"
                break

            case "right-turn-up":
                this.position = "0 0"
                break

            default:
                this.position = "-128px -64px";
        }

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