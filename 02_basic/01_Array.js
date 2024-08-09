const myArr = [1,2,3,4,5]
const heroes = ["shaktimaan","spiderman","ironman","thor"]
const myArr2 = new Array(1,3,4,5,5)

// console.log(myArr[0])

// Methods

// myArr.push(7)
// myArr.pop()
// myArr.unshift(22)
// myArr.shift()

// console.log(myArr.includes(99)) 
// console.log(myArr.indexOf(3))

// const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr)

// slice , splice

console.log("A",myArr)

const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B",myArr)

const myn2 = myArr.splice(1,3)
console.log("C",myArr)
console.log(myn2)
