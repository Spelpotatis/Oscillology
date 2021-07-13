function productionLoop(diff){
    game.speed = game.neutralWaves
    game.number = ExpantaNum.add(game.speed.div(game.wavelength).mul(diff * 1000), game.number)
}