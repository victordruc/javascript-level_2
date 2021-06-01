class Snake {
    constructor(x, y, dir = "up") {
        this.children = []
        this.children.push(new Head(x, y, dir))
        this.children.push(new Body(x, y + 1, dir))
        this.children.push(new Tail(x, y + 2, dir))
    }

    move() {
        this.children.reverse()

        this.children.forEach((s, i) => {

            if (i == this.children.length - 1) {
                if (s.dir == "up" && s.y > 0) {
                    s.y--
                    if (this.children[i - 2].dir != "up" && this.children[i - 2].dir != "up-turn-left" && this.children[i - 2].dir != "up-turn-right") {
                        if (this.children[0].dir == "right") {
                            this.children[i - 1].dir = "up-turn-right"
                        } else {
                            this.children[i - 1].dir = "up-turn-left"
                        }
                    }
                }
                if (s.dir == "right" && s.x < 9) {
                    s.x++
                    if (this.children[i - 2].dir != "right" && this.children[i - 2].dir != "right-turn-down" && this.children[i - 2].dir != "right-turn-up") {
                        if (this.children[0].dir == "down") {
                            this.children[i - 1].dir = "right-turn-down"
                        } else {
                            this.children[i - 1].dir = "right-turn-up"
                        }
                    }
                }
                if (s.dir == "down" && s.y < 9) {
                    s.y++
                    if (this.children[i - 2].dir != "down" && this.children[i - 2].dir != "down-turn-left" && this.children[i - 2].dir != "down-turn-right") {
                        if (this.children[0].dir == "right") {
                            this.children[i - 1].dir = "down-turn-right"
                        } else {
                            this.children[i - 1].dir = "down-turn-left"
                        }
                    }
                }
                if (s.dir == "left" && s.x > 0) {
                    s.x--
                    if (this.children[i - 2].dir != "left" && this.children[i - 2].dir != "left-turn-down" && this.children[i - 2].dir != "left-turn-up") {
                        if (this.children[0].dir == "down") {
                            this.children[i - 1].dir = "left-turn-down"
                        } else {
                            this.children[i - 1].dir = "left-turn-up"
                        }
                    }
                }


                if (s.y <= 0 && s.x >= 0 && s.x <= 9) {
                    s.dir = "left"
                }
                if (s.y >= 9) {
                    s.dir = "right"
                }
                if (s.x <= 0 && s.y >= 0 && s.y < 9) {
                    s.dir = "down"
                }
                if (s.x >= 9 && s.y > 0) {
                    s.dir = "up"
                }
            } else {
                s.x = this.children[i + 1].x
                s.y = this.children[i + 1].y
                s.dir = this.children[i + 1].dir
            }

        })

        this.children.reverse()
    }

    
    render() {
        let html = ``
        for (let i = 0; i < this.children.length; i++) {
            html += this.children[i].render()
        }
        return html
    }
}