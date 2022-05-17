export class DataStructures {
  minHeap: Array<number> = [];
  maxHeap: Array<number> = [];
  constructor() {}
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

  /*

    1 . The root of the tree will be in position 1 of the array.
    2. The left child of any given node at position n, will be located at 2n.
    3. The right child of a node at position n will be located at position 2n + 1.
    4. The parent of a node at position n is at position n/2.

  */

  public createMinHeap() {
    return new minHeap();
  }
}

class minHeap {
  minHeap: Array<number> = [];

  public insert = function (val) {
    this.minHeap.push(val);
    this.bubbleUp(this.minHeap.length - 1);
  };

  public bubbleUp = function (index) {
    while (index > 0) {
      // get the parent
      var parent = Math.floor((index + 1) / 2) - 1;

      // if parent is greater than child
      if (this.minHeap[parent] > this.minHeap[index]) {
        // swap
        var temp = this.minHeap[parent];
        this.minHeap[parent] = this.minHeap[index];
        this.minHeap[index] = temp;
      }

      index = parent;
    }
  };

  public extractMin = function () {
    var min = this.minHeap[0];

    // set first element to last element
    this.minHeap[0] = this.minHeap.pop();

    // call bubble down
    this.bubbleDown(0);

    return min;
  };

  public bubbleDown = function (index) {
    while (true) {
      var child = (index + 1) * 2;
      var sibling = child - 1;
      var toSwap = null;

      // if current is greater than child
      if (this.minHeap[index] > this.minHeap[child]) {
        toSwap = child;
      }

      // if sibling is smaller than child, but also smaller than current
      if (
        this.minHeap[index] > this.minHeap[sibling] &&
        (this.minHeap[child] == null ||
          (this.minHeap[child] !== null &&
            this.minHeap[sibling] < this.minHeap[child]))
      ) {
        toSwap = sibling;
      }

      // if we don't need to swap, then break.
      if (toSwap == null) {
        break;
      }

      var temp = this.minHeap[toSwap];
      this.minHeap[toSwap] = this.minHeap[index];
      this.minHeap[index] = temp;

      index = toSwap;
    }
  };
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
  next: Node | null;
  constructor(value: number, next: Node | null = null) {
    this.value = value;
    this.next = next;
  }
}
