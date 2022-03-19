const animals = [{
        species: 'Lion',
        name: 'King'
    },
    {
        species: 'Whale',
        name: 'Mobydik'
    }
];

for (let i = 0; i < animals.length; i++) {
    (function (i) {
        this.print = function () {
            console.log('#' + i + ' ' + this.species + ': ' + this.name);
        };
        this.print();
    }).call(animals[i], i)
}