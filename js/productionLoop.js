function productionLoop(diff){
    game.speed = game.neutralWaves
    game.number = add(game.speed / game.wavelength * (diff * 1000), game.number)
}