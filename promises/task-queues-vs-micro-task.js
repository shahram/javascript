const promise = new Promise(function (resolve, reject) {

    console.log('Promise callback');
    resolve('Resolving');

}).then(function (result) {
    console.log('Promise callback (.then)');
});

setTimeout(function () {

    console.log('event-loop cycle: Promise (fulfilled)', promise);
}, 0);

console.log('Promise (pending)', promise);