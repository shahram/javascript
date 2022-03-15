var onFulfillment = function (data) {
    console.log('Success: ', data);
}

var onRejection = function (error) {
    console.error('Catch', error);
}

var invalidPromise1 = Promise.all(undefined);
var invalidPromise2 = Promise.all();
var invalidPromise3 = Promise.all({});
var invalidPromise4 = Promise.all(99);
var invalidPromise5 = Promise.all(true);
var invalidPromise6 = Promise.all(false);

invalidPromise1.then(onFulfillment).catch(onRejection);
invalidPromise1.then(onFulfillment, onRejection);

invalidPromise2.then(onFulfillment).catch(onRejection);
invalidPromise3.then(onFulfillment).catch(onRejection);
invalidPromise4.then(onFulfillment).catch(onRejection);
invalidPromise5.then(onFulfillment).catch(onRejection);
invalidPromise6.then(onFulfillment).catch(onRejection);

var invalidPromise7 = Promise.all('test');
var invalidPromise8 = Promise.all('');
var invalidPromise9 = Promise.all([]);

invalidPromise7.then(onFulfillment).catch(onRejection);
invalidPromise8.then(onFulfillment).catch(onRejection);
invalidPromise9.then(onFulfillment).catch(onRejection);