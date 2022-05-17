export class DataStructures {
  public createBinaryTree() {
    class BNode {
      value: number;
      left: BNode | null;
      right: BNode | null;
      constructor(
        value: number,
        left: BNode | null = null,
        right: BNode | null = null
      ) {
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

  public createLinkedList(nums: Array<number>) {
    class Node {
      value: number;
      next: Node | null;
      constructor(value: number, next: Node | null = null) {
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

export type BNode = {
  value: number;
  left: BNode | null;
  right: BNode | null;
};

export type LinkedNode = {
  value: number;
  next: LinkedNode | null;
};

export class LLNode {
  value: number;
  next: LLNode | null;
  constructor(value: number, next: LLNode | null = null) {
    this.value = value;
    this.next = next;
  }
}
