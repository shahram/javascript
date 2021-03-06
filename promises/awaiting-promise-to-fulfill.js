function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 3000);
    });
}

async function f1() {
    var x = await resolveAfter2Seconds(10);
    console.log(x);
}

f1();