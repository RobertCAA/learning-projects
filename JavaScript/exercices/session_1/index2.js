// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// SOLUTION 1 - Return a single longest word
// SOLUTION 2 - Return an array and include multiple words if they have the same length
// SOLUTION 3 - Only return an array if multiple words, otherwise return a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sentence) {
  // // SOLUTION 1 - Return a single longest word
  // let longestWord = "";
  // // Split into array with words. For each word save the max length and return that word.
  // sentence.split(" ").forEach((word) => {
  //   let maxLength = 0;
  //   console.log(word.length);
  //   // Loop through words finding ( acumulative ) the longest one ( further repetition)
  //   if (word.length > maxLength) {
  //     maxLength = word.length;
  //     longestWord = word;
  //   }
  // });
  // // Print out word
  // return longestWord;
  //Loop through words finding ( acumulative ) the longest one ( further repetition)
  //   let acc = 0;
  //   for(i = 0; i < word.length; i++){
  //       (i > acc ? acc = i)
  //   Print out word

  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  //   let longestWord = [];
  //   let maxLength = 0;
  //   // Split into array with words. For each word save the max length and return that word.
  //   sentence.split(" ").forEach((word) => {
  //     console.log(`maxLenght: ${maxLength}`);
  //     // Loop through words finding ( acumulative ) the longest one ( further repetition)
  //     if (word.length >= maxLength) {
  //       console.log(`word.lenght: ${word.length}`);
  //       maxLength = word.length;
  //       longestWord.push(word);
  //     }
  //   });
  //   // Print out words
  //   return longestWord;

  //   // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
  //   let longestWords = [];
  //   let checkWord = "";
  //   let maxLength = 0;

  //   // Split into array with words. For each word save the max length and return that word.
  //   sentence.split(" ").forEach((word) => {
  //     if (word !== checkWord) {
  //       if ((word.length = checkWord.length)) {
  //         longestWords.push(word);
  //         maxLength = word.length;
  //       } else if (word.length > checkWord.length) {
  //         longestWords = [];
  //         longestWords.push(word);
  //         maxLength = word.length;
  //       }
  //       maxLength = word.length;
  //       longestWords = [];
  //       longestWords.push(word);
  //     }
  //     if (checkWord == "") {
  //       checkWord = word;
  //     }
  //   });

  //   if (longestWords.length > 0) {
  //     return longestWords;
  //   } else {
  //     return checkWord;
  //   }

  //   // SOLUTION 4 - Only return an array if multiple words, otherwise return a string
  //   let longestWords = [];
  //   let checkWord = "";
  //   // Split into array with words. For each word save the max length and return that word.
  //   sentence.split(" ").forEach((word) => {
  //     // Most probable option. Finish instructions at this point for optimization. Use flag?
  //     if(word.length > checkWord.length){
  //         longestWords = [];
  //         longestWords.push(word);
  //     }else if(word.length = checkWord.length){
  //         longestWords.push(word);
  //     }if()

  //     if (word !== checkWord) {
  //       if ((word.length = checkWord.length)) {
  //         longestWords.push(word);
  //       } else if (word.length > checkWord.length) {
  //         longestWords = [];
  //         longestWords.push(word);
  //       }
  //       longestWords = [];
  //       longestWords.push(word);
  //     }
  //     if (checkWord == "") {
  //       checkWord = word;
  //     }
  //   });

  //   if (longestWords.length > 0) {
  //     return longestWords;
  //   } else {
  //     return checkWord;
  //   }

  // Solution 5:
  // Create filter array that removes punctuation
  const wordArr = sentence.toLowerCase().match(/[a-z0-9]+/g);

  // Sort by lenght
  const sorted = wordArr.sort((a, b) => {
    return b.length - a.length;
  });

  // If multiple words, put into array
  const longestWordArr = sorted.filter((word) => {
    return word.length === sorted[0].length;
  });

  // If single word, return string.
  if (longestWordArr.length === 1) {
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr = [1, 2, 3, 4, 5, 6, 7], len = 3) {
  // // Solution 1:
  // // Solution array init
  // let resultingArr = [];
  // // Runs for every position in parameter array
  // for (i = 0; i < arr.length; i = i + len) {
  //   // Creates small array with 'len' length
  //   let miniArr = [];
  //   // Starts on 'len' index and adds the following positions in array until 'len'
  //   for (j = i; j < i + len && j < arr.length; j++) {
  //     // Adds element to small array
  //     miniArr.push(arr[j]);
  //   }
  //   // Adds small array to solution array
  //   resultingArr[i] = new Array(miniArr);
  // }
  // // Return chunked array
  // return resultingArr;

  // Solution 2:
  // Init chuncked array
  const chunkedArr = [];
  // Set index
  let i = 0;
  // Loops while index is less than the lenght of the array
  while (i < arr.length) {
    // Slice out from the index to the index + the chunk length and push to the array
    chunkedArr.push(arr.slice(i, i + len));
    // Increment by chunk length
    i += len;
  }
  return chunkedArr;

  // // Solution 3:
  // // Init array
  // const chunckedArr = [];
  // // Loop through for each
  // arr.forEach((value) => {
  //   // Get last element
  //   const last = chunckedArr[chunckedArr.length - 1];

  //   // Check if last and if last lenght is equal to the chunk length
  //   if (!last || last.length === len) {
  //     console.log("If");
  //     chunckedArr.push([value]);
  //   } else {
  //     console.log("Else");
  //     last.push(value);
  //   }
  //   console.log(chunckedArr);
  // });
  // return chunckedArr;

  // const chunked = [];
  // while (arr.length) {
  //   chunked.push(arr.splice(0, len));
  // }
  // return chunked;
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(array) {
  // Return result array and uses flat method.
  return (flatArr = array.flat());
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1 = "elbow", str2 = "below") {}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {}

<<<<<<< HEAD
const output = isAnagram();
=======
const output = flattenArray([[1, 2, 3], [4, 5, 6], [7]]);
>>>>>>> parent of b81757f (Challenge 5: Solved)
console.log(output);
