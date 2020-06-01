const shortid = require("shortid");

const add = async (req, res) => {
    const price = {
        _id: shortid.generate(),
        name: req.body.name,
        price: req.body.price,
        days: req.body.days
    };
    await Place.updateOne(
        { _id: req.params.placeId },
        { $push: { prices: price } }
    ).exec();
    res.json({
        success: true,
        message: "price added"
    });
};

const update = async (req, res) => {
    await Place.updateOne(
        { _id: req.params.placeId, "prices._id": req.params.priceId },
        { $set: {
                "prices.$.name": req.body.name,
                "prices.$.price": req.body.price,
                "prices.$.days": req.body.days
            }
        }
    ).exec();
    res.json({
        success: true,
        message: "price updated"
    });
};

const deleteOne = async (req, res) => {
    await Place.updateOne(
        { _id: req.params.placeId },
        { $pull: { prices: {_id: req.params.priceId}} }
    ).exec();
    res.json({
        success: true,
        message: "price deleted"
    });
};

const list = async (req, res) => {
    const prices = await Place
        .findOne({ _id: req.params.placeId }, "prices")
        .exec();
    res.json({
        success: true,
        prices
    });
};

module.exports = {
    add,
    deleteOne,
    update,
    list
};
