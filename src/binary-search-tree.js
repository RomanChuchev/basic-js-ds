const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.data = null;
  }

  root() {
    return this.data;
  }

  add(data) {
    if (!this.data) {
      this.data = new Node(data);
    } else {
      let node = this.data;

      while (node) {
        if (node.data < data) {
          if (!node.right) {
            node.right = new Node(data);
            break;
          }
          node = node.right;
        } else if (node.data > data) {
          if (!node.left) {
            node.left = new Node(data);
            break;
          }
          node = node.left;
        }
      }
    }
  }

  has(data) {
    let node = this.data;

    while (node) {
      if (node.data === data) return true;

      if (node.data < data) {
        if (!node.right) break;
        node = node.right;
      } else if (node.data > data) {
        if (!node.left) break;
        node = node.left;
      }
    }

    return false;
  }

  find(data) {
    let node = this.data;

    while (node) {
      if (node.data === data) return node;

      if (node.data < data) {
        if (!node.right) break;
        node = node.right;
      } else if (node.data > data) {
        if (!node.left) break;
        node = node.left;
      }
    }

    return null;
  }

  remove(data) {
    this.data = removeNode(this.data, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.data) {
      return;
    }

    let node = this.data;

    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.data) {
      return;
    }

    let node = this.data;

    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
