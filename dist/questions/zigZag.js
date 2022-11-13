"use strict";
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 Input: s = "PAYPALISHIRING", numRows = 4
  Output: "PINALSIGYAHRPI"
  Explanation:
  P     I    N
  A   L S  I G
  Y A   H R
  P     I
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.numRows = exports.s = exports.convert = void 0;
const convert = function (s, numRows) {
    /*
          Create a matrix of
    
        */
    let finalString = "";
    const columns = Math.floor((s.length - 1) / numRows) * (numRows - 2);
    const pointers = [];
    const visited = new Set();
    const handleZigOrZag = (initial) => {
        return (increment) => {
            if (increment === 0) {
                finalString += s[initial];
                visited.add(initial);
            }
            else {
                let low = initial - increment;
                let high = initial + increment;
                if (low > -1 && finalString.length !== s.length && !visited.has(low))
                    finalString += s[low];
                visited.add(low);
                if (high < s.length &&
                    finalString.length !== s.length &&
                    !visited.has(high))
                    finalString += s[high];
                visited.add(high);
            }
        };
    };
    for (let i = 0; i < s.length; i += columns) {
        pointers.push(handleZigOrZag(i));
    }
    /*
    
        Steps:
          bfs starting from each pointer
          base it on the string length
          create a function that takes a starting point, then has a method output2
      */
    let increment = 0;
    while (finalString.length < s.length) {
        for (let i = 0; i < pointers.length; i++) {
            if (finalString.length !== s.length)
                pointers[i](increment);
        }
        increment++;
    }
    return finalString;
};
exports.convert = convert;
exports.s = "PAYPALISHIRING";
exports.numRows = 4;
//# sourceMappingURL=zigZag.js.map