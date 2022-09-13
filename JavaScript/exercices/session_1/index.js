// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

// Using ES6
// function reverseString(word) {
//   let lettersArray = Array.from(word);
//   let reversedlettersArray = lettersArray.reverse();
//   let reversedWord = "";

//   for (let letter of reversedlettersArray) {
//     console.log(letter);
//     reversedWord += letter;
//   }
//   // let reversedWord = [];
//   // console.log(string);

//   // for(i = 0; i < letters.lenght; i++){
//   //     console.log('hi');

//   //     reversedWord[letters.length - i] = letters[i];
//   // }

//   // for(i = letters.length; i <= 0; i--){
//   //     console.log('hi');
//   //     reversedWord[letters.length - i] += letters[i];
//   // }

//   // for( let letter of letters){
//   //     console.log(letter)
//   //     reversedWord += letter;
//   // }
//   return reversedWord;
// }

// function reverseString(word){

//     let letters = Array.from(word);
//     let reversedWord = new Array;

//     for(i = 0; i < letters.lenght; i++){
//         reversedWord[letters.length - i] = letters[i];
//     }

//     return reversedWord;
// }

//////////////////////////////////////////////////////////

// Solution 1:
// function reverseString(string){
//     return string
//         .split('')
//         .reverse()
//         .join('');
//     // const stringArr = string.split('')
//     // stringArr.reverse();
//     // return stringArr.join('')
// }

// Solution 2:
// function reverseString(str){
//     let reversedstr = '';
//     console.log('hi')
//     for(let i = str.length - 1; i >= 0; i--){
//         reversedstr += str[i];
//         console.log(i);
//     }
//     return reversedstr;
// }

// Solution 3: how this works
// function reverseString(str){
//     let reversedstr = '';
//     for(let i = 0; i <= str.length - 1; i++){
//         reversedstr = str[i] + reversedstr;
//         console.log(i);
//     }
//     return reversedstr;
// }

// Solution 4: For-of loop
// function reverseString(str){
//     let reversedstr = '';
//     for(let char of str){
//         reversedstr = char + reversedstr;
//     }
//     return reversedstr;
// }

// Solution 5: For each
// function reverseString(str){
//     let reversedstr = '';
//     str.split('').forEach(char => reversedstr = char + reversedstr);
//     return reversedstr;

// }

// Solution 6: Reduce
function reverseString(str) {
  return str.split("").reduce((revString, char) => char + revString, "");
}
//////////////////////////////////////////////////////////

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex isPalindrome('racecar') === 'true',

// function isPalindrome(word) {
//   let reverseWord = reverseString(word);
//   if (word != reverseWord) {
//     return false;
//   } else {
//     return true;
//   }
// }

// Solution 1:
function isPalindrome(word) {
  let reversedWord = reverseString(word);
  return reversedWord === word;
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex reverseInt(521) === 125

function reverseInt(number) {
  let numString = reverseString(number.toString());
  return parseInt(numString) * Math.sign(number);
}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

// Solution 1
// function capitalizeLetters(str) {
//     let strArr = str.toLowerCase().split(' ');
//     for (i = 0; i <= strArr.length; i++){
//         strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
//     }

//     return strArr.join(' ');

// }

// Solution 2: Best
// function capitalizeLetters(str) {
//     return str
//         .toLowerCase()
//         .split(' ')
//         .map(word => word[0].toUpperCase() + word.substring(1))
//         .join(' ');
// }

// Solution 3: Reg Ex
function capitalizeLetters(str) {
  return str.replace(/\b[a-z]/gi, (char) => char.toUpperCase());
}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  const charMap = {};
  let maxNum = 0;
  let maxChar = "";
  str.split("").forEach((char) => {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });

  for (let char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    let output = "";

    if (i % 3 === 0) {
      output += "fizz";
    }
    if (i % 5 === 0) {
      output += "buzz";
    }

    console.log(output || i);
  }
}

// Solution 1
//function fizzBuzz(){
//     for(let i = 1; i <= 100; i++){
//         if (i %15 === 0){
//             console.log('FizzBuzz')
//         }else if(i % 3 === 0){
//             console.log('Fizz')
//         }else if (i % 5 === 0){
//             console.log('Buzz')
//         }else{
//             console.log(i);
//         }
//     }
// }
