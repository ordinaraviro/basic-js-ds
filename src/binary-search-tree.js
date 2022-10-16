const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootItem = null;
  }

  root() {
    return this.rootItem;
  }

  add(data) {
    this.rootItem = addWithin(this.rootItem, data);

    function addWithin(node, data){
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchWithin(this.rootItem, data)
    function searchWithin(node, data){
      if (!node){
        return false
      }
      if(node.data === data){
        return true
      }
      return data < node.data?
      searchWithin(node.left, data):
      searchWithin(node.right, data)
    }
  }

  find(data) {
    return findWithin(this.rootItem, data)
    function findWithin(node, data){
      if(!node){
        return null
      }
      else if(node.data == data){
        return node
      }
      else if(node.data > data){
        return findWithin(node.left, data)
      }
      else {
        return findWithin(node.right, data)
      }
    }
  }

  remove(data) {
    this.rootItem = removeNode(this.rootItem, data)
    function removeNode(node, data){
      if(!node){
        return null
      }
      if(data < node.data){
        node.left = removeNode(node.left, data)
        return node
      } else if(node.data < data){
        node.right = removeNode(node.right, data)
        return node
      } else {
        if(!node.left && !node.right){
          return null
        }
        if(!node.left && node.right){
          return node.right
        }
        if(node.left && !node.right){
          return node.left
        }
        let minFromRight = node.right
        while(minFromRight.left){
          minFromRight = minFromRight.left
        }
        node.data = minFromRight.data
        removeNode(node.right, minFromRight.data)
        return node
      }
    }
  }

  min() {
    return findMin(this.rootItem)
    function findMin(node){
      if(!node.left){
        return node.data;
      }
      return findMin(node.left)
    }
  }

  max() {
    return findMax(this.rootItem)
    function findMax(node){
      if(!node.right){
        return node.data;
      }
      return findMax(node.right)
    }
  }
}

module.exports = {
  BinarySearchTree
};