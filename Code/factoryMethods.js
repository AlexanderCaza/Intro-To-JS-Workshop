
const cakeProductFactory = (type, price, containsNuts) => {
    return {
        type: type,
        price: price,
        containsNuts: containsNuts,
        displayPrice() {
            console.log(`The ${this.type} cake costs $${this.price}.`);
        }
    };
}

let chocolateCake = cakeProductFactory('chocolate', 10, false);

// Prints 'The chocolate cake costs $10.
console.log(chocolateCake.displayPrice());




