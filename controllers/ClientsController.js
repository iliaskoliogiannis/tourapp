const list = async (req, res) => {
    const clients = await User
        .find({role: "client"})
        .exec();
    res.json({
        success: true,
        clients
    })
};

const addToFavorites = async (req, res) => {
    console.log("client ", req.client._id);
    await User
        .updateOne(
            { _id: req.client._id },
            { $push: {favorites: objId(req.params.placeId)} }
        ).exec();
    res.json({
        success: true,
        message: "place added to favorites"
    });
};

const deleteFromFavorites = async (req, res) => {
    await User
        .updateOne(
            { _id: req.client._id },
            { $pull: {favorites: objId(req.params.placeId)} }
        ).exec();
    res.json({
        success: true,
        message: "place removed from favorites"
    });
};

const listFavorites = async (req, res) => {
    try {
        const place = await User
            .findById(req.client._id, "favorites")
            .populate("favorites")
            .exec();

        res.json({
            success: true,
            place
        });
    } catch (error) {
        res.json({
            success: false,
            error: error.name
        });
    }
};

module.exports = {
    list,
    addToFavorites,
    deleteFromFavorites,
    listFavorites
};
