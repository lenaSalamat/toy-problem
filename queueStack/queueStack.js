//Write a stack. Once you’re done, 
//implement a queue using two stacks to create FIFO behavior. 
//The queue should not have any storage separate from its stacks.


var Stack = function() {
  var storage = [];
  var counter = 0;
	this.push = function(value){
      storage[counter++] = value ;
	};

	this.pop = function(){
      var newval = storage[counter - 1];
      delete storage[counter - 1];
      counter--;
      return newval;
	};

	this.size = function(){
      return storage.length;
	};
};

var Queue = function() {

  var inbox = new Stack();
  var outbox = new Stack();

	this.enqueue = function(value){
        inbox.push(value);
	};

	this.dequeue = function(){
	  while ( inbox.size() ) {
        var value = inbox.pop()
          outbox.push(value)
    }
      while( outbox.size() ) {
        var val = outbox.pop()
          inbox.push(val);
    }
      return val;
	};

	this.size = function(){
      return inbox.size();
	};
};