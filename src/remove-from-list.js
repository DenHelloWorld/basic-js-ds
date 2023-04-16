
const { ListNode } = require('../extensions/list-node.js');

function removeKFromList(l, k) {

   while (l !== null && l.value === k) {
      l = l.next;
   }

   let current = l;
   let prev = null;

   while (current !== null) {
      if (current.value === k) {

         prev.next = current.next;
      } else {

         prev = current;
      }

      current = current.next;
   }

   return l;
}

module.exports = {
   removeKFromList
};
