//let arraySort = [6,2,3,1,-3,9,4,-2,8,5,10,-1,7]
let arraySort = ['FA','J','B','AV','N', 'AA','BI', 'BA', 'FX']

console.log(arraySort);
for (let i = 0; i < arraySort.length; i++) {
    for (let j = i + 1; j < arraySort.length; j++) {
        if (arraySort[j] < arraySort[i]) {
            const temp = arraySort[i];
            arraySort[i] = arraySort[j];
            arraySort[j] = temp;
        }
    }
}
console.log(arraySort);