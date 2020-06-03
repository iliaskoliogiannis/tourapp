const { check } = require("express-validator");
const checkErrors = require("./result");

const guide = [
    check("guideId").isMongoId().withMessage("Provide a valid MongoId for guide"),
    checkErrors
];

const category = [
    check("categoryId").isMongoId().withMessage("Provide a valid MongoId for category"),
    checkErrors
];

const country = [
    check("countryId").isMongoId().withMessage("Provide a valid MongoId for country"),
    checkErrors
];

const city = [
    check("cityId").isMongoId().withMessage("Provide a valid MongoId for city"),
    checkErrors
];

module.exports = {
    guide,
    category,
    country,
    city
};
