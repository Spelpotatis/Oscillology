function buyNeutralWave() { //This script triggers when you buy a neutral wave
    if (game.number.gte(game.neutralCost)){ //Checks if you have enough peaks to buy a neutral wave
        game.number = game.number.sub(game.neutralCost) // Reduces your peak amount based on the neutral wave cost
        game.neutralWaves = game.neutralWaves.add(1) // Adds one neutral wave
        game.neutralCost = game.neutralCost.mul(game.neutralScaling)//Updates your neutral wave cost
    }
}

