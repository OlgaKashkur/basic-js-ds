const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.first = null;
    this.end = null;
  }
  getUnderlyingList() {
    return this.first;
  }

  enqueue(value) {
    const newList = new ListNode(value);
    if (!this.first) {
      this.first = newList;
      this.end = newList;
    } else {
      this.end.next = newList;
      this.end = newList;
    }
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    if (!this.first) {
        this.end = null;
    }
    let firstValue = this.first.value;
    this.first = this.first.next;
    
    return firstValue;
  }
}

module.exports = {
  Queue,
};
