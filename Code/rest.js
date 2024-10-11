
function product(a, b, ...rest) {
    let total = a * b;
    for (let num of rest) {
        total *= num;
    }
    return total;
}

console.log(product(2, 3)); // Prints 6

console.log(product(2, 3, 4, 5, 6));
// Prints 720



