import { DataStructures, BNode } from "./ds";
import {
  emails,
  determineRecipients,
  emails2,
} from "./questions/uniqueEmailAddresses";
import { arrayOfMergedLists } from "./questions/mergeKLinkedLists";
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

// merge k sorted linked lists
let listOne = ds.createLinkedList([1, 4, 5]);
let listTwo = ds.createLinkedList([1, 3, 4]);
let listThree = ds.createLinkedList([2, 6]);

console.assert(
  arrayOfMergedLists([listOne, listTwo, listThree]).toString() ===
    [1, 1, 2, 3, 4, 4, 5, 6].toString(),
  "expecting: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6"
);
