function successCallback(result) {
    console.log('success callback!');
}

function failureCallback(error) {
    console.error('failure callback!');
}

const createdAudioFile = new Promise(function (resolve, reject) {
    console.log('resolved!');
    resolve('resolve aregument!');
});

createdAudioFile.then(successCallback, failureCallback);


// const handleResolvedA = console.log('resolved A');
// const handleResolvedB = console.log('resolved B');
// const handleResolvedC = console.log('resolved C');

// const handleRejectedA = console.log('rejected A');
// const handleRejectedB = console.log('rejected B');
// const handleRejectedC = console.log('rejected C');

// const handleRejectedAny = console.log('rejected any');

/* const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo ');
    }, 10000);
});
 */
/* myPromise
    .then(handleResolvedA, handleRejectedA)
    .then(handleResolvedB, handleRejectedB)
    .then(handleResolvedC, handleRejectedC); */

// myPromise
// .then(handleResolvedA)
// .then(handleResolvedB)
// .then(handleResolvedC)
// .catch(handleRejectedAny);
/* myPromise
    .then(value => {
        return value + 'and bar ';
    })
    .then(value => {
        return value + 'and bar again ';
    })
    .then(value => {
        return value + 'and again ';
    })
    .then(value => {
        return value + 'and again';
    })
    .then(value => {
        console.log(value)
    })
    .catch(err => {
        console.error(err);
    }); */