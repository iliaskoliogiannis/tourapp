const create = async (req, res) => {
    let alias = req.body.name.toLowerCase().replace(/ /g, "-");
    const country = new Country({
        name: req.body.name,
        alias,
        flag: req.body.flag
    });
    await country.save();
    res.json({
        success: true,
        message: "Country added"
    })
};

const deleteOne = async (req, res) => {
    await Country
        .deleteOne({ _id: req.params.countryId })
        .exec();
    res.json({
        success: true,
        message: "country deleted"
    });
};

const list = async (req, res) => {
    const countries = await Country.find({}).exec();
    return res.json({
        success: true,
        countries
    });
};

const getOne = async (req, res) => {
    const country = await Country
        .findById(req.params.countryId)
        .exec();
    return res.json({
        success: true,
        country
    });
};

module.exports = {
    create,
    deleteOne,
    list,
    getOne
};
