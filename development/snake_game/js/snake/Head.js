class Head {
    constructor(x = 0, y = 0, dir) {
        this.x = x
        this.y = y

        switch (dir) {
            case "up":
                this.position = "-192px 0"
                break

            case "down":
                this.position = "-256px -64px"
                break

            case "left":
                this.position = "-192px -64px"
                break

            case "right":
                this.position = "-256px 0"
                break

            default:
                this.position = "-192px 0"
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