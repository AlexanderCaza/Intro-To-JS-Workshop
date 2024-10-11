
const nums = [1, 2, 4, 5, 7, 6, 5];
let times5 = nums.map(num => num * 5);
console.log(times5);
// Prints [5, 10, 20, 25, 35, 30, 25]



function addExclaim(string) {
    return string + '!';
}

let phrases = ['No way', 'Yes', 'Maybe'];
let exclamations = phrases.map(addExclaim);
console.log(exclamations);
// Prints ['No way!', 'Yes!', 'Maybe!']





