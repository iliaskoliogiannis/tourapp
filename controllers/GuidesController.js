const create = async (req, res) => {
    const guide = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        role: "guide",
        title: req.body.title
    });
    await guide.save();

    res.json({
        success: true,
        message: "Guide created",
        guide
    });
};

const deleteOne = async (req, res) => {
    await User
        .deleteOne({_id: req.params.guideId})
        .exec();
    res.json({
        success: true,
        message: "guide deleted"
    })
};

const list = async (req, res) => {
    const guides = await User
        .find({role: "guide"})
        .exec();
    res.json({
        success: true,
        guides
    })
};

const getOne = async (req, res) => {
    const guide = await User
        .findById(req.params.guideId)
        .exec();
    res.json({
        success: true,
        guide
    });
};

module.exports = {
    create,
    deleteOne,
    list,
    getOne
};
