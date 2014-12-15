// Scope, Hoisting, and Immediately Invoked Function Expressions

// Refactor the code using an IFFE so that there are not variables or 
// function in the global scope.

(function () {
	var myNameIs = 'Nicole';
	return console.log(myNameIs + ' says hi.');
})();


(function () {
	var num = Math.floor((Math.random()*100)+1);
	var parity = (num % 2 == 0) ? num + ' is even!' : num + ' is odd!';
	return console.log(parity);
})();


