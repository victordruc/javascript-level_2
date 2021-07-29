class DataServices {
    async getVideo() {
        let players = []
        await fetch('src/video.json')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                data.forEach(element => {
                    let player = new Player(element.id, element.poster, element.srcMP4)
                    players.push(player)
                })  
            })
            return players
    }
}