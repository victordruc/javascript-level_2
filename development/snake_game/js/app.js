let map = new Map()
let apple = new Apple(1,3)
let snake = new Snake(5,4, "down")

let coin = new Coin (4,8)
let heart = new Heart (4,6)
let mouse = new Mouse (4,2)

map.children.push(apple)
map.children.push(snake)
map.children.push(coin)
map.children.push(heart)
map.children.push(mouse)

map.render(container)

// HW3: add coin, heart ... ------- ok
// HW4: add direction Snake ...