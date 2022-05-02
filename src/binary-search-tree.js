const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {

  constructor() {
    this.head = null
  }

  root() {
    return this.head
  }

  add(data) {
    this.head = addData(this.head, data)

    function addData(node, data) {
      if (!node) return new Node(data)
      if (node.data === data) return node
      if (data < node.data) {
        node.left = addData(node.left, data)
      } else {
        node.right = addData(node.right, data)
      }
      return node
    }
  }

  has(data) {
    return searchData(this.head, data)

    function searchData(node, data) {
      if (!node) return false
      if (node.data === data) return true
      return data < node.data ? searchData(node.left, data) : searchData(node.right, data)
    }
  }

  find( data ) {
    return findData(this.head, data)

    function findData(node, data) {
      if (!node) return null
      if (node.data === data) return node
      return data < node.data ? findData(node.left, data) : findData(node.right, data)
    }
  }

  remove(data) {
    this.head = removeData(this.head, data)

    function removeData(node, data) {
      if (!node) return null

      if (data < node.data) {
        node.left = removeData(node.left, data)
        return node
      } else if (data > node.data) {
        node.right = removeData(node.right, data)
        return node
      } else {
        if (!node.left && !node.right) return null
        if (!node.left) {
          node = node.right
          return node
        }
        if (!node.right) {
          node = node.left
          return node
        }
        let minFromRight = node.right
        while (minFromRight.left) {
          minFromRight = minFromRight.left
        }
        node.data = minFromRight.data
        node.right = removeData(node.right, minFromRight.data)
        return node
      }
    }
  }

  min() {
    if (!this.head) return

    let node = this.head
    while (node.left) {
      node = node.left
    }
    return node.data
  }

  max() {
    if (!this.head) return

    let node = this.head
    while (node.right) {
      node = node.right
    }
    return node.data
  }
}

module.exports = {
  BinarySearchTree
};