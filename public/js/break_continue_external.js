// Break and Continue, JavaScript Style. Well, Break anyway. 

// The example below is my real-world answer to this problem - it utilizes break, but not continue.

do {

	var random = Math.floor((Math.random()*50)+1);
	if (random % 2 !== 0) {

		console.log('Random odd number to skip is: ' + random);
		break;
	}

} while (random % 2 == 0);


for (var i = 1; i < 50; i += 2) {

	if (random == i) {

		console.log('Yikes! Skipping number ' + random);

	} else {

		console.log(i);
	}

}


// The example below is my purposeful attempt to use both break and continue in order to solve this problem. 
// I am essentially making my for loop function much like a do/while loop using break and continue. Notice that,
// in my first for loop, I declared, delimited, and incremented a variable I did not use in order to satisfy
// for's syntactical parameters. Also notice that this solution is long and annoying and unnecessary. 

// for (var i = 1; i < 50; i += 2) {

// 	var random = Math.floor((Math.random()*50)+1);

// 	if (random % 2 == 0) {

// 		continue;

// 	} else {

// 		console.log('Random odd number to skip is: ' + random);

// 		break;

// 	}
// }


// for (var i = 1; i < 50; i += 2) {

// 	if (random == i) {

// 		console.log('Yikes! Skipping number ' + random);

// 	} else {

// 		console.log(i);
// 	}

// }


// Aaaaand here is my real-world answer using a Ternary operator, because why not? (=

// do {

// 	var random = Math.floor((Math.random()*50)+1);
// 	if (random % 2 !== 0) {

// 		console.log('Random odd number to skip is: ' + random);
// 		break;
// 	}

// } while (random % 2 == 0);


// for (var i = 1; i < 50; i += 2) {

// 	var message = (i == random) ? 'Yikes, skipping number ' + i : i;
// 	console.log(message);

// }