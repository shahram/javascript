var myGradesCalculate = (function () {

    // Keep this variable private inside this closure scopt
    var myGrades = [93, 95, 88, 0, 55, 91];

    var average = function () {
        var total = myGrades.reduce(function (accumulator, item) {
            return accumulator + item;
        });

        return 'Your average grade is ' + total / myGrades.length + '.';
    }

    var failing = function () {
        var failingGrades = myGrades.filter(function (item) {
            return item < 70;
        });

        return 'You failed ' + failingGrades.length + ' times';
    };

    // Explicitly reveal public pointers to the private functions 
    // that we want to reveal publicly

    return {
        average: average,
        failing: failing
    }
})();

exports.myGradesCalculate = myGradesCalculate;

// The functions are exposed and can be called from index.js