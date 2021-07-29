let data = new DataServices()

data.getVideo().then((players)=> {
        renderPlayers("root", players)
        spyScroll(".sectionVideo", ".offcanvas", "my-player")
})