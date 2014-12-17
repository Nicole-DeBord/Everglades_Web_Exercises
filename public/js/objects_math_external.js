// Math Objects in JavaScript

var circle = {
    radius: 3,
    getArea: function () {
        // Area = pi * radius^2
        return Math.PI * Math.pow(this.radius, 2);
    },
    logInfo: function (round) {
        var area = this.getArea();
        // If round is true, round the result to the nearest integer:
        area = round ? Math.round(area) : this.getArea();
        console.log('Area of a circle with radius: ' + this.radius + ', is: ' + area);
    }
};

circle.getArea();

// Log info about the circle:
circle.logInfo(false);
circle.logInfo(true);


// Change the radius of the circle to 5:
circle.radius = 5;

// Log info about the circle:
circle.logInfo(false);
circle.logInfo(true);