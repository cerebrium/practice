"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.determineRecipients = exports.emails2 = exports.emails = void 0;
/*

    Every valid email consists of a local name and a domain name, separated by the @ sign. Besides lowercase letters, the email may contain one or more '.' or '+'
        - alice@leetcode.com: alice is the local name, leetcode.com is the domain name.
    If you add periods between characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name.
        - alice.z@leetcode.com and alicez@leetode.com will go to the same location.
    If you add a '+' in the local name, it will be replaced by a special character '@'. This character '@' does not appear in the email, and a local name cannot start with it.
        - m.y+name@gmail.com -> my@gmail.com

    Question:
        given an array of strings emails where we send one email to each emails[i], return the number of different addresses that actually receive emails


    Example:
        Input: emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]
        Output: 2

    Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails

       Input: emails = ["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"]
       Output: 3

       constraints:
            1 <= emails.length <= 100
            1 <= emails[i].length <= 100
            emails[i] consist of lowercase English letters, '.', '+' and '@'
            each emails[i] contains exactly one '@' character.
            All local and domain names are non-empty.
            Local names do not start with a '+' character.
            Domain names end with the ".com" suffix
*/
exports.emails = [
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
];
exports.emails2 = ["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"];
function determineRecipients(emails) {
    let recipients = 0;
    let emailsSet = new Set();
    const validateEmail = (email) => {
        let [prefix, suffix] = email.split("@");
        // format prefix, remove periods, take anything before a '+'
        let formattedPrefix = prefix.replace(/\./g, "").split("+")[0];
        if (emailsSet.has(formattedPrefix + "@" + suffix)) {
            return;
        }
        else {
            emailsSet.add(formattedPrefix + "@" + suffix);
            recipients++;
        }
    };
    emails.forEach((email) => {
        validateEmail(email);
    });
    return recipients;
}
exports.determineRecipients = determineRecipients;
//# sourceMappingURL=uniqueEmailAddresses.js.map