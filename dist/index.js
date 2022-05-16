"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ds_1 = require("./ds");
const uniqueEmailAddresses_1 = require("./questions/uniqueEmailAddresses");
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
console.log("valid emails (2): ", (0, uniqueEmailAddresses_1.determineRecipients)(uniqueEmailAddresses_1.emails));
console.log("valid emails (3): ", (0, uniqueEmailAddresses_1.determineRecipients)(uniqueEmailAddresses_1.emails2));
//# sourceMappingURL=index.js.map