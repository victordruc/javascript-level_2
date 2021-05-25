class Body {
    render() {
        document.body.innerHTML += `
        <div
            style="
            width: 64px;
            height: 64px;
            background: url(images/snake.png);
            background-position: -128px -64px;
            "
        ></div>
        `
    }
}