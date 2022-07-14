// const obj = {a: 1, b: 2, c:3}
// for (const key in obj){
//     console.log(key)
// }

const object = {
    name: 'Jonathan',
    age: 42,
    inClass: true,
}

for (const key in object){
    console.log(key + ': ' + object[key])
}

// for (const key in object){
//     console.log(object[key])
// }