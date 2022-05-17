"use strict";
/*

    you are given a license key represented as a string s that consists of alphanumeric characters and dashes. The string is separated into
    n+1 groups by n dashes. You are also given an integer k.

    We want to reformat the string s such that each group contains exactly k characters, except for the first group which could be shorter than k,
    but still must contain at least one character. Furthermore, there must be a dash inserted between two groups and all lowercase letters should be
    converted to uppercase.

    return the formatted license key.

    Input = '5F3Z-2e-9-W', k = 4
    Output = '5F3Z-2E9W'

    Input = '2-5g-3-J', k = 2
    Output = '2-5G-3J'

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.inPlaceFormat = exports.formatLicenseKey = void 0;
function formatLicenseKey(s, k) {
    let formattedStringArray = s.replace(/-/g, "").split("").reverse();
    let formattedString = "";
    let i = formattedStringArray.length - 1;
    while (i >= 0) {
        formattedString += formattedStringArray[i].toUpperCase();
        if (i % k === 0 && i !== 0) {
            formattedString += "-";
        }
        i--;
    }
    return formattedString;
}
exports.formatLicenseKey = formatLicenseKey;
function inPlaceFormat(s, k) {
    let formattedString = "";
    let i = s.length - 1;
    let n = 0;
    while (i >= 0) {
        if (s[i] === "-") {
            i--;
            continue;
        }
        formattedString = s[i].toUpperCase() + formattedString;
        if (n % k === 0 && i !== 0) {
            formattedString = "-" + formattedString;
        }
        n++;
        i--;
    }
    return formattedString;
}
exports.inPlaceFormat = inPlaceFormat;
//# sourceMappingURL=licenseKeyFormatting.js.map