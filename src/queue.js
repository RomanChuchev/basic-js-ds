const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

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
    this.head = null;
  }
  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if (!this.head) {
      this.head = new Node(value);
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = new Node(value);
    }
  }

  dequeue() {
    let prev = this.head;
    this.head = this.head.next;
    return prev.value;
  }
}

module.exports = {
  Queue,
};
