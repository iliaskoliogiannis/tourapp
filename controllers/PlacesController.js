const create = async (req, res) => {
    let guide;
    if(req.admin) {
        guide = req.admin._id;
    } else if(req.guide) {
        guide = req.guide._id;
    } else {
        return json({
            success: false,
            message: "invalid role"
        });
    }

    let alias = req.body.name.toLowerCase().replace(/ /g, "-");
    const place = new Place({
        guide: guide,
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
    // places, media, prices to be added after initial creation
    await place.save()
        .then(async () => {
            await User.updateOne(
                { _id: guide },
                { $push: { places: objId(place._id) } }
            ).exec();
            res.json({
                success: true,
                message: "place created"
            });
        })
        .catch((error) => {
            res.json({
                success: false,
                message: "place not created",
                error
            })
        });
};

const nestedAdd = async (req, res) => {
    await Place.updateOne(
        { _id: req.params.placeId },
        { $push: { places: objId(req.params.childplaceId) } }
    ).exec();
    res.json({
        success: true,
        message: "place added to nest"
    });
};

const nestedDelete = async (req, res) => {
    await Place.updateOne(
        { _id: req.params.placeId },
        { $pull: { places: objId(req.params.childplaceId) } }
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
    await User
        .updateOne(
            { _id: req.guide._id },
            { $pull: { places: objId(req.params.placeId) } }
        )
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

const getByCategory = async (req, res) => {
    const category = await Category
        .findById(req.params.categoryId)
        .exec();
    const place = await Place
        .find({ category: req.params.categoryId })
        .exec();
    res.json({
        success: true,
        category,
        place
    });
};

// admin/guide/:guideId
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

// admin/places/admin/created or guide/places/guide/created
const getCreatedByGuide = async (req, res) => {
    let g;
    if(req.admin) {
        g = req.admin._id;
    } else if(req.guide) {
        g = req.guide._id;
    } else {
        return json({
            success: false,
            message: "invalid role"
        });
    }

    const guide = await User
        .findById(g)
        .exec();
    const places = await Place
        .find({ guide: g })
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
    getByCategory,
    getByGuide,
    getCreatedByGuide
};

