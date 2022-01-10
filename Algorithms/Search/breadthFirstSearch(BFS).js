function breadthFirstSearch() {
  let currentNode = this.root;
  const queue = [];
  const list = [];
  let counter = 0;

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

function RecursivebreadthFirstSearch(queue, list) {
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

//          9
//     4        20
//   1   6   15   170

// InOrder = [1, 4, 6, 9, 15, 20, 170]
// PreOrder = [9, 4, 1, 6, 20, 15, 170]
// PostOrder = [1, 6, 4, 15, 170, 20, 9]
