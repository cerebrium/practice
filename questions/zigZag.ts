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

export const convert = function (s, numRows): string {
  let finalString = "";

  /*

    Columns:
      length of the input string divided by the number or rows expected
      multiplied by rows - edges (2)

      Example:
        P     I    N
        A   L S  I G
        Y A   H R
        P     I
  
      length = 14 / rows (4) ==> 3.x

      math.floor, because if there is a remainder in the final
      column, it is accounted for by not finishing the column

      multiply by the number of rows (4) - edges (always 2) to get the 
      number of letters in the diagonals

      This provides the starting points for the pointers in the
      string
  */

  const columns = Math.floor((s.length - 1) / numRows) * (numRows - 2);

  const pointers = [];

  /**
   * @params initial number
   * @returns function that takes current increment
   *
   * description:
   *
   * This takes an initial location in the string as
   * a 'pointer'. Then it needs to add the new
   * characters to the final string with offset
   * calculated by iteration and initial location.
   *
   * There is a final check to determine the final
   * addition. This ideally would not have to
   * be done with the use of a set. But for now
   * it is functional.
   */

  const visited = new Set();
  const handleZigOrZag = (initial): ((inc: number) => void) => {
    return (increment): void => {
      if (increment === 0) {
        finalString += s[initial];
        visited.add(initial);
      } else {
        let low = initial - increment;
        let high = initial + increment;

        if (low > -1 && finalString.length !== s.length && !visited.has(low)) {
          finalString += s[low];
          visited.add(low);
        }

        if (
          high < s.length &&
          finalString.length !== s.length &&
          !visited.has(high)
        ) {
          finalString += s[high];
          visited.add(high);
        }
      }
    };
  };

  // Add the pointers with initial reference locations
  for (let i = 0; i < s.length; i += columns) {
    pointers.push(handleZigOrZag(i));
  }

  /*
  
      Create the new string, add the offset
      to each pointer returned function
      for calculating how far from initial
      location the next char should be.
        
  */

  let increment = 0;
  while (finalString.length < s.length) {
    for (let i = 0; i < pointers.length; i++) {
      if (finalString.length !== s.length) pointers[i](increment);
    }
    increment++;
  }
  return finalString;
};

export const s = "PAYPALISHIRING";
export const numRows = 4;
