"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataStructures = void 0;
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
        head.right.right.right = new BNode(5);
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
    createLinkedList() {
        class Node {
            constructor(value, next = null) {
                this.value = value;
                this.next = next;
            }
        }
        const head = new Node(1);
        head.next = new Node(2);
        head.next.next = new Node(3);
        head.next.next.next = new Node(4);
        head.next.next.next.next = new Node(5);
        head.next.next.next.next.next = new Node(6);
        head.next.next.next.next.next.next = new Node(7);
        head.next.next.next.next.next.next.next = new Node(8);
        return head;
        /*
    
                1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8
    
            */
    }
}
exports.DataStructures = DataStructures;
//# sourceMappingURL=index.js.map