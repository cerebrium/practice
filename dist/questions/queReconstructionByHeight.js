"use strict";
/*

    Given an array of tuples:
    [2, 3] -> 2: height, 3: number of people in front as tall or taller
    Reconstruct the matrix

    input = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]
    output = [[5,0], [7, 0], [5, 2], [6, 1], [4, 4], [7, 1]]

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.queReconstructionByHeight = void 0;
function queReconstructionByHeight(people) {
    let result = [];
    const sorted = people.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        }
        return b[0] - a[0];
    });
    /*
  
      This will sort sort the matrix by height
      but if the heights are the same, by the number of people in front
  
    */
    sorted.forEach((person) => {
        result.splice(person[1], 0, person);
    });
    return result;
}
exports.queReconstructionByHeight = queReconstructionByHeight;
//# sourceMappingURL=queReconstructionByHeight.js.map