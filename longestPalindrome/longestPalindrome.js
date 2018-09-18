/*Implement a function that finds the longest palindrome in a given string. 
For example, in the string “My dad is a racecar athlete”, 
the longest palindrome is “a racecar a”. 
Count whitespaces as valid characters.
Other palindromes in the above string 
include “dad”, “ete”, “ dad “ (including whitespace on each side of dad).
Examples
Input	                            Output
string:
"aibohphobia"	                  "aibohphobia"
string:
"My dad is a racecar athlete"	  "a racecar a" */

function longestPalindrome (string) {
  // Write your code here, and
  // return your final answer.
  var length = string.length;
  var str = "";

  var isPalindrome = function(left, right) {
    while (left >= 0 && right < length && string[left] === string[right]) {
      left--;
      right++;
    }
    return string.slice(left + 1, right);
  };
  for(var i = 0; i < length - 1; i++){
    var oddPal = isPalindrome(i, i + 1);
    var evenPal = isPalindrome(i, i);
    if(oddPal.length > str.length){
      str = oddPal;
    }
    if(evenPal.length > str.length){
      str = evenPal;
    }
  }
  return str;
};
