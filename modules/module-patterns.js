// Anonymous Closures
//-------------------
(function () {
    // ... all vars and functions are in this scope only
    // still maintains access to all globals.
}());

// Global Import
//--------------
(function ($, JUPITER) {
    // now have access to globals jQuery (as $) and JUPITER in this code.
}(jQuery, JUPITER));

// Module Export
//--------------
var MODULE = (function () {
    var my = {},
        privateVariable = 1;

    function privateMethod() {
        // ...
    }
    my.moduleProperty = 1;
    my.moduleFunction = function () {
        // ...
    };

    return my;
}());

// Augmentation
//-------------
var MODULE = (function (my) {
    my.anotherMethod = function () {
        // added method
    };

    return my;
}(MODULE));

// Loose Augmentation
//-------------------
var MODULE = (function (my) {
    // add functionality!
    return my;
}(MODULE || {}));

// Tight Augmentation
//-------------------

var MODULE = (function (my) {
    var old_moduleMethod = my.moduleMethod;

    my.moduleMethod = function () {
        // method override, has access to old through old_moduleMethod.
    }
    return my;
}(MODULE));

// Cloning and Inheritance
//------------------------
var MODULE_TWO = (function (old) {
    var my = {};
    var key;
    for (key in old) {
        if (old.hasOwnProperty(key)) {
            my[key] = old[key];
        }
    }
    var super_moduleMethod = old.moduleMethod;
    my.moduleMethod = function () {
        // override method on the clone, access to super through super_moduleMethod
    };
    return my;
}(MODULE))