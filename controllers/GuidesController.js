const create = async (req, res) => {
    const guide = new User({
        role: "guide",
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        title: req.body.title
    });
    await guide.save()
        .then(() => {
            res.json({
                success: true,
                message: "Guide created",
                guide
            })
        })
        .catch((error) => {
            res.json({
                success: false,
                message: "Guide not created",
                error
            })
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
