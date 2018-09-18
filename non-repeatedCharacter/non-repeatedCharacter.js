/*
Given an arbitrary input string, return the first non-repeating character. 
For strings with all repeats, return 'sorry'.

Examples
-------------------------------------------------
Input                                	Output
-------------------------------------------------
string:
"ABCDBIRDUP"	                         "A"

string:
"XXXXXXX"	                           "sorry"

string:
"ALAMABA"	                             "L"

string:
"BABA"	                               "sorry"
-------------------------------------------------
*/

function firstNonRepeatedCharacter (string) {
  var str = '';
  var count = 0;
  for(var i = 0 ; i < string.length ; i++){
    count = 0;
  for(var j = 0 ; j < string.length ; j++){
    if(string[i] === string[j]){
    count++;
    }
  }
  if(count === 1){
    str += string[i];
  return str;
    }
  }
  return "sorry";
}
