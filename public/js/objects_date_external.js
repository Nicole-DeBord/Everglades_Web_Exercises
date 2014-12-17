// Date Objects in JavaScript

// Create an array of months for printing dates without Moment.js.

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Create the date corresponding to your birthday using the JavaScript Date object.

var jsBirthday = new Date(1988, 4, 19);

console.log(jsBirthday);

// Log your birthday in the format: January 1, 2014 using the JavaScript Date object.
// See link below for methods needed:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#Getter

console.log('Here is my birthday using vanilla js: ' + months[jsBirthday.getMonth()] + ' ' + jsBirthday.getDate() + ', ' + jsBirthday.getFullYear());

// Create the date corresponding to your birthday using Moment.js.

var momentBirthday = moment(jsBirthday);

// Log your birthday in the format: January 1, 2014 using Moment.js.
console.log('Here is my birthday using Moment.js: ' + momentBirthday.format('MMMM D, YYYY'));