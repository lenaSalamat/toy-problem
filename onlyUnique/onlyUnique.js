/* Given a string, remove any characters that are not unique from the string.

Examples
------------------------------------
Input                 |	Output
------------------------------------
str:                  |
"abccdefe"            | "abdf"
------------------------------------                      
str:                  | 
"hello there"         | "o tr"
------------------------------------                      
str:                  |
"xyz"	              | "xyz"
------------------------------------                      
str:                  |
"iiii"                |	""
------------------------------------
*/

function onlyUnique (str) {
   // your code is here
   var string='';
  count=0;
  for(var i=0;i<str.length;i++){
    count=0;
    for(var j=0;j<str.length;j++){
    if(str[i]===str[j]){
      count++;
    }
  }
  if(count===1){
    string +=str[i];
  }
  }
  return string;
}	