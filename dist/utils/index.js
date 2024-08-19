"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomInt = exports.parseNumber = void 0;
const tslib_1 = require("tslib");
const crypto_1 = tslib_1.__importDefault(require("crypto"));
const __1 = require("..");
const parseNumber = (value) => {
    return (0, __1.isNumber)(value) ? +value : null;
};
exports.parseNumber = parseNumber;
const getRandomInt = (min = 0, max, excludeValues) => {
    let randomInt = crypto_1.default.randomInt(min, max);
    while (excludeValues.includes(randomInt)) {
        randomInt = crypto_1.default.randomInt(min, max);
    }
    return randomInt;
};
exports.getRandomInt = getRandomInt;
//# sourceMappingURL=index.js.map