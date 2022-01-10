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
    if (!this.root) {
      return null;
    }

    let currentNode = this.root;
    return this.traverse(false, currentNode, value);
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }

  countValuesIterative() {
    let currentNode = this.root;
    const queue = [];
    let result = 0;

    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      result += currentNode.value;

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return result;
  }

  countValuesRecursive(node) {
    if (!node) return 0;

    return (
      node.value + this.countValuesRecursive(node.left) + this.countValuesRecursive(node.right)
    );
  }

  breadthFirstSearch() {
    let currentNode = this.root;
    const queue = [];
    const list = [];

    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return list;
  }

  RecursivebreadthFirstSearch(queue, list) {
    if (!queue.length) {
      return list;
    }

    let currentNode = queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }

    if (currentNode.right) {
      queue.push(currentNode.right);
    }

    return this.RecursivebreadthFirstSearch(queue, list);
  }

  DFSInorder(node, list) {
    if (node.left) {
      this.DFSInorder(node.left, list);
    }

    list.push(node.value);

    if (node.right) {
      this.DFSInorder(node.right, list);
    }
    return list;
  }

  DFSPreorder(node, list) {
    list.push(node.value);

    if (node.left) {
      this.DFSPreorder(node.left, list);
    }

    if (node.right) {
      this.DFSPreorder(node.right, list);
    }

    return list;
  }

  DFSPostorder(node, list) {
    if (node.left) {
      this.DFSPostorder(node.left, list);
    }

    if (node.right) {
      this.DFSPostorder(node.right, list);
    }

    list.push(node.value);
    return list;
  }
}

const tree = new BinarySearchTree();
// tree.insert(9);
// tree.insert(4);
// tree.insert(6);
// tree.insert(20);
// tree.insert(170);
// tree.insert(15);
// tree.insert(1);

//          9
//     4        20
//   1   6   15   170
// InOrder = [1, 4, 6, 9, 15, 20, 170]
// PreOrder = [9, 4, 1, 6, 20, 15, 170]
// PostOrder = [1, 6, 4, 15, 170, 20, 9]
// console.log(tree.DFSInorder(tree.root, []));
// console.log(tree.DFSPreorder(tree.root, []));
// console.log(tree.DFSPostorder(tree.root, []));
// console.log(tree.breadthFirstSearch());
// console.log(tree.RecursivebreadthFirstSearch([tree.root], []));

// console.log(tree.countValuesIterative());
// console.log(tree.countValuesRecursive(tree.root));

const traverse = function (node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
};

console.log(JSON.stringify(traverse(tree.root)));

// let str = `
// {"value":9,"left":{"value":5,"left":{"value":1,"left":null,"right":null},"right":{"value":6,"left":null,"right":{"value":7,"left":null,"right":null}}},"right":{"value":20,"left":{"value":15,"left":{"value":13,"left":null,"right":null},"right"
// :{"value":17,"left":null,"right":null}},"right":{"value":171,"left":{"value":160,"left":{"value":30,"left":null,"right":{
// "value":140,"left":null,"right":null}},"right":{"value":165,"left":null,"right":null}},"right":{"value":185,"left":null,"
// right":{"value":190,"left":null,"right":{"value":220,"left":null,"right":null}}}}}}
// `;

// let ss = '';
// str = str.replace(/:\d*,/g, s => (ss += s.replace(/:/g, '')));
// console.log(ss.split(','));
// console.log(str);

// str = str.replace(/:[0-9]\d*/g, s => (ss += s));
// console.log(
//   ss
//     .split(':')
//     .map(Number)
//     .reduce((acc, num) => acc + num, 0)
// );
