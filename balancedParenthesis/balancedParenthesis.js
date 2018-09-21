/* Given a string, return true if it contains balanced parenthesis ().

Examples
----------------------------------
Input	                 | Output |
----------------------------------
string:
"(x + y) - (4)"	         | true   |
----------------------------------
string:
"(((10 ) ()) ((?)(:)))"	 | true   |
----------------------------------
string:
"(50)("	                 | false  |
----------------------------------
string:    
""	                     | true   |
----------------------------------
*/

function isBalanced (string) {
	// write your code here
  var counter = 0;
  var count = 0;
    for (var i = 0; i < string.length; i++){
      if (string[i] === "("){
      
      counter++;
      }
      if (string[i] === ")"){
     
      count++;
      }
      if(string[0] === ")" || string === null){
      
       return false;
       }
     }
    if (count === counter) {
       return true;
  }

    return false;
}

