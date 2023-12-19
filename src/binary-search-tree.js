const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootKorzen = null;
  }
  root() {
    return this.rootKorzen;
  }

  add(data) {
    const newNode = new Node(data);
    function addFunc(node, newNode) {
      if (newNode.data < node.data) {
        if (!node.left) {
          node.left = newNode;
        } else {
          addFunc(node.left, newNode);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
        } else {
          addFunc(node.right, newNode);
        }
      }
    }
    if (!this.rootKorzen) {
      this.rootKorzen = newNode;
    } else {
      addFunc(this.rootKorzen, newNode);
    }
  }

  has(data) {
    return hasFunc(this.rootKorzen, data);
    function hasFunc(node, data) {
      if (!node) {
        return false;
      }else
      if (data === node.data) {
        return true;
      } else if (data < node.data) {
        return hasFunc(node.left, data);
      } else {
        return hasFunc(node.right, data);
      }
    }
  }

  find(data) {
    return findFunc(this.rootKorzen, data);
    function findFunc(node, data) {
      if (!node || data === node.data) {
        return node;
      }else
      if (data < node.data) {
        return findFunc(node.left, data);
      } else {
        return findFunc(node.right, data);
      }
    }
  }

  remove(data) {
    this.rootKorzen = removeFunc(this.rootKorzen, data);
    function removeFunc(node, data) {
      if (!node) {
        return null;
      }

      if (data === node.data) {
        if (!node.left && !node.right) {
          return null;
        }else
        if (!node.right) {
          return node.left;
        }else
        if (!node.left) {
          return node.right;
        }
        
        function findMin(node) {
          while (node.left) {
            node = node.left;
          }
          return node;
        }

        const minRight = findMin(node.right);
        node.data = minRight.data;
        node.right = removeFunc(node.right, minRight.data);
      } else if (data < node.data) {
        node.left = removeFunc(node.left, data);
      } else {
        node.right = removeFunc(node.right, data);
      }

      return node;
    }
  }

  min() {
    function minLeft(node) {
      while (node.left) {
        node = node.left;
      }
      return node;
    }
    const minNode = minLeft(this.rootKorzen);
    if (minNode) {
      return minNode.data;
    } else {
      return null;
    }
  }

  max() {
    function maxRight(node) {
      while (node.right) {
        node = node.right;
      }
      return node;
    }
    const maxNode = maxRight(this.rootKorzen);
    if (maxNode) {
      return maxNode.data;
    } else {
      return null;
    }
  }
}

module.exports = {
  BinarySearchTree,
};
