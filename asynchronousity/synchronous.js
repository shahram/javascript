function doStep1(result) {
    return result + 1;
}

function doStep2(result) {
    return result + 2;
}

function doStep3(result) {
    return result + 3;
}

function doOperation() {
    let result = 0;
    result = doStep1(result);
    result = doStep2(result);
    result = doStep3(result);
    console.log(`result: ${result}`);
}

doOperation();