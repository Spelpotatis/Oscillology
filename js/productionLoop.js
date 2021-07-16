function productionLoop(diff){ //Here we calculate all the production
    game.speed = game.neutralWaves
    game.number = game.number.add(game.speed.div(game.wavelength).mul(diff / 1000))
}