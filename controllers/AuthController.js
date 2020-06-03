const jwt = require("jsonwebtoken");

const adminLogin = async (req, res) => {
    const user = await User
        .findOne({
            email: req.body.email,
            role: "admin"
        })
        .exec();

    if(user === null) {
        return res.json({
           success: false,
           message: "Wrong credentials"
        });
    }

    if(user.verifyPasswordSync(req.body.password)) {
        const token = jwt.sign(
            {
                _id: user._id,
                username: user.username,
                email: user.email
            },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        return res.json({
            success: true,
            token,
            user: {
                _id: user._id,
                username: user.username,
                email: user.email
            }
        });
    } else {
        return res.json({
           success: false,
           message: "Wrong Credentials"
        });
    }
};

const guideLogin = async (req, res) => {
    const user = await User
        .findOne({
            email: req.body.email,
            role: "guide"
        })
        .exec();

    if(user === null) {
        return res.json({
            success: false,
            message: "Wrong credentials"
        });
    }

    if(user.verifyPasswordSync(req.body.password)) {
        const token = jwt.sign(
            {
                _id: user._id,
                username: user.username,
                email: user.email
            },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        return res.json({
            success: true,
            token,
            user: {
                _id: user._id,
                username: user.username,
                email: user.email
            }
        });
    } else {
        return res.json({
            success: false,
            message: "Wrong Credentials"
        });
    }
};

const clientLogin = async (req, res) => {
    const user = await User
        .findOne({
            email: req.body.email,
            role: "client"
        })
        .exec();

    if(user === null) {
        return res.json({
            success: false,
            message: "Wrong credentials"
        });
    }

    if(user.verifyPasswordSync(req.body.password)) {
        const token = jwt.sign(
            {
                _id: user._id,
                username: user.username,
                email: user.email
            },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        return res.json({
            success: true,
            token,
            user: {
                _id: user._id,
                username: user.username,
                email: user.email
            }
        });
    } else {
        return res.json({
            success: false,
            message: "Wrong Credentials"
        });
    }
};

const clientRegister = async (req, res) => {
    const user = new User({
        role: "client",
        email: req.body.email,
        password: req.body.password
    });
    await user.save()
        .then(() => {
            const token = jwt.sign(
                {
                    _id: user._id,
                    username: user.username,
                    email: user.email
                },
                process.env.JWT_SECRET,
                { expiresIn: process.env.JWT_EXPIRES_IN }
            );

            return res.json({
                success: true,
                token,
                user: {
                    _id: user._id,
                    username: user.username,
                    email: user.email
                },
                message: "Client Created"
            });
        })
        .catch((error) => {
            res.json({
                success: false,
                message: "Client not created",
                error
            })
        });
};

module.exports = {
    adminLogin,
    guideLogin,
    clientLogin,
    clientRegister
};
