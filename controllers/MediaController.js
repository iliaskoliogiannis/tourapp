const mongoose = require("mongoose");
const shortid = require("shortid");

const add = async (req, res) => {
    const media = {
        _id: shortid.generate(),
        name: req.body.name,
        type: req.body.type,
        url: req.body.url
    };
    await Place.updateOne(
        { _id: req.params.placeId },
        { $push: {media: media} }
    ).exec();

    res.json({
        success: true,
        message: "media added"
    });
};

const deleteOne = async (req, res) => {
    await Place.updateOne(
        { _id: req.params.placeId },
        { $pull: {media: {_id: req.params.mediaId}} })
        .exec();

    res.json({
        success: true,
        message: "media deleted"
    });
};

const list = async (req, res) => {
    const media = await Place
        .findOne({ _id: req.params.placeId }, "media")
        .exec();
    res.json({
        success: true,
        media
    });
};

const getByType = async (req, res) => {
    const place = await Place
        .aggregate([
            { $match: { _id: new mongoose.Types.ObjectId(req.params.placeId) }},
            { $project: {
                media: {
                    $filter: {
                        input: "$media",
                        as: "media",
                        cond: { $eq: ["$$media.type", req.params.mediaType] }
                    }
                }
            }}
        ]);
    res.json({
        success: true,
        place
    });
};

// const getByType = async (req, res) => {
//     const place = await Place
//         .findOne({ _id: req.params.placeId }, "media")
//         .exec();
//     let media = place.media.filter( m => m.type === req.params.mediaType);
//     res.json({
//         success: true,
//         media
//     });
// };

module.exports = {
    add,
    deleteOne,
    list,
    getByType
};
