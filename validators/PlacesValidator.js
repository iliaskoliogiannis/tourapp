const { check } = require("express-validator");
const checkErrors = require("./result");

const params = [
    check("placeId")
        .optional()
        .isMongoId()
        .withMessage("Provide a valid MongoId for place"),
    check("categoryId")
        .optional()
        .isMongoId()
        .withMessage("Provide a valid MongoId for category"),
    check("childplaceId")
        .optional()
        .isMongoId()
        .withMessage("Provide a valid MongoId for childplace"),
    check("mediaId")
        .optional()
        .isMongoId()
        .withMessage("Provide a valid MongoId media"),
    check("mediaType")
        .optional()
        .isIn(["audio", "video"])
        .withMessage("Provide  valid media type"),
    check("priceId")
        .optional()
        .isMongoId()
        .withMessage("Provide a valid MongoId for price"),
    checkErrors
];

const edit = [
    check("name")
        .not().isEmpty({ ignore_whitespace: true })
        .matches(/^[a-zα-ω. ]+$/i)
        .withMessage("Provide only alphabetical(el, en) characters for name"),
    check("address")
        .not().isEmpty({ ignore_whitespace: true })
        .matches(/^[a-zα-ω0-9. ]+$/i)
        .withMessage("Provide only alphabetical(el, en) characters and numbers for address"),
    check("polygon")
        .not().isEmpty({ ignore_whitespace: true })
        .withMessage("Provide coordinates"),
    check("photo")
        .not().isEmpty({ ignore_whitespace: true })
        .matches(/^[a-z0-9. ]+$/i)
        .withMessage("Provide valid photo path"),
    check("gallery")
        .not().isEmpty({ ignore_whitespace: true })
        .matches(/^[a-z0-9. ]+$/i)
        .withMessage("provide valid gallery"),
    check("country")
        .isMongoId()
        .withMessage("Provide a valid MongoId for country"),
    check("city")
        .isMongoId()
        .withMessage("Provide a valid MongoId for city"),
    check("description")
        .not().isEmpty({ ignore_whitespace: true })
        .matches(/^[a-zα-ω.!?; ]+$/i)
        .withMessage("Provide only alphabetical(el, en) characters for name"),
    check("category")
        .isMongoId()
        .withMessage("Provide a valid MongoId for category"),
    checkErrors
];

const media = [
    check("name")
        .matches(/^[a-zα-ω0-9 ]+$/i)
        .withMessage("Provide only alphabetical characters for name"),
    check("type")
        .isIn(["audio", "video"])
        .withMessage("Provide valid media type"),
    check("url")
        .isURL()
        .withMessage("Provide valid media url"),
    checkErrors
];

const prices = [
    check("name")
        .matches(/^[a-zα-ω ]+$/i)
        .withMessage("Provide only alphabetical(el, en) characters for name"),
    check("price")
        .isNumeric({no_symbols: false})
        .withMessage("Provide only numbers for price"),
    check("days")
        .isIn([0, 1, 2, 3, 4, 5, 6])
        .withMessage("Days must be between 0 and 6"),
    checkErrors
];

module.exports = {
    params,
    edit,
    media,
    prices
};

// add greek letters and capitals
