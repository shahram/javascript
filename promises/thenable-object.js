async function f2() {
    var thenable = {
        then: function (resolve, _reject) {
            resolve('resolved');
        }
    };
    console.log(await thenable);
}

f2();