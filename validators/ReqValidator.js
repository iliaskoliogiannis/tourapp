const { check } = require("express-validator");
const checkErrors = require("./result");

const paramsGuide = [
    check("guideId").isMongoId().withMessage("Provide a valid MongoId for guide"),
    checkErrors
];

const paramsCategory = [
    check("categoryId").isMongoId().withMessage("Provide a valid MongoId for category"),
    checkErrors
];

const paramsCountry = [
    check("countryId").isMongoId().withMessage("Provide a valid MongoId for country"),
    checkErrors
];

const paramsCity = [
    check("cityId").isMongoId().withMessage("Provide a valid MongoId for city"),
    checkErrors
];

const paramsPlace = [
    check("placeId")
        .optional()
        .isMongoId()
        .withMessage("Provide a valid MongoId for place"),
    check("categoryId")
        .optional()
        .isMongoId()
        .withMessage("Provide a valid MongoId for category"),
    check("guideId")
        .optional()
        .isMongoId()
        .withMessage("Provide a valid MongoId for guide"),
    check("childplaceId")
        .optional()
        .isMongoId()
        .withMessage("Provide a valid MongoId for childplace"),
    check("mediaType")
        .optional()
        .isIn(["audio", "video"])
        .withMessage("Provide  valid media type"),
    checkErrors
];

const paramsMedia = [
    check("mediaId")
        .optional()
        .isMongoId()
        .withMessage("Provide a valid MongoId media"),
    check("mediaType")
        .optional()
        .isIn(["audio", "video"])
        .withMessage("Provide  valid media type"),
    checkErrors
];

const paramsPrices = [
    check("priceId")
        .isMongoId()
        .withMessage("Provide a valid MongoId for price"),
    checkErrors
];

const bodyPlace = [
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

const bodyMedia = [
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

const bodyPrices = [
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
    paramsGuide,
    paramsCategory,
    paramsCountry,
    paramsCity,
    paramsPlace,
    paramsMedia,
    paramsPrices,
    bodyPlace,
    bodyMedia,
    bodyPrices
};

// add greek letters and capitals
