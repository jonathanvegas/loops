// 1
function countdown() {
    for (let i = 10; i >= 0; i--) {
        if (i === 0){
            return "BLAST OFFF"
        }
    }
}
console.log(countdown())

// 2
function evenNumbers(){
    for (let i = 0; i<= 100; i++){
        if (i % 2 === 0){
            console.log(i);
        }
    }
}
evenNumbers();

//3
const arrayNum = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;
function sumArray(arrayNum){
    for (i = 0; i < arrayNum.length; i++){
        sum = sum + arrayNum[i];
    }
    return sum;
}
console.log('Total sum array = ' + sumArray(arrayNum))

// const arr = [14, 4, 11, 13, 66, 10];
// let sum = 0
// for(const value of arr) {
//     sum += value; // sum = sum + value
// }
// console.log(`the sum is ${sum}`);

// LAB 1 - Loops
// Create an array of names of your classmates
// Create a for loop that goes through the array and logs each name in the array
// Now create another for loop that goes through the array in REVERSE and logs each name

// EXAMPLE
// Array: const names = ['Jimmy', 'Frank', 'Ben']
// Output should be:
// Jimmy
// Frank
// Ben
// Ben
// Frank
// Jimmy

const arrayNames = ['Jimmy', 'Frank', 'Ben'];
for (let i = 0; i < arrayNames.length; i++) {
    console.log(arrayNames[i]);
}
for (let i = arrayNames.length - 1; i >= 0; i--) {
    console.log(arrayNames[i]);
}

// use a for loop to print a half pyramid of *
// Example output:
// *
// **
// ***
// ****
// *****

let pyramid = [];

for(i = 0; i < 5; i++ ){
    for(j = i; j <= i; j++){
        pyramid.push('*')
    }
    console.log(...pyramid)
}
//console.log(pyramid)