import { DataStructures, BNode } from "./ds";
import {
  emails,
  determineRecipients,
  emails2,
} from "./questions/uniqueEmailAddresses";
import { queReconstructionByHeight } from "./questions/queReconstructionByHeight";
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

// const head = ds.createBinaryTree();
// console.log(validateBinaryTree(head));

// Unique emails
// console.log("valid emails (2): ", determineRecipients(emails));
// console.log("valid emails (3): ", determineRecipients(emails2));

// que reconstruction by height
console.assert(
  queReconstructionByHeight([
    [7, 0],
    [4, 4],
    [7, 1],
    [5, 0],
    [6, 1],
    [5, 2],
  ]).toString() ===
    [
      [5, 0],
      [7, 0],
      [5, 2],
      [6, 1],
      [4, 4],
      [7, 1],
    ].toString(),
  `Expecting: [
    [5, 0],
    [7, 0],
    [5, 2],
    [6, 1],
    [4, 4],
    [7, 1],
  ], got: ${queReconstructionByHeight([
    [7, 0],
    [4, 4],
    [7, 1],
    [5, 0],
    [6, 1],
    [5, 2],
  ]).toString()}`
);
