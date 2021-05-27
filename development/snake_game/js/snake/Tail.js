class Tail {
    constructor(x = 0, y = 0, dir) {

        switch (dir) {
            case "up":
                this.position = "-192px -128px"
                this.x = x
                this.y = y + 2
                break

            case "down":
                this.position = "-256px -192px"
                this.x = x
                this.y = y - 2
                break

            case "left":
                this.position = "-192px -192px"
                this.x = x + 2
                this.y = y
                break

            case "right":
                this.position = "-256px -128px"
                this.x = x - 2
                this.y = y
                break
            
            default:
                this.position = "-192px -128px"
                this.x = x
                this.y = y + 2
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