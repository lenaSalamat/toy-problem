//Given a string, return true if its arrangement of parenthesis (), 
//curly-brackets {}, and square-brackets [] would be considered valid in code and mathematics (is balanced).
//Examples:
//Input:"(x + y) - (4)"
//output:true
//input:"(((10 ) ()) ((?)(:)))"
//output:true
//input:"[{()}]"	
//output:true
//input:"(50)("
//output:false
//input:"[{]}"	
//output:false

function isBalanced (string) {
  var arr = [];
  for(var i = 0 ; i < string.length ; i++){
    if(string[i] === '{' ){
      arr.push('}');
  } else if(string[i] === '(' ){
      arr.push(')');
  } else if(string[i] === '[' ){
      arr.push(']');
  } else if(string[i] === '}' || string[i] === ']' || string[i] === ')'){
      if(arr.pop() !== string[i]) {
        return false;
      }
    }
  }
  if(arr.length) {
     return false;
  }
  return true;
}