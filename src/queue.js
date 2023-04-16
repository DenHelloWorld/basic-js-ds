
const { ListNode } = require('../extensions/list-node.js');

class Queue {
   constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
   }

   getUnderlyingList() {
      return this.head;
   }

   enqueue(value) {
      const node = new ListNode(value);
      if (!this.head) {
         this.head = node;
         this.tail = node;
      } else {
         this.tail.next = node;
         this.tail = node;
      }
      this.size++;
   }

   dequeue() {
      if (!this.head) {
         return null;
      }
      const value = this.head.value;
      this.head = this.head.next;
      this.size--;
      if (!this.head) {
         this.tail = null;
      }
      return value;
   }
}

module.exports = {
   Queue
};
