import { LinkedNode, LLNode } from "../ds";
/*

    Given an array of linked lists, merge all the linked lists into one linked list and return it.

*/

interface LinkedHash {
  [key: string]: {
    value: number;
    node: LinkedNode;
  };
}

function mergeKSortedLinkedLists(lists: LinkedNode[]): LinkedNode {
  const linkedHash: LinkedHash = {};
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
      mergedLinkedList = new LLNode(linkedHash[currentMin].value);
      current = mergedLinkedList;
      linkedHash[currentMin].node.next
        ? (linkedHash[currentMin] = {
            value: linkedHash[currentMin].node.next.value,
            node: linkedHash[currentMin].node.next,
          })
        : (linkedHash[currentMin] = null);
    } else {
      current.next = new LLNode(linkedHash[currentMin].value);
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

function findCurrentMin(map: LinkedHash): string | null {
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

function convertLinkedListToArray(head: LinkedNode): number[] {
  let current = head;
  let arr = [];

  while (current) {
    arr.push(current.value);
    current = current.next;
  }

  return arr;
}

export function arrayOfMergedLists(lists: LinkedNode[]): Array<number> {
  const mergedLists = mergeKSortedLinkedLists(lists);
  return convertLinkedListToArray(mergedLists);
}
