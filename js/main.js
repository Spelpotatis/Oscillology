var lastUpdate = Date.now(); //Setting up the last update variable, so it doesn't have a null value when we calculate diff.

const upgrade = { // Making the class for upgrades
    cost: 0, //It's current cost
    level: 0, //How many time you've bought it
    costScaling: 0, //What the cost multiplies by when you buy the upgrade
    description: "null" //the text that shows up inside the upgrade
}

//Setting up the main vue
var game = new Vue({
    el: '#game',
    data: {
        number: new ExpantaNum(1), //main currency
        speed: new ExpantaNum(0), //how fast the wave moves
        wavelength: new ExpantaNum(1), //how long between each peak
    }
})



function gameLoop(){ //This is repeated every "tick". Here we trigger everything we want to happen over time.
    diff = Date.now() - lastUpdate; //Calculating the time in milliseconds since last tick
    productionLoop(diff); //The main loop that calculates what all of your resources will be next tick
    lastUpdate = Date.now(); //Updating the lastUpdate so that we can calculate diff accurately
}

setInterval(gameLoop, 50) //Activating gameLoop every 50 milliseconds