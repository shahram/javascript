"use strrict"

// To experiment with error handling, "threshhold" values cause
// errors randomly.

const THRESHOLD_A = 8; // cann use 0 to guarantee error

function tetheredGetNumber(resolve, reject) {
    try {
        setTimeout(
            function () {
                const randomInt = Date.now();
                const value = randomInt % 10;
                try {
                    if (value > THRESHOLD_A) {
                        throw new Error(`Too large: ${value}`);
                    }
                } catch (msg) {
                    reject(`Error in callback ${msg}`);
                }
                resolve(value);
                return;
            }, 500);
    } catch (err) {
        reject(`Error during setup: ${err}`);
    }
    return;
}

function determineParity(value) {
    const isOdd = value % 2 ? true : false;
    const parityInfo = {
        theNumber: value,
        isOdd: isOdd
    };
    return parityInfo;
}

function troubleWithGettingNumber(reason) {
    console.log(`Trouble getting a number: ${reason}`);
    throw -999; // must throw somthing to maintain error state down the chain
}

function promiseGetWord(parityInfo) {
    const tethredGetWord = function (resolve, reject) {
        const theNumber = parityInfo.theNumber;
        const threshold_B = THRESHOLD_A - 1;
        if (theNumber >= threshold_B) {
            reject(`Still too large: ${theNumber}`);
        } else {
            parityInfo.wordEvenOdd = parityInfo.isOdd ? 'odd' : 'even';
            resolve(parityInfo);
        }
        return;
    }
    return new Promise(tethredGetWord);
}

(new Promise(tetheredGetNumber))
.then(determineParity, troubleWithGettingNumber)
    .then(promiseGetWord)
    .then((info) => {
        console.log("Got: ", info.theNumber, " , ", info.wordEvenOdd);
        return info;
    })
    .catch((reason) => {
        if (reason === -999) {
            console.error("Had previously handled error.");
        } else {
            console.error(`Trouble with promiseGetWord() ${reason}`);
        }
    })
    .finally((info) => console.log("All done :-)"));