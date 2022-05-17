/*

    find the first missing positive integer in an array of integers

    input = [3, 4, -1, 1]
    output = 2

*/

export function findFirstMissingPositive(nums: Array<number>) {
  const set = new Set(nums);
  let i = 1;
  while (set.has(i)) {
    i++;
  }
  return i;
}
