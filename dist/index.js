"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ds_1 = require("./ds");
const intersectionOfTwoLinkedLists_1 = require("./questions/intersectionOfTwoLinkedLists");
const ds = new ds_1.DataStructures();
// RUN 'npm run-script run' TO RUN A FUNCTION
function validateBinaryTree(head) {
    const _iterate = (node, min, max) => {
        if (!node)
            return true;
        if (node.value > min &&
            node.value < max &&
            _iterate(node.left, min, node.value) &&
            _iterate(node.right, node.value, max)) {
            return true;
        }
        else {
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
let a = new ds_1.LLNode(1);
a.next = new ds_1.LLNode(2);
a.next.next = new ds_1.LLNode(3);
a.next.next.next = new ds_1.LLNode(4);
let b = new ds_1.LLNode(6);
b.next = a.next.next;
console.assert((0, intersectionOfTwoLinkedLists_1.intersection)(a, b) === 3, "Expecting 3, got: " + (0, intersectionOfTwoLinkedLists_1.intersection)(a, b));
//# sourceMappingURL=index.js.map