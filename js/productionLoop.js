function productionLoop(diff){
    game.speed = game.neutralWaves
    game.number = game.number.add(game.speed.div(game.wavelength).mul(diff / 1000))
}