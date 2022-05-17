import { DataStructures, BNode } from "./ds";
import {
  emails,
  determineRecipients,
  emails2,
} from "./questions/uniqueEmailAddresses";
import { queReconstructionByHeight } from "./questions/queReconstructionByHeight";
import { arrayOfMergedLists } from "./questions/mergeKLinkedLists";
import { provideParsedLinkedList } from "./questions/removeZeroConsecutiveNodes";
import { findAnagrams } from "./questions/groupWordsThatAreAnagrams";
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
// console.assert(
//   queReconstructionByHeight([
//     [7, 0],
//     [4, 4],
//     [7, 1],
//     [5, 0],
//     [6, 1],
//     [5, 2],
//   ]).toString() ===
//     [
//       [5, 0],
//       [7, 0],
//       [5, 2],
//       [6, 1],
//       [4, 4],
//       [7, 1],
//     ].toString(),
//   `Expecting: [
//     [5, 0],
//     [7, 0],
//     [5, 2],
//     [6, 1],
//     [4, 4],
//     [7, 1],
//   ], got: ${queReconstructionByHeight([
//     [7, 0],
//     [4, 4],
//     [7, 1],
//     [5, 0],
//     [6, 1],
//     [5, 2],
//   ]).toString()}`
// );

// merge k sorted linked lists
// let listOne = ds.createLinkedList([1, 4, 5]);
// let listTwo = ds.createLinkedList([1, 3, 4]);
// let listThree = ds.createLinkedList([2, 6]);

// console.assert(
//   arrayOfMergedLists([listOne, listTwo, listThree]).toString() ===
//     [1, 1, 2, 3, 4, 4, 5, 6].toString(),
//   "expecting: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6"
// );

// let listOne = ds.createLinkedList([3, 1, 2, -1, -2, 4, 1]);
// console.assert(
//   provideParsedLinkedList(listOne).toString() === [3, 4, 1].toString(),
//   `Expecting: 3 -> 4 -> 1, got: ${provideParsedLinkedList(listOne).toString()}`
// );

// console.log(provideParsedLinkedList(listOne));

// find anagram pairs
let input = ["abc", "bcd", "cba", "cbd", "efg"];
let output = [["abc", "cba"], ["bcd", "cbd"], ["efg"]];

console.assert(
  findAnagrams(input).toString() === output.toString(),
  `Expecting: ${output}, got: ${findAnagrams(input)}`
);
