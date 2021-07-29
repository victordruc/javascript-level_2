class Player {
    constructor(id,poster,src) {
        this.id = id
        this.poster = poster
        this.src = src
    }

    render() {
        let html = `
        <section class="sectionVideo" data-id="${this.id}">
            <video id="my-video${this.id}" class="video-js" controls preload="auto" width="640" height="264"
                poster="${this.poster}" data-setup="{}">
                <source src="${this.src}" />
                <p class="vjs-no-js">
                    To view this video please enable JavaScript, and consider upgrading to a
                    web browser that
                    <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                </p>
            </video>
        </section>
        `
        return html
    }
}