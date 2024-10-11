
function sum(a, b, c) {
    return a, b, c;
}

const nums = [4, 5, 6];
console.log(sum(...nums)); // Prints 6


const desiredDog = {breed: 'Golden Retriever', trained: true};

const newDog = {name: 'Benjamin', ...desiredDog};
console.log(newDog);
// Prints '{name: 'Benjamin', breed: 'Golden Retriever', trained: true}



