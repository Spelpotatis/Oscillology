function buyNeutralWave() {
    if (game.number.gte(game.neutralCost)){
        game.number = game.number.sub(game.neutralCost)
        game.number = game.neutralWaves.add(1)
        game.number = game.neutralCost.mul(game.neutralScaling)
    }
}