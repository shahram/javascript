var p1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 3000, "one");
});


var p2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 1000, "two");
});

Promise.race([p1, p2]).then(function (value) {
    console.log(value);
})