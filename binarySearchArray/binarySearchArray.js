/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 7, 15, 27], 27);
 * console.log(index); // 4
 */

var binarySearch = function (array, target) {
  var half_length = Math.ceil(array.length / 2);
  var leftSide = array.splice(0,half_length);
  var rightSide = leftSide.concat(array);
    if(target <= half_length ){
      for(var j = 0 ; j< leftSide.length ; j++){
      	if(target === leftSide[j]){
      		return j;
        }
      }
    }else{
   if(target > half_length){
     for(var i = 0 ; i < rightSide.length ; i++){
        if(target === rightSide[i]){
           return i;
      }
    }
  }
}
  return -1;
};
