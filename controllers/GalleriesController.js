const add = async (req, res) => {
    const galleryImg = ( _id ,photo, position) => {
            this._id = _id;
            this.photo = photo;
            this.position = position;
    };
    const gallery = [];
    for (let p of req.params.gallery) {
        const newGalleryImg = new galleryImg(new mongoose.Types.ObjectId, p.photo, p.position);
        gallery.push(newGalleryImg);
    }
    await Place.updateOne(
        { _id: req.params.placeId },
        { $addToSet: { gallery: gallery } }
    ).exec();

    res.json({
        success: true,
        message: "media added"
    });
};

const deleteOne = async (req, res) => {
    await Place.updateOne(
        { _id: req.params.placeId },
        { $pull: { gallery: { _id: objId(req.params.galleryImgId) }} }
    ).exec();

    res.json({
        success: true,
        message: "media added"
    });
};

module.exports = {
    add,
    deleteOne
};
