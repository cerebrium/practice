"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLNode = exports.DataStructures = void 0;
class DataStructures {
    createBinaryTree() {
        class BNode {
            constructor(value, left = null, right = null) {
                this.value = value;
                this.left = left;
                this.right = right;
            }
        }
        const head = new BNode(10);
        head.left = new BNode(5);
        head.right = new BNode(15);
        head.left.left = new BNode(1);
        head.left.right = new BNode(8);
        head.right.left = new BNode(13);
        head.right.right = new BNode(20);
        head.right.right.right = new BNode(25);
        return head;
        /*
    
             10
            / \
           5  15
          / \  / \
         1  8 13 20
                   \
                    25
    
        */
    }
    createLinkedList(nums) {
        class Node {
            constructor(value, next = null) {
                this.value = value;
                this.next = next;
            }
        }
        const head = new Node(nums[0]);
        let current = head;
        for (let i = 1; i < nums.length; i++) {
            current.next = new Node(nums[i]);
            current = current.next;
        }
        return head;
    }
}
exports.DataStructures = DataStructures;
class LLNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
exports.LLNode = LLNode;
//# sourceMappingURL=index.js.map