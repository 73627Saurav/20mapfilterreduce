let arr1 = [45, 23, 21]
console.log(arr1) // [ 45, 23, 21 ]

// Array map method - create a new array by performing some operation on every element in an existing array
let a1 = arr1.map((value, index, array) => {
  //console.log(value, index, array)
  /* 
  45 0 [ 45, 23, 21 ]
  23 1 [ 45, 23, 21 ]
  21 2 [ 45, 23, 21 ] */
  return value + index
})
console.log(a1) // [ 45+0, 23+1, 21+2 ] // [ 45, 24, 23 ]
console.log(arr1) // [ 45, 23, 21 ]

let numbers = [1, 2, 3, 4, 5]
let squares = numbers.map(function(num) {
  return num * num
})
console.log(squares) // Output: [1, 4, 9, 16, 25]

// Array filter method - create a new array with all elements that pass a certain test (provided as a function)
let arr2 = [45, 23, 21, 0, 3, 5]
let a2 = arr2.filter((num) => {
  return num < 10
})
console.log(a2) // [ 0, 3, 5 ]
console.log(arr2) // [ 45, 23, 21, 0, 3, 5 ]

let numArray1 = [1, 2, 3, 4, 5]
let evenNumbers = numArray1.filter(function(num) {
  return num % 2 === 0
});
console.log(evenNumbers) // Output: [2, 4]

// Array reduce method - used to reduce an array to a single value by executing a provided function for each element of the array
let arr3 = [1, 2, 3, 5, 2, 1]
let a3 = arr3.reduce((h1, h2) => {
  return h1 + h2
})
console.log(a3) // 14

let numArray2 = [1, 2, 3, 4, 5]
let sum = numArray2.reduce(function(total, num) {
  return total + num
})
console.log(sum) // Output: 15