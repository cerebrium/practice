/*

    given 2 linked lists, find out at which node does the intersection occur

    given 1 -> 2 -> 3 -> 4
    and 6 -> 3
    print(Solution().intersection(a, b).value)
    # 3
*/

import { LLNode } from "../ds";

export function intersection(a: LLNode, b: LLNode): number {
  let intersection = null;
  let tracker = {};

  while (a) {
    tracker[a.value] = {
      node: a,
    };
    a = a.next;
  }
  while (b) {
    if (tracker[b.value]) {
      if (tracker[b.value].node.next.value === b.next.value) {
        intersection = tracker[b.value].node;
        break;
      }
    }
    b = b.next;
  }

  return intersection.value;
}
