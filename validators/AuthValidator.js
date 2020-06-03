const { check } = require("express-validator");
const checkErrors = require("./result");

const login = [
    check("email")
        .isEmail()
        .withMessage("Provide a valid email"),
    check('password')
        .isLength({min: 6})
        .blacklist('{}')
        .withMessage("Password must be at least 6 characters  and not contain {}"),
    checkErrors
];

const register = [
    check("username")
        .matches(/^[a-zα-ω ]+$/i)
        .withMessage("Provide only alphabetical(el, en) characters for name"),
    check("email")
        .isEmail()
        .withMessage("Provide a valid email"),
    check('password')
        .isLength({min: 6})
        .blacklist('{}')
        .withMessage("Password must be at least 6 characters  and not contain {}"),
    checkErrors
];

const registerClient = [
    check("email")
        .isEmail()
        .withMessage("Provide a valid email"),
    check('password')
        .isLength({min: 6})
        .blacklist('{}')
        .withMessage("Password must be at least 6 characters and not contain {}"),
    checkErrors
];

module.exports = {
    login,
    register,
    registerClient
};
