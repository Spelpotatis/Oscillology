function buyNeutralWave() {
    if (game.number.gte(game.neutralCost)){
        game.number = game.number.sub(game.neutralCost)
        game.neutralWaves = game.neutralWaves.add(1)
        game.neutralCost = game.neutralCost.mul(game.neutralScaling)
    }
}