// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

function addAll(a, b, c) {
  //   return a + b + c;
}

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes(max) {
  // let sum = 0;
  // for(i = 1; i <= max; i++){
  //     for(j = 1; j <= i; j++){
  //         i % j
  //     }
  // }
}

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

function seekAndDestroy(arr) {
  // // Init solution array with first item
  // let solArr = [arr[0]]
  // // Check if the next array item is in the solution
  // const len = arr.length;
  // let i = 1;
  // while (i < len){
  //     if(!solArr.includes(arr[i])){
  //         solArr.push(arr[i])
  //     }
  //     i++;
  // }
  // return solArr;
}

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(arr) {
  // // Init sorted array
  // let sortedArr = [];
  // // Check if item is tree or person
  // if(!arr[i] === -1){
  //     Math.max(arr)
  // }
  // // If person, sort height
  //     // Push heightest height
  // // If tree, push tree

  // // Return sorted array

//   // Init sorted array
//   let sortedArr = [];
//   // Loop through array
//   let i = 0;
//   const len = arr.length;
//   while (i < len) {
//     // Check if tree or person
//     if (arr[i] !== -1) {
//       // When person compares with next value
//       if (arr[i + 1] !== -1 && arr[i + 1] !== undefined) {
//         sortedArr.push(Math.max(arr[i], arr[i + 1]));
//       }
//     } else {
//       sortedArr.push(arr[i]);
//     }
//     i++;
//   }
}

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters(str) {
    // const comparationString = 'abcdefghijklmnopqrstuvwxyz';
    // let resultString = '';
    // for(char of str){
    //     if (!comparationString.includes(char)){
    //         resultString.concat(char);
    //     }
    // }

    // return resultString;
}

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(arr) {
    let even = 0, odds = 0;
    
}

const output = addAll();
console.log(output);
