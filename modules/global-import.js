var globalVariable = [1, 2, 3, 4];

(function (globalVariable) {

    // Keep this variables private inside this closure scope

    var privateFunction = function () {
        console.log('Shhhh, this is private!');
    }

    // Expose the below methods via the globalVariable interface while
    // hiding the implementation of the method within the 
    // function() block

    globalVariable.each = function (collection, iterator) {
        if (Array.isArray(collection)) {
            for (var i = 0; i < collection.length; i++) {
                iterator(collection[i], i, collection);
            }
        } else {
            for (var key in collection) {
                iterator(collection[key], key, collection);
            }
        }
    };

    globalVariable.filter = function (collection, test) {
        var filtered = [];
        globalVariable.each(collection, function (item) {
            if (test(item)) {
                filtered.push(item);
            }
        });
        return filtered;
    };

    globalVariable.map = function (collection, iterator) {
        var mapped = [];
        globalVariable.each(collection, function (value, key, collection) {
            mapped.push(iterator(value));
        });
        return mapped;
    };

    globalVariable.reduce = function (collection, iterator, accumulator) {
        var stringValueMissing = accumulator === undefined;
        globalVariable.each(collection, function (item) {
            if (stringValueMissing) {
                accumulator = item;
                stringValueMissing = false;
            } else {
                accumulator = iterator(accumulator, item);
            }
        });
        return accumulator;
    };

}(globalVariable))

// How to use?
console.log(globalVariable.map);
console.log([1, 2, 3].accumulator);