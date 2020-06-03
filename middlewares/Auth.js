const jwt = require("jsonwebtoken");

const admin = async (req, res, next) => {

    if (!req.headers.authorization) {
        return res.json({
            success: false,
            message: "authorization header required"
        });
    }

    const token = req.headers.authorization.replace("Bearer ", "");
    let decodedAdmin;

    try {
        decodedAdmin = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        return res.json({
            success: false,
            error: err.name,
            message: "JWT error"
        });
    }

    const admin = await User
        .findById(decodedAdmin._id)
        .exec();

    if (!admin || admin.role !== "admin") {
        return res.json({
            success: false,
            message: "access forbidden"
        });
    }

    req.admin = admin;
    next();

};

const guide = async (req, res, next) => {

    if (!req.headers.authorization) {
        return res.json({
            success: false,
            message: "authorization header required"
        });
    }

    const token = req.headers.authorization.replace("Bearer ", "");
    let decodedGuide;

    try {
        decodedGuide = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        return res.json({
            success: false,
            error: err.name,
            message: "JWT error"
        });
    }

    const guide = await User
        .findById(decodedGuide._id)
        .exec();

    if (!guide || guide.role !== "guide") {
        return res.json({
            success: false,
            message: "access forbidden"
        });
    }

    req.guide = guide;
    next();

};

/*check if document(place/media/price) trying to access was created by this guide*/
const guideAccess = async (req, res, next) => {

    if (!req.headers.authorization) {
        return res.json({
            success: false,
            message: "authorization header required"
        });
    }

    const token = req.headers.authorization.replace("Bearer ", "");
    let decodedGuide;

    try {
        decodedGuide = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        return res.json({
            success: false,
            error: err.name,
            message: "JWT error"
        });
    }

    const place = await Place
        .findById(req.params.placeId, "guide")
        .exec();
    /*if(place.guide.toString() != decodedGuide._id.toString()) to use !== */
    if(place.guide != decodedGuide._id) {
        return res.json({
            success: false,
            message: "place not created by you"
        });
    }

    next();
};

const client = async (req, res, next) => {

    if (!req.headers.authorization) {
        return res.json({
            success: false,
            message: "authorization header required"
        });
    }

    const token = req.headers.authorization.replace("Bearer ", "");
    let decodedClient;

    try {
        decodedClient = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        return res.json({
            success: false,
            error: err.name,
            message: "JWT error"
        });
    }

    const client = await User
        .findById(decodedClient._id)
        .exec();

    if (!client || client.role !== "client") {
        return res.json({
            success: false,
            message: "access forbidden"
        });
    }

    req.client = client;
    next();

};

module.exports = {
    admin,
    guide,
    guideAccess,
    client
};
