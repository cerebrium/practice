"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ds_1 = require("./ds");
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
const head = ds.createBinaryTree();
console.log(validateBinaryTree(head));
//# sourceMappingURL=index.js.map