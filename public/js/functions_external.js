// Functions, JavaScript Style

// Part A:
// Create a function called 'sayHello' that takes a parameter 'name'.
// When called, the function should log a message that says hello from 
// the passed in name.

var myNameIs = 'Nicole';

function sayHello(fname) {
	var myName = console.log(fname + ' says hi.');
	return myName;
}

//Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.

sayHello(myNameIs);


// Part B:
// Create a function called 'isOdd' that takes a number as a parameter.
// The function should use the ternary operator to log a message.
// The log should tell the number passed in and whether it is odd or not.

var random = Math.floor((Math.random()*100)+1);

function isOdd(num) {
	var parity = (num % 2 == 0) ? num + ' is even!' : num + ' is odd!';
	return parity;
}

// Call the function 'isOdd' passing the variable 'random' as a parameter.

console.log(isOdd(random));