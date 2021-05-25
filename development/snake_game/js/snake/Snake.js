class Snake {
    constructor() {
        this.head = new Head()
        this.body = new Body()
        this.tail = new Tail()
    }

    render() {
        this.head.render()
        this.body.render()
        this.tail.render()
    }
}