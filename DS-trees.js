class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  traverse(newNode = false, currentNode, value = false) {
    if (newNode) {
      while (currentNode) {
        if (newNode.value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        }

        if (newNode.value > currentNode.value) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }

    if (value) {
      while (value !== currentNode.value) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            return 'there is no such value in a tree';
          }
          currentNode = currentNode.left;
        }

        if (value > currentNode.value) {
          if (!currentNode.right) {
            return 'there is no such value in a tree';
          }
          currentNode = currentNode.right;
        }
      }
      return currentNode;
    }
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    this.traverse(newNode, currentNode);
  }

  lookup(value) {
    let currentNode = this.root;
    return this.traverse(false, currentNode, value);
  }

  //remove
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.insert(150);
console.log(tree.lookup(170));

const traverse = function (node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
};

console.log(JSON.stringify(traverse(tree.root)));
