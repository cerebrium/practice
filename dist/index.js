"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ds_1 = require("./ds");
const zigZag_1 = require("./questions/zigZag");
const ds = new ds_1.DataStructures();
// RUN 'npm run-script run' TO RUN A FUNCTION
let zigZagged = (0, zigZag_1.convert)(zigZag_1.s, zigZag_1.numRows);
if (zigZagged === "PINALSIGYAHRPI") {
    console.log("returned answer: ", "PINALSIGYAHRPI");
}
else {
    console.log("not correctly zigging, or zagging");
}
console.assert(zigZagged === "PINALSIGYAHRPI", `PAYPALISHIRING, with rows 4 !== PINALSIGYAHRPI`);
//# sourceMappingURL=index.js.map