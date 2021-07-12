function buyNeutralWave() {
    if (game.number >= game.neutralCost){
        game.number -= game.neutralCost
        game.neutralWaves += 1
        game.neutralCost *= game.neutralScaling
    }
}