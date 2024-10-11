
// Arrays can contain different types
const myArray = [2, {name: 'Jinx', animal: 'cat'}, 'Hello There']

// Despite being declared const, this works
myArray[0] = 6;

console.log(myArray.length); // Prints 3

const x = myArray.push('Bobby');
console.log(x); // Prints 4

console.log(myArray.pop()); // Prints 'Bobby'

console.log(myArray.length); // Prints 3






