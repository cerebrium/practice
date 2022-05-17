"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.provideParsedLinkedList = exports.removeZeroSumNodes = void 0;
/*

    Given an array of linked lists, merge all the linked lists into one linked list and return it.

*/
function removeZeroSumNodes(head) {
    let checkSet = new Set([0]);
    let stack = [];
    let current = head;
    // While there are nodes in the linked list
    while (current) {
        // If the stack is empty, and the node.value is not zero, push it to the stack, add value to set
        if (!stack.length) {
            if (current.value === 0) {
                current = current.next;
            }
            stack.push({
                state: current.value,
                node: current,
            });
            checkSet.add(current.value);
            current = current.next;
            continue;
        }
        // If the stack is not empty, check if we have a previous state in the set, if we do, return to it
        const sum = stack[stack.length - 1].state + current.value;
        if (sum === 0) {
            stack[stack.length - 1].node.next = current.next;
            current = current.next;
            continue;
        }
        if (checkSet.has(sum)) {
            while (stack.length && stack[stack.length - 1].state !== sum) {
                checkSet.delete(stack[stack.length - 1].state);
                stack.pop();
            }
            stack[stack.length - 1].node.next = current.next;
            current = current.next;
            continue;
        }
        // if no previous state found, push node onto the stack
        stack.push({
            state: sum,
            node: current,
        });
        checkSet.add(sum);
        current = current.next;
    }
    return stack[0].node;
}
exports.removeZeroSumNodes = removeZeroSumNodes;
function printStack(head) {
    let current = head;
    let result = [];
    while (current) {
        result.push(current.value);
        current = current.next;
    }
    return result;
}
function provideParsedLinkedList(head) {
    return printStack(removeZeroSumNodes(head));
}
exports.provideParsedLinkedList = provideParsedLinkedList;
//# sourceMappingURL=removeZeroConsecutiveNodes.js.map