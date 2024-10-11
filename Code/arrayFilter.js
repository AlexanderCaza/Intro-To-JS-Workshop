
const myNums = [1, 12, 5, 2, 8, 7, 6];

const isEven = function(num) {
    return num % 2 === 0;
} 

let evenNums = myNums.filter(isEven);

console.log(evenNums); // Prints [12, 2, 8, 6]






