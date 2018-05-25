// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

// Sort the numbers in descending order (10, 9, 8, 7, etc).
// Remove any integers greater than 19.
// Multiply each remaining number by 1.5 and then subtract 1.
// Then output (either in the DOM or the console) the sum of all the resulting numbers.

// this is the array of numbers to be used
const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// create a variable to console.log easier.
// using the sort() will put numbers in an order, but since sorts values of strings. in otder to get it to sort numbers we have to use a function.
// function(a, b){return a-b} is the compare function. It will put items in numerical order.
// in order to reverse the numbers in the array, swith the b and a in the last part of the function.
const sortedIntegers = integers.sort(function(a, b){return b - a})


for (let i = 0; i < integers.length; i++) {
    const element = integers[i];
    if (element < 19){ console.log(element)}


}
// const slicedIntegers = sortedIntegers.slice(  >=19)

console.log(sortedIntegers)


