/* 
Min Stack

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

 

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
 

Constraints:

-231 <= val <= 231 - 1
Methods pop, top and getMin operations will always be called on non-empty stacks.
At most 3 * 104 calls will be made to push, pop, top, and getMin.
*/

const MinStack = function() {
    const stack = [];
    const minimumStack = [];
    const size = minimumStack.length - 1
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)

    if(!this.minimumStack.length || val <= this.minimumStack[size]) {
        this.minimumStack.push(val)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack.length) {
        const popped = this.stack.pop();
    

    if(popped === this.minimumStack[size]) {
        this.minimumStack.pop()
    }
}
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack.length ? this.stack[this.stack.length - 1] : undefined
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minimumStack.length ? this.minimumStack[size] : undefined
};

/** 
 * MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */