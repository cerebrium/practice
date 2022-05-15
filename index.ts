import { DataStructures, BNode, LinkedNode } from "./ds";
const ds = new DataStructures();

// RUN 'npm run-script run' TO RUN A FUNCTION

function validateBinaryTree(head: BNode) {
  const _iterate = (node: BNode | null, min: number, max: number) => {
    if (!node) return true;

    if (
      node.value > min &&
      node.value < max &&
      _iterate(node.left, min, node.value) &&
      _iterate(node.right, node.value, max)
    ) {
      return true;
    } else {
      return false;
    }
  };

  return _iterate(head, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

const head = ds.createBinaryTree();
console.log(validateBinaryTree(head));
