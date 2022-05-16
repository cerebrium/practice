"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayOfMergedLists = void 0;
const ds_1 = require("../ds");
function mergeKSortedLinkedLists(lists) {
    const linkedHash = {};
    let mergedLinkedList = null;
    let current = null;
    lists.forEach((linkedHead, index) => {
        linkedHash[index] = { value: linkedHead.value, node: linkedHead };
    });
    let currentMin = findCurrentMin(linkedHash);
    while (currentMin) {
        // Current min is the node with the smallest value
        // create a new node with the value of the current min
        if (!mergedLinkedList) {
            mergedLinkedList = new ds_1.LLNode(linkedHash[currentMin].value);
            current = mergedLinkedList;
            linkedHash[currentMin].node.next
                ? (linkedHash[currentMin] = {
                    value: linkedHash[currentMin].node.next.value,
                    node: linkedHash[currentMin].node.next,
                })
                : (linkedHash[currentMin] = null);
        }
        else {
            current.next = new ds_1.LLNode(linkedHash[currentMin].value);
            current = current.next;
            linkedHash[currentMin].node.next
                ? (linkedHash[currentMin] = {
                    value: linkedHash[currentMin].node.next.value,
                    node: linkedHash[currentMin].node.next,
                })
                : (linkedHash[currentMin] = null);
        }
        currentMin = findCurrentMin(linkedHash);
    }
    return mergedLinkedList;
}
function findCurrentMin(map) {
    let minNode = null;
    let currentMin = Number.MAX_SAFE_INTEGER;
    for (let key in map) {
        if (!map[key]) {
            continue;
        }
        if (map[key].value < currentMin) {
            currentMin = map[key].value;
            minNode = key;
        }
    }
    if (currentMin === Number.MIN_SAFE_INTEGER) {
        return null;
    }
    return minNode;
}
function convertLinkedListToArray(head) {
    let current = head;
    let arr = [];
    while (current) {
        arr.push(current.value);
        current = current.next;
    }
    return arr;
}
function arrayOfMergedLists(lists) {
    const mergedLists = mergeKSortedLinkedLists(lists);
    return convertLinkedListToArray(mergedLists);
}
exports.arrayOfMergedLists = arrayOfMergedLists;
//# sourceMappingURL=mergeKLinkedLists.js.map