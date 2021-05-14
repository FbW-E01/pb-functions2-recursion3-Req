// Write a JavaScript program to get the first n Fibonacci numbers.
// The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34... 
// Each subsequent number is the sum of the previous two.

function fibonnaci(n) {
  if (n === 0) { return [0]; }
  if (n === 1) { return [0, 1]; }

  const previous = fibonnaci(n - 1);
  const currentNumber = previous[previous.length - 2] + previous[previous.length - 1];
  previous.push(currentNumber);

  return previous;
}

// fibonnaci(3)
//   const previous = fibonnaci(2);
//     const previous = fibonnaci(1);
//       return [0, 1];
//     const currentNumber = previous[previous.length - 2] + previous[previous.length - 1];
//     previous.push(currentNumber);
//     return [0,1,1];
//   const currentNumber = previous[previous.length - 2] + previous[previous.length - 1];
//   previous.push(currentNumber);
//   return [0,1,1,2];
// const currentNumber = previous[previous.length - 2] + previous[previous.length - 1];
// previous.push(currentNumber);
// return [0,1,1,2,3];


// console.log(fibonnaci(0)); //=> [0]        // Special case!
// console.log(fibonnaci(1)); //=> [0, 1]     // Special case!
// console.log(fibonnaci(2)); //=> [0, 1, 1]
// console.log(fibonnaci(3)); //=> [0, 1, 1, 2]
// console.log(fibonnaci(4)); //=> [0, 1, 1, 2, 3]
// console.log(fibonnaci(5)); //=> [0, 1, 1, 2, 3, 5]
console.log(fibonnaci(8)); //=> [0, 1, 1, 2, 3, 5, 8, 13, 21]
