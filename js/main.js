var lastUpdate = Date.now();

//Setting up the main vue
var game = new Vue({
    el: '#game',
    data: {
        number: new ExpantaNum(1), //main currency
        speed: new ExpantaNum(0), //how fast the wave moves
        wavelength: new ExpantaNum(1), //how long between each peak
        neutralWaves: new ExpantaNum(0), //amount of neutral waves
        neutralCost: new ExpantaNum(1), //how much the next neutral wave costs
        neutralScaling: new ExpantaNum(2), //how much neutralCost multiplies each neutral wave
    }
})

function gameLoop(){
    diff = Date.now - lastUpdate;
    productionLoop(diff);
    lastUpdate = Date.now();
}

setInterval(gameLoop, 50)