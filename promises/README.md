## A promise represents the eventual reuslt of an asynchronuous operation.

1. Treminology

1.1 "promise" is an object or function with a "then" method
1.2 "then" is an object or funtion which defines a "then" method.
1.3 "value" is any legal JavaScript value (including undefined, thenable, or a promise)
1.4 "exception" is a value that is thrown using a throw statement
1.5 "reason" is a value that indicates why a promise was rejected.

2. Promise States

2.1 pending
2.2 fulfilled
2.3 rejected

3. Promse Methods

3.1 Promise.all([promise1, promise2, ...]);
3.2 Promise.race([proise1, promise2, ...]);
3.3 Promise.resolve(result)
3.4 Promise.reject(result)
3.5 Promise.catch(onRejection)
3.6 Promise.then(onFulfillment, onRejection)

4. Executer Function

4.1 Excution functions are parameter for Promise constructor which
----holds "resolve" and "reject" callbacks.
4.2 It is executed immediately by the Promise implementation which
----provids "resolve and "reject" callbacks.
4.3 It's triggered before Promise constructor even returns the created
----object.
4.4 The "resolve" and "reject" functions are bound to promise to fulfill
----or reject.
4.5 It's expected to initiate some asynchromous work and then, once that
----completes, call either the resolve or reject.
