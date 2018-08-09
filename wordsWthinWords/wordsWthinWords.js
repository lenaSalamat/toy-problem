//Words within Words
//Given an array of unique words, find the word that 
//contains the greatest number of other words. 
//A word must be at least two letters long.
//input:
//wordList:
//[ "gray", "grays", "ray", "rays", "strays" ]	
//output:"grays"


function wordsWthinWords (array){
  var count = 0;
//var x=array.split("");
  var longest=array;
for(var i=0; i < array.length; i++){
for(var j=0;j<array.length;j++){
    if(array[i].length > count && array[i].match(array[j]) && array[i].length>array[j].length){
      var count = array[i].length;
        longest = array[i];
      }      
   }
       }
 return longest;
} 
