//Switch Statements, JavaScript Style


var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

    // todo: create a case statement that will handle every color except indigo and violet
    // todo: when a color is encountered log a message that tells the color, and an object of that color
    //       example: Blue is the color of the sky.
	// todo: create a default case that will catch indigo and violet
    // todo: for the default case, log: I do not know anything by that color.

switch (color) {
	case "red":
		console.log('Red is the color of spinel.');
		break;
	case "orange":
		console.log('Orange is the color of spessartite.');
		break;
	case "yellow":
		console.log('Yellow is the color of sphene.');
		break:
	case "green":
		console.log('Green is the color of emerald.');
		break;
	case "blue":
		console.log('Blue is the color of tanzanite.');
		break;
	default:
		console.log('I can\'t think of any gemstones that color.');


}