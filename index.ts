import { DataStructures, BNode } from "./ds";
import {
  emails,
  determineRecipients,
  emails2,
} from "./questions/uniqueEmailAddresses";
import { queReconstructionByHeight } from "./questions/queReconstructionByHeight";
import { arrayOfMergedLists } from "./questions/mergeKLinkedLists";
import { provideParsedLinkedList } from "./questions/removeZeroConsecutiveNodes";
import { findFirstMissingPositive } from "./questions/firstMissingPositiveInteger";
import { findAnagrams } from "./questions/groupWordsThatAreAnagrams";
import { convert, s, numRows } from "./questions/zigZag";
const ds = new DataStructures();

// RUN 'npm run-script run' TO RUN A FUNCTION
let zigZagged = convert(s, numRows);
if (zigZagged === "PINALSIGYAHRPI") {
  console.log("returned answer: ", "PINALSIGYAHRPI");
} else {
  console.log("not correctly zigging, or zagging");
}
console.assert(
  zigZagged === "PINALSIGYAHRPI",
  `PAYPALISHIRING, with rows 4 !== PINALSIGYAHRPI`
);
