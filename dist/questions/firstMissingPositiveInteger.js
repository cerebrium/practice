"use strict";
/*

    find the first missing positive integer in an array of integers

    input = [3, 4, -1, 1]
    output = 2

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.findFirstMissingPositive = void 0;
function findFirstMissingPositive(nums) {
    const set = new Set(nums);
    let i = 1;
    while (set.has(i)) {
        i++;
    }
    return i;
}
exports.findFirstMissingPositive = findFirstMissingPositive;
//# sourceMappingURL=firstMissingPositiveInteger.js.map