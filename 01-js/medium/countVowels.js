/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let count = 0;
  strarr = str.split("");
  for(let i=0;i<strarr.length;i++){
    if (strarr[i] === 'a' || strarr[i] === 'e' || strarr[i] === 'i' || strarr[i] === 'o' || strarr[i] === 'u' || strarr[i] === 'A' || strarr[i] === 'E' || strarr[i] === 'I' || strarr[i] === 'O' || strarr[i] === 'U') {
      count+=1;
    } 
  }
  return count;
}

module.exports = countVowels;