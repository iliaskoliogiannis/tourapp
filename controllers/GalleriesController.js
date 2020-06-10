const add = async (req, res) => {

    function galleryImg (_id, photo, position) {
            this._id = _id;
            this.photo = photo;
            this.position = position;
    }
    const gallery = [];
    for (let p of req.body.gallery) {
        const newGalleryImg = new galleryImg(new mongoose.Types.ObjectId, p.photo, p.position);
        gallery.push(newGalleryImg);
    }

    try {
        await Place.updateOne(
            { _id: req.params.placeId },
            { $push: { gallery: {$each: gallery} } }
        ).exec();
    } catch (error) {
        return res.json({
            success: false,
            error: error.name,
            message: error.errmsg
        });
    }

    res.json({
        success: true,
        message: "gallery added"
    });
};

const rearrange = async (req, res) => {

    function galleryImg (photo, position) {
        this.photo = photo;
        this.position = position;
    }
    const gallery = []; // rewrite with less
    for (let p of req.body.gallery) {
        const newGalleryImg = new galleryImg(p.photo, p.position);
        gallery.push(newGalleryImg);
    }

    try {
        await Place.update(
            { _id: req.params.placeId },
            { $set: { gallery: gallery } } // { $set: { gallery: req.body.gallery } }
            )
            .exec();
    } catch (error) {
        return res.json({
            success: false,
            error: error.name,
            message: error.errmsg
        });
    }

    res.json({
        success: true,
        message: "Gallery rearranged"
    });
};

// const rearrange = async (req, res) => {
//
//     try {
//         await Place.updateMany(
//             { _id: req.params.placeId, $each: { "gallery._id": new mongoose.Types.ObjectId(req.body._id) } },
//             { $set: { "gallery.$.position": req.body.position }},
//             {"multi": true}
//         ).exec();
//     } catch (error) {
//         return res.json({
//             success: false,
//             error: error.name,
//             message: error.errmsg
//         });
//     }
//
//     res.json({
//         success: true,
//         message: "Gallery rearranged"
//     });
// };

const deleteOne = async (req, res) => {
    try {
        await Place.updateOne(
            { _id: req.params.placeId },
            { $pull: { gallery: { _id: objId(req.params.galleryImgId) }} }
        ).exec();
    } catch (error) {
        return res.json({
            success: false,
            error: error.name,
            message: error.errmsg
        });
    }

    res.json({
        success: true,
        message: "gallery img deleted"
    });
};

// $pullAll
const deleteMany = async (req, res) => {
    //req.body = ["id1", "id2",...]
    const images = req.body.map(img => objId(img));

    try {
        await Place.updateOne(
            { _id: req.params.placeId },
            { $pull: { gallery: { _id: {$in: images}} }}
        ).exec();
    } catch (error) {
        return res.json({
            success: false,
            error: error.name,
            message: error.errmsg
        });
    }

    res.json({
        success: true,
        message: images.length + " gallery images deleted"
    });
};

const list = async (req, res) => {
    let place;
    try {
        place = await Place
            .findById(req.params.placeId, "gallery")
            .exec();
    } catch (error) {
        return res.json({
            success: false,
            error: error.name,
            message: error.errmsg
        });
    }

    res.json({
        success: true,
        place
    });
};

module.exports = {
    add,
    rearrange,
    deleteOne,
    deleteMany,
    list
};
