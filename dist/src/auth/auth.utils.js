"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = exports.comparePasswords = exports.hashPassword = void 0;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
async function hashPassword(password) {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
}
exports.hashPassword = hashPassword;
async function comparePasswords(plainPassword, hashedPassword) {
    return bcrypt.compare(plainPassword, hashedPassword);
}
exports.comparePasswords = comparePasswords;
function generateToken(userId) {
    const secretKey = 'tajnyKlucz';
    const expiresIn = '1h';
    const token = jwt.sign({ userId }, secretKey, { expiresIn });
    return token;
}
exports.generateToken = generateToken;
//# sourceMappingURL=auth.utils.js.map