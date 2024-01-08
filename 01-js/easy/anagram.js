/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = sortString(str1.toLowerCase()); //we use toLowerCase() to ensures that the comparison between characters is case-insensitive.
  str2 = sortString(str2.toLowerCase());
  if (str1 === str2) {
    return true;
  }
  return false;
}

function sortString(str) {
  let charArray = str.split('')  // converts the string into an array of characters using split('')
  charArray.sort();      //Then, it uses the sort() method to arrange the characters in alphabetical order.
  let ans = charArray.join('') // join('')  joins the sorted array back into a string and returns the sorted string.
  return ans;
}

module.exports = isAnagram;
