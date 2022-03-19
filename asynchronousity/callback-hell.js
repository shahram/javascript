function f1(x, c) {
    const r = x + 1;
    c(r);
};

function f2(x, c) {
    const r = x + 2;
    c(r);
};

function f3(x, c) {
    const r = x + 3;
    c(r);
};

function f4(x, c) {
    const r = x + 4;
    c(r);
};

function f5(x, c) {
    const r = x + 5;
    c(r);
};

// Pyramid of Doom ;-)

function f() {
    f1(5, r1 => {
        f2(r1, r2 => {
            f3(r2, r3 => {
                f4(r3, r4 => {
                    f5(r4, r5 => {
                        console.log(`r: ${r5}`);
                    });
                });
            });
        });
    });
}

f();