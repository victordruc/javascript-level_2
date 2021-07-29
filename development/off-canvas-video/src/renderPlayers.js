function renderPlayers(rootID, players) {
    let root = document.getElementById(rootID)
    root.innerHTML = ``
    players.forEach(player => root.innerHTML +=player.render())
}