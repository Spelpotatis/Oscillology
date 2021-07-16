var lastUpdate = Date.now(); //Setting up the last update variable, so it doesn't have a null value when we calculate diff.

function upgrade(cost, level, costScaling, description) { // Making the class for upgrades
    this.cost = cost,
    this.level = level //How many time you've bought it
    this.costScaling = costScaling //What the cost multiplies by when you buy the upgrade
    this.description = description //the text that shows up inside the upgrade
}

//Setting up the main vue
var game = new Vue({
    el: '#game',
    data: {
        number: new ExpantaNum(1), //main currency
        speed: new ExpantaNum(0), //how fast the wave moves
        wavelength: new ExpantaNum(1), //how long between each peak
        neutralWaves: new ExpantaNum(1), //main currency
        neutralCost: new ExpantaNum(1), //how much the next neutral wave costs
        neutralScaling: new ExpantaNum(2), //how much neutralCost multiplies each neutral wave
        nu11: new upgrade(5, 0, 1.5, "Multiply neutral wave efficiency by 1.5"),
        nu12: new upgrade(5, 0, 1.5, "Multiply neutral wave efficiency by 1.5"),
        nu21: new upgrade(5, 0, 1.5, "Multiply neutral wave efficiency by 1.5"),
        nu22: new upgrade(5, 0, 1.5, "Multiply neutral wave efficiency by 1.5"),
    }
})

function gameLoop(){ //This is repeated every "tick". Here we trigger everything we want to happen over time.
    diff = Date.now() - lastUpdate; //Calculating the time in milliseconds since last tick
    productionLoop(diff); //The main loop that calculates what all of your resources will be next tick
    lastUpdate = Date.now(); //Updating the lastUpdate so that we can calculate diff accurately
}

setInterval(gameLoop, 50) //Activating gameLoop every 50 milliseconds