var myGradesCalculate = (function () {

	// Keep this variable private inside this closure scope
	var myGrades = [93, 95, 88, 0, 55, 91];

	// Expose these functions via an interface while hiding
	// the implementation of the module within the function() block

	return {
		average: function () {
			var total = myGrades.reduce(function (accumulator, item) {
				return accumulator + item;
			}, 0);

			return 'Your average is ' + total / myGrades.lengh + '.';
		},

		failing: function () {
			var failingGrades = myGrades.filter(function (item) {
				return item < 70;
			});

			return 'You have failed ' + failingGrades.lengh + ' times.';
		}
	}
})();

exports.myGradesCalculate = myGradesCalculate;