(function () {

    var myGrades = [93, 95, 88, 0, 55, 91];

    var average = function () {
        var total = myGrades.reduce(function (aggregate, item) {
            return aggregate + item;
        }, 0);
        return 'Your average grades is ' + total / myGrades.length + '.';
    };

    var failing = function () {
        var failingGrades = myGrades.filter(function (item) {
            return item < 70;
        });
        return 'You faild ' + failingGrades.length + '.';
    }

    console.log(average());
    console.log(failing());

}())