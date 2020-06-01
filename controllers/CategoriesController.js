const create = async (req, res) => {
    let alias = req.body.name.toLowerCase().replace(/ /g, "-");
    const category = new Category({
        name: req.body.name,
        alias,
        photo: req.body.photo,
        description: req.body.description
    });
    await category.save();
    res.json({
        success: true,
        message: "Category added"
    })
};

const update = async (req, res) => {
    let alias = req.body.name.toLowerCase().replace(/ /g, "-");
    await Category
        .updateOne({ _id: req.params.categoryId }, {
            name: req.body.name,
            alias,
            photo: req.body.photo,
            description: req.body.description
        })
        .exec();
    res.json({
        success: true,
        message: "category updated"
    });
};

const deleteOne = async (req, res) => {
    await Category
        .deleteOne({ _id: req.params.categoryId })
        .exec();
    res.json({
        success: true,
        message: "category deleted"
    });
};

const list = async (req, res) => {
    const categories = await Category
        .find({})
        .exec();
    res.json({
        success: true,
        categories
    });
};

const getOne = async (req, res) => {
    const category = await Category
        .findById(req.params.categoryId)
        .exec();
    res.json({
        success: true,
        category
    });
};

module.exports = {
    create,
    update,
    deleteOne,
    list,
    getOne
};
