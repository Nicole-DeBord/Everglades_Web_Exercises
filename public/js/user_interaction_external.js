// User Input, JavaScript Style
 
// Ask the user for their name; keeping asking if no input is given.

do {

var userName = prompt('Hey buddy. Let\'s be friends. What\'s your name?');

} while (userName == '' || userName == ' ' || userName == null);

// Show an alert message that welcomes the user based on their input.

alert('Hiya ' + userName + '! Since we\'re getting friendly and all, I\'ve got this burning question...');

// Ask the user if they like pizza.

var pizza = confirm('Do you like pizza?');

// Based on their answer show a creative alert message.

var likesPizza = (pizza == true) ? alert
('Me too bro! Pizza\'s the manna of enlightened beings.') : 
alert('That\'s cool bro, I respect your choices. Maybe you\'ll meet the right pizza someday.');