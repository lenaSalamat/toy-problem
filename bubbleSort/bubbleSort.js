//Bubble sort is considered the most basic sorting algorithm in Computer Science. 
//It works by starting at the first element of an array and comparing it to the second element:
//If the first element is greater than the second element, it swaps the two.
//It then compares the second to the third, and the third to the fourth, and so on.
//In this way, the largest values ‘bubble’ to the end of the array.
//Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
//Implement a function that takes an array and sorts it using this technique.
//NOTE: DO NOT use JavaScript’s built-in sorting function (Array.prototype.sort).
var bubbleSort = function(array) {
  var elem;
  for(var i = 0 ; i < array.length ; i++){
    for(var j = 0 ; j < array.length ; j++){
    if(array[i] > array[j]){
      elem = array[i];
      array[i] = array[j];
      array[j] = elem;
    }
  }
}
  return array.reverse();
}; 