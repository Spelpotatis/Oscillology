function buyNeutralWave() {
    if (game.number.gte(game.neutralCost)){
        game.number.sub(game.neutralCost)
        game.neutralWaves.add(1)
        game.neutralCost.mul(game.neutralScaling)
    }
}