// Splitting and Joining Arrays in JavaScript

// Create an array holding the names of the planets of our solar system (in order, starting closest to the sun).

var planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

// function for logging the planets array

function logPlanets() {
    console.log('Here is the list of planets:');
    console.log(planets);
}

var planetsAsString = planets.join('|');

console.log(planetsAsString);

var planetsAsArray = planetsAsString.split('|');

console.log(planetsAsArray);