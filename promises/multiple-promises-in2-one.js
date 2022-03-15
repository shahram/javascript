// const isAFunction = function () {};

var promiseCall = function (waitSeconds, returnData) {
	return function (resolve, reject) {
		setTimeout(resolve, waitSeconds, returnData);
	}
}

var p1 = new Promise(promiseCall(1000, "one"));
var p2 = new Promise(promiseCall(2000, "two"));
var p3 = new Promise(promiseCall(3000, "three"));
var p4 = new Promise(promiseCall(4000, "four"));
var p5 = new Promise(function (resolve, reject) {
	reject("5th Promise rejected!");
});

Promise.all([p1, p2, p3, p4]).then(
	function (value) {
		console.log(value);
	},
	function (reason) {
		console.log(reason);
	}
);

Promise.all(p1, p2, p3, p4, p5).then(
	function (value) {
		console.log(value);
	},
	function (reason) {
		console.log(reason);
	}
)