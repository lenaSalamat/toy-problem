//Given an array of words (array of strings), return all words that are palindromes.
// Example: filterPalindromes([ "word", "Ana", "race car" ])
// output: [ "Ana", "race car" ]








function filterPalindromes(words) {
  // Write your code here, and
  // return your final answer.
var arr=[];
for(var i=0 ; i < words.length ; i++){
var str=words[i].toLowerCase().replace(/\s/g,'');
var palindromes = str.split("").reverse().join("");
  if(str === palindromes){
  	arr.push(words[i].substring(str))
}
}
    return arr;
}