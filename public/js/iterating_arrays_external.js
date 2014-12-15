// Iterating Through Arrays in JavaScript

var names = ['War', 'Famine', 'Pestilence', 'Death'];

console.log('There are ' + names.length + ' riders of the Apocalypse:');


// Iterating with For Loop:

for (var i = 0; i < names.length; i++) {
	console.log('(FOR) Rider ' + i + ' is ' + names[i]);
}


// Iterating with For Each Loop:

names.forEach(function (value, key, array) {
	console.log('(FOR EACH) The rider at index ' + key + ' is: ' + value);
});


// Check it out, we made a function to pass as a parameter in our For Each loop! This
// is a user-defined function, not a built on one; loopArray is an arbitrary name!

function loopArray(value, key, array) {
	console.log('(LOOP ARRAY) The horseman at index ' + key + ' is ' + value);
}

// Here we call forEach and pass array 'names' as a parameter:

names.forEach(loopArray);

// Iterating with For In Loop: 

for (index in names) {
	console.log('(FOR IN) The rider associated with key of: ' + index + ' is: ' + names[index]);
}


// Iterating Without Loops:

console.log('(LOOPLESS) Rider one is '   + names[0]);
console.log('(LOOPLESS) Rider two is '   + names[1]);
console.log('(LOOPLESS) Rider three is ' + names[2]);
console.log('(LOOPLESS) Rider four is '  + names[3]);