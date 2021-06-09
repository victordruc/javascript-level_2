class Drop {
    constructor(top, left) {
        this.top = top
        this.left = left
        this.id = "r-" + parseInt(Math.random()*100000000)
    }

    render() {
        let surface = document.getElementById("water-surface")

        surface.innerHTML += `
            <div id="${this.id}" class="ripple" style="top=${this.top}%; left=${this.left}%">
                <div class="displace"></div>
                <div class="light"></div>
            </div>
        `

        this.sound()

        setTimeout(()=>{
            let this_ripple = document.getElementById(this.id)
            this_ripple.className = "" 
        },9500)
    }

    sound() {
        this.audio = new Audio("audio/Big-Water-Bloop-C1-www.fesliyanstudios.com.mp3")
        this.audio.play()
    }

}