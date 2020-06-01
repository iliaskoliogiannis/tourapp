// guide._id shall be passed through middleware: req.guideId

const create = async (req, res) => {
    let alias = req.body.name.toLowerCase().replace(/ /g, "-");
    const place = new Place({
        guide: req.body.guide, // req.guideId
        name: req.body.name,
        alias,
        address: req.body.address,
        polygon: req.body.polygon,
        photo: req.body.photo,
        gallery: req.body.gallery,
        country: req.body.country,
        city: req.body.city,
        description: req.body.description,
        category: req.body.category
    });
    // places, media, prices after initial creation
    await place.save();
    res.json({
        success: true,
        message: "place created"
    });
};

const nestedAdd = async (req, res) => {
    await Place.updateOne(
        { _id: req.params.placeId },
        { $push: { places: req.params.childplaceId } }
    ).exec();
    res.json({
        success: true,
        message: "place added to nest"
    });
};

const nestedDelete = async (req, res) => {
    await Place.updateOne(
        { _id: req.params.placeId },
        { $pull: { places: req.params.childplaceId } }
    );
    res.json({
        success: true,
        message: "place removed from nest"
    });
};

const update = async (req, res) => {
    let alias = req.body.name.toLowerCase().replace(/ /g, "-");
    await Place.updateOne({_id: req.params.placeId}, {
        name: req.body.name,
        alias,
        address: req.body.address,
        polygon: req.body.polygon,
        photo: req.body.photo,
        gallery: req.body.gallery,
        country: req.body.country,
        city: req.body.city,
        description: req.body.description,
        category: req.body.category
    }).exec();

    res.json({
        success: true,
        message: "place updated"
    });
};

const deleteOne = async (req, res) => {
    await Place
        .deleteOne({_id: req.params.placeId})
        .exec();
    res.json({
        success: true,
        message: "place deleted"
    });
};

const list = async (req, res) => {
    const places = await Place
        .find({})
        .exec();
    res.json({
        success: true,
        places
    });
};

const getOne = async (req, res) => {
    const place = await Place
        .findById(req.params.placeId)
        .exec();
    res.json({
        success: true,
        place
    });
};

const getByCity = async (req, res) => {
    const city = await City
        .findById(req.params.cityId)
        .exec();
    const places = await Place
        .find({ city: req.params.cityId })
        .exec();
    res.json({
        success: true,
        city,
        places
    });
};

const getByCountry = async (req, res) => {
    const country = await Country
        .findById(req.params.countryId)
        .exec();
    const places = await Place
        .find({ country: req.params.countryId })
        .exec();
    res.json({
        success: true,
        country,
        places
    });
};

const getByGuide = async (req, res) => {
    const guide = await User
        .findById(req.params.guideId)
        .exec();
    const places = await Place
        .find({ guide: req.params.guideId })
        .exec();
    res.json({
        success: true,
        guide,
        places
    });
};

module.exports = {
    create,
    nestedAdd,
    nestedDelete,
    update,
    deleteOne,
    list,
    getOne,
    getByCity,
    getByCountry,
    getByGuide
};

/*add feature by who it was created*/
