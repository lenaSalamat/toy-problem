/* Write a function that, given a string, 
finds the longest run of identical characters and 
returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs. */
//Examples:

/* Input	     Output
  
  "abbbcc"	     [ 1, 3 ]

  "aabbc"	    [ 0, 1 ]

    ""	        [ 0, 0 ]

"mississippi"   [ 2, 3 ]

"abcdefgh"	    [ 0, 0 ]

"abccccccc"	    [ 2, 8 ]  */


function longestRun (string) {
  var longest = 0;
  var FinalResult=[0,0];
  var counter = 0;
  var start = true;
  var result = [0,0]
  for ( var i = 1; i < string.length; i++ ) {
    if (string[i-1] === string[i]) {
       counter++;
        if (start) {
          result = [i - 1, i];
          start = false;
        } else {
           result[1] = i 
        }
        if (counter > longest) {
          longest = counter;
          FinalResult = result;
        }
       
    } else {
      counter = 0;
      start = true;
    }
  }
  return FinalResult;      
}