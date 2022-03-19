function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.call(this, price, name);
    this.category = 'food';
}

console.log(new Food('cheese', 5).price);