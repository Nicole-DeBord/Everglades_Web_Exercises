// If/Else Statements, JavaScript Style

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

// todo, change this to your favorite color from the list

var favorite = 'indigo'; 

// todo: Create a block of if/else statements to check for every color except indigo and violet.

// todo: When a color is encountered log a message that tells the color, and an object of that color.
//       Example: Blue is the color of the sky.

// todo: Have a final else that will catch indigo and violet.

// todo: In the else, log: I do not know anything by that color.

if (color == 'red') {
	console.log('Red is the color of garnet.');
} else if (color == 'orange') {
	console.log('Orange is the color of citrine.');
} else if  (color == 'yellow') {
	console.log('Yellow is the color of scapolite.');
} else if (color == 'green') {
	console.log('Green is the color of malachite.');
} else if (color == 'blue') {
	console.log('Blue is the color of amazonite.');
} else {
	console.log('I can think of gemstones this color, but I\'m not going to tell you. Sorry to be like that. Embrace the mystery.');
}

// todo: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.

(color == favorite) ? console.log('Hey, you found it - ' + color + ' is my favorite color!') : console.log('I think ' + color + ' is just okay.');


