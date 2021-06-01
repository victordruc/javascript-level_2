let map = new Map()
let apple = new Apple(1,3)
let snake = new Snake(5,4)

let coin = new Coin (4,8)
let heart = new Heart (4,6)
let mouse = new Mouse (4,2)

map.children.push(apple)
map.children.push(snake)
map.children.push(coin)
map.children.push(heart)
map.children.push(mouse)

map.render(container)

setInterval(()=>{
    snake.move()
    map.render(container)
},1000)

const userAction = (e) => {
    switch(e.code) {
        case "ArrowUp": snake.children[0].dir = "up"; break
        case "ArrowRight": snake.children[0].dir = "right"; break
        case "ArrowDown": snake.children[0].dir = "down"; break
        case "ArrowLeft": snake.children[0].dir = "left"; break
    }
}

// HW1: boundaries

// HW2: fix direction