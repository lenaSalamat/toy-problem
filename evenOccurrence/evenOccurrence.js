//Find the first item that occurs an even number of times in an array.
// Remember to handle multiple even-occurrence items and return the first one. 
//Return null if there are no even-occurrence items.
//Examples


//input:[ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]
//output:2
//input:[ "cat", "dog", "dig", "cat" ]
//output:"cat"


  function evenOccurrence (arr) {
  // Write your code here, and
  // return your final answer.
  var count=0;
for (var i = 0 ; i < arr.length ; i++) {
    for (var j = 0 ; j < arr.length ; j++) {
        if (arr[i] === arr[j]){
           count=count+1;
        }
      }
        if(count%2 === 0){
            return arr[i];
        }
    count = 0;
   }
 return null;
}

