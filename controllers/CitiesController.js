const create = async (req, res) => {
    let alias = req.body.name.toLowerCase().replace(/ /g, "-");
    const city = new City({
        name: req.body.name,
        alias,
        photo: req.body.photo,
        country: req.body.country
    });
    await city.save();
    res.json({
        success: true,
        message: "City added"
    })
};

const update = async (req, res) => {
    let alias = req.body.name.toLowerCase().replace(/ /g, "-");
    await City
        .updateOne({ _id: req.params.cityId }, {
            name: req.body.name,
            alias,
            photo: req.body.photo,
            country: req.body.country
        })
        .exec();
    res.json({
        success: true,
        message: "city updated"
    });
};

const deleteOne = async (req, res) => {
    await City
        .deleteOne({ _id: req.params.cityId })
        .exec();
    res.json({
        success: true,
        message: "city deleted"
    });
};

const list = async (req, res) => {
    const cities = await City
        .find({})
        .exec();
    res.json({
        success: true,
        cities
    });
};

const getOne = async (req, res) => {
    const city = await City
        .findById(req.params.cityId)
        .exec();
    res.json({
        success: true,
        city
    });
};

const getByCountry = async (req, res) => {
    const country = await Country
        .findById(req.params.countryId)
        .exec();
    const cities = await City
        .find({ country: req.params.countryId })
        .exec();
    res.json({
        success: true,
        country,
        cities
    });
};

module.exports = {
    create,
    deleteOne,
    update,
    list,
    getOne,
    getByCountry
};
