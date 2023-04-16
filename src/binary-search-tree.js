

class BinarySearchTree {
   constructor() {
      this._root = null;
   }
   root() {

      return this._root;
   }

   add(data) {

      const newNode = { data, left: null, right: null };

      if (this._root === null) {
         this._root = newNode;
      } else {
         let currentNode = this._root;
         while (true) {
            if (data < currentNode.data) {
               if (currentNode.left === null) {
                  currentNode.left = newNode;
                  break;
               } else {
                  currentNode = currentNode.left;
               }
            } else {
               if (currentNode.right === null) {
                  currentNode.right = newNode;
                  break;
               } else {
                  currentNode = currentNode.right;
               }
            }
         }
      }
   }

   has(data) {
      let currentNode = this._root;
      while (currentNode !== null) {
         if (data === currentNode.data) {
            return true;
         } else if (data < currentNode.data) {
            currentNode = currentNode.left;
         } else {
            currentNode = currentNode.right;
         }
      }
      return false;

   }

   find(data) {
      let currentNode = this._root;
      while (currentNode !== null) {
         if (data === currentNode.data) {
            return currentNode;
         } else if (data < currentNode.data) {
            currentNode = currentNode.left;
         } else {
            currentNode = currentNode.right;
         }
      }
      return null;
   }

   remove(data) {
      this._root = this._removeNode(this._root, data);
   }
   _removeNode(node, data) {
      if (node === null) {
         return null;
      }
      if (data === node.data) {

         if (node.left === null && node.right === null) {
            return null;
         }

         if (node.left === null) {
            return node.right;
         }
         if (node.right === null) {
            return node.left;
         }

         let tempNode = node.right;
         while (tempNode.left !== null) {
            tempNode = tempNode.left;
         }
         node.data = tempNode.data;
         node.right = this._removeNode(node.right, tempNode.data);
         return node;
      } else if (data < node.data) {
         node.left = this._removeNode(node.left, data);
         return node;
      } else {
         node.right = this._removeNode(node.right, data);
         return node;
      }
   }

   min() {
      if (this._root === null) {
         return null;
      }
      let node = this._root;
      while (node.left !== null) {
         node = node.left;
      }
      return node.data;
   }

   max() {
      if (this._root === null) {
         return null;
      }
      let node = this._root;
      while (node.right !== null) {
         node = node.right;
      }
      return node.data;
   }
}

module.exports = {
   BinarySearchTree
};