let volume = 50

// variabila "volume" are rolul de-a initia valoarea initiala a playerului care mai apoi prin incrementare si dicrementare ia sa fie schimbata

function render() {
    // let screen = document.getElementById('player').firstElementChild;
    // let slider = document.getElementById('player').children[1].children[1];

    // Varianta 1:
    // let screen = document.getElementsByTagName("input")[0]
    // let slider = document.getElementsByTagName("input")[1]

    // screen.value = volume
    // slider.value = volume

    // Varianta 2:
    let input = document.getElementsByTagName("input")

    for(let i = 0; i<input.length; i++) {
        input[i].value=volume
    }
}

function up() {
    volume++
    render()
}

function down() {
    volume--
    render()
}

function change() {
    // ???
}

render()