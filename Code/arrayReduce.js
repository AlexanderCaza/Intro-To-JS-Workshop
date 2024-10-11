
const numbers = [1, 2, 3, 4, 5];

const total = numbers.reduce((accumulator, currentValue) => {  
  return accumulator + currentValue;
});

console.log(total); // Prints 15



const multiply = function(num1, num2) {
    return num1 * num2;
}

// 2 is the second argument
const total2 = numbers.reduce(multiply, 2);

console.log(total2); // Prints 240




