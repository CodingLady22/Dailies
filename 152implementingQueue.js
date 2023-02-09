/* 
//*Implementing a Queue

Queues are linear collections of objects that can be inserted and removed in a FIFO (first in, first out) manner.

"An example of a queue in real life and not strictly computing would simply be the dreaded waiting line, i.e.the first person in line is also the first one who gets out."

In this problem, we are going to be implementing our own enqueue, dequeue, and size methods for the queue constructor we are creating, so we should be able to create new instances of the Queue.

The enqueue method takes in the item as a parameter, while the dequeue method does not.
The size method simply returns the number of items in the queue.
Wait, what?

To enqueue an item into the queue means to insert an item into the back, or tail, of the queue.
To dequeue an item means means to remove the item at the front, or head, of the queue.
In a queue, we remove the item the least recently added.
JavaScript Methodology

Queues can be implemented in JavaScript using arrays.

You can use the built in push or unshift functions in order to add items to the queue array as well as the shift or pop to remove them.

As long as the tests pass, go for it!
*/

let Queue = function() {
  constructor() 
    this.storage = {}
    this.head = 0
    this.tail = 0
  
}

Queue.prototype.enqueue = function(item) {
  // add item to the queue
  this.storage[this.tail] = item
  this.tail++
  return this
};

Queue.prototype.dequeue = function() {
  // remove item from the front of the queue and return its value
  let removed = this.storage[this.head]
  delete this.storage[this.head] 
  this.head++
  return removed
};

Queue.prototype.size = function() {
  // return number of items in queue
  
  return Object.keys(this.storage).length
  
};

const queue = new Queue()
