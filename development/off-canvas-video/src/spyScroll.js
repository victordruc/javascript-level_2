function spyScroll(rootSection, rootCanvas = ".offcanvas", rootPlayerCanvas = "my-player") {

  let section = document.querySelectorAll(rootSection) //all section of video
  let sections = [] //array for push the height and id of section
  let videoPlay = [] //array for push the instance of video and add event
  let playVideo = null //show the id of the video play in the section
  let videoPlayNow = null //show the id of the video play in the canvas
  const myOffcanvas = document.querySelector(rootCanvas) //root of canvas
  const bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas) //instance of canvas bootstrap
  const playerCanvas = videojs(rootPlayerCanvas) //instance of player for canvas video

  // push in the array instance of video player and offsetTop for sections--->
  Array.prototype.forEach.call(section, function (e, i) {
    sections.push([`my-video${e.dataset.id}`, e.offsetTop])
    videoPlay.push(videojs(`my-video${i+1}`))
  })
  // <---push in the array instance of video player and offsetTop for sections

  // add event for play and ended video------->
  videoPlay.forEach(video => {
    video.on("play", e => {
      playVideo = e.target.id
      bsOffcanvas.hide()
      playerCanvas.pause()
    })
    video.on("ended", () => {
      playVideo = null
    })
  })
  // <--------add event for play and ended video

  // reverse array of sections and transform in object-->
  section = sections.reverse()
  let objSection = Object.fromEntries(section)
  // <--reverse array of sections and transform in object

  // pause the player of canvas after the close manual------->
  myOffcanvas.addEventListener('hidden.bs.offcanvas', () => {
    playerCanvas.pause()
  })
  // <-------pause the player of canvas after the close manual

  // scroll spy---->
  window.onscroll = () => {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    for (let key in objSection) {
      if (objSection[key] <= scrollPosition + 350) {
        // check position of scroll----->
        if (key !== playVideo && playVideo) {
          // console.log(key, playVideo)
          // check play status----->
          if (videoPlayNow !== playVideo && !videojs(playVideo).paused()) {
            videoPlayNow = playVideo
            videojs(playVideo).pause()
            playerCanvas.src({
              type: 'video/mp4',
              src: videojs(playVideo).src()
            })
            playerCanvas.ready(() => {
              playerCanvas.currentTime(videojs(playVideo).currentTime())
            })
            
            playerCanvas.play()
            bsOffcanvas.show()
          }
          break

        } else if (key == playVideo && playVideo) {
          // console.log(key, playVideo)
          if (videoPlayNow == playVideo) {
            videojs(playVideo).ready(() => {
              videoPlayNow = null
            })
            videojs(playVideo).currentTime(playerCanvas.currentTime())
            videojs(playVideo).play()
            bsOffcanvas.hide()
            playerCanvas.pause()
          }
          break
        }
        // <-----check play status
      }
      // <--------check position of scroll
    }
  }
  // <---scroll spy
}