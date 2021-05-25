class Tail {
    render() {
        document.body.innerHTML += `
        <div
            style="
            width: 64px;
            height: 64px;
            background: url(images/snake.png);
            background-position: -192px -128px;
            "
        ></div>
        `
    }
}