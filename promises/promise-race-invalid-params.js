var onFulfillment = function (data) {
    console.log('Success ', data);
}

var onRejection = function (error) {
    console.error('Catch ', error);
}

var invalidPromise1 = Promise.race(undefined);
var invalidPromise2 = Promise.race();
var invalidPromise3 = Promise.race({});
var invalidPromise4 = Promise.race(99);
var invalidPromise5 = Promise.race(true);
var invalidPromise6 = Promise.race(false);

invalidPromise1.then(onFulfillment).catch(onRejection);
invalidPromise2.then(onFulfillment).catch(onRejection);
invalidPromise3.then(onFulfillment).catch(onRejection);
invalidPromise4.then(onFulfillment).catch(onRejection);
invalidPromise5.then(onFulfillment).catch(onRejection);
invalidPromise6.then(onFulfillment).catch(onRejection);

var invalidPromise7 = Promise.race('test');
var invalidPromise8 = Promise.race('');
var invalidPromise9 = Promise.race([]);

invalidPromise7.then(onFulfillment).catch(onRejection);
invalidPromise8.then(onFulfillment).catch(onRejection);
invalidPromise9.then(onFulfillment).catch(onRejection);