"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertNumber = exports.isNumber = void 0;
const tslib_1 = require("tslib");
const assert_1 = tslib_1.__importStar(require("assert"));
const isNumber = (nbr) => !isNaN(nbr) && typeof +nbr === 'number';
exports.isNumber = isNumber;
const assertNumber = (number, functionName, message) => assert_1.default.equal((0, exports.isNumber)(number), true, new assert_1.AssertionError({
    message: `ERROR - [${functionName}] - ${message}`,
    actual: number,
}));
exports.assertNumber = assertNumber;
//# sourceMappingURL=index.js.map