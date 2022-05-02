const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
 const arr = []
 class Stack {
   push(element) {
     arr.push(element)
   }
 
   pop() {
     let x = arr[arr.length - 1]
     arr.splice(arr.length -1, 1)
     return x     
   }
 
   peek() {
     return arr[arr.length - 1]
   }
 }

module.exports = {
  Stack
};
