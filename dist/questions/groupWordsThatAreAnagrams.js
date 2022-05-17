"use strict";
/*

    given a list of words, group words that are anagrams of each other


    input = ['abc', 'bcd', 'cba', 'cbd', 'efg']
    output = [['abc', 'cba'], ['bcd', 'cbd'], ['efg']]

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAnagrams = void 0;
// Can solve this by turning the strings into their binary representation, the xor them to find duplicates
function findAnagrams(words) {
    // convert letters into numbers
    let mappedValues = {};
    words.forEach((arg) => {
        let value = 0;
        for (let i = 0; i < arg.length; i++) {
            value = value += numericalStrings(arg[i]);
        }
        if (!mappedValues[value]) {
            mappedValues[value] = [arg];
        }
        else {
            mappedValues[value].push(arg);
        }
    });
    return [Object.values(mappedValues)];
}
exports.findAnagrams = findAnagrams;
function numericalStrings(s) {
    let stringToNumMap = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26,
    };
    return stringToNumMap[s];
}
//# sourceMappingURL=groupWordsThatAreAnagrams.js.map