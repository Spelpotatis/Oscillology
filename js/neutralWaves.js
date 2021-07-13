function buyNeutralWave() {
    if (game.number >= game.neutralCost){
        game.number -= game.neutralCost
        game.neutralWaves++
        game.neutralCost *= game.neutralScaling
    }
}