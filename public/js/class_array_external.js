// Classroom Array Exercise

// Desired output:

// My classroom is epic and the students are:
// Nicole
// Calvin
// This is me... yay
// That is my neighbor don't mess with them
// rest of list

var classroom = [
'Nicole',
'Calvin',
'Felice',
'David',
'Kevin',
'Michael',
'Stephanie (Beyonce)',
'Paul',
'Chris',
'Jeff',
'Marissa',
'Travis'
];


myName = 'Nicole';
myNeighbor = 'Calvin';

console.log('My class is epic and the students are:')

classroom.forEach(function (value, key, array) {
	if (value == 'Nicole') {
		console.log('This is me, Nicole
			');
	} else if (value == 'Calvin') {
		console.log('This is my neighbor Calvin, he kind of rocks');
	}
	else {
	console.log(value);
	}
});


