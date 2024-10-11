
const checkOddness = (num) => {
    return num % 2 == 0;
}
  
let validateOddness = (oddDetector, num) => {
    const isNumOdd = oddDetector(num);
    console.log(`The number ${num} is odd: ${isNumOdd}.`)
}
  
// checkOddness is the callback function
validateOddness(checkOddness, 4); 
// Prints: The number 4 is odd: false.


  