const passPlaceId = (req, res, next) => {
    req.placeId = req.params.placeId;
    next();
};

module.exports = passPlaceId;
