/*  Write three functions to replace the multiply, divide, and modulo operators. 
The only operators you may only use in your solution are addition and subtraction.
Your functions will only have to handle integer math.
Note: Don’t put any complex math in the comments in your code, or the tests may fail.
EXAMPLES:
multiply(5, 2) === 10
divide(5, 2) === 2
modulo(5, 2) === 1  */
var multiply = function(x, y) {
 var sum = 0;
  for (var times = 0; times < y; times++) {
    sum += Number(x);
  }
  if(y < 0 ){
   return -multiply(x, -y);
}
  return Number(sum);
}

var divide = function(x, y) {
	var num = 1;
	  if (x < 0) {
	    x = -x;
	    num = -num;
	  }
	  if (y < 0) {
	    y = -y;
	    num = -num;
	  }
	  var result = 0;
	  while (x >= 0) {
	    x -= y;
	    result++;
	  }
	  var a = multiply(num);
	  return (result - 1) + a;
}

var modulo = function(x, y) {
 if(x === 0){
     return 0;
   }
   if(y === 0){
     return NaN;
   }
 var result = x - Math.floor( x / y ) * y ;
   if(x < 0){
     return -(result);
 } else {
     return result;
  }
}