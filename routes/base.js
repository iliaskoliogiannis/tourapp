const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Home"
    })
});

const GC = require("../controllers/GalleriesController");
route.get("/:placeId/galleries", GC.list);
route.post("/:placeId/galleries", GC.add);
route.put("/:placeId/galleries", GC.rearrange);
route.delete("/:placeId/galleries/:galleryImgId", GC.deleteOne);
route.delete("/:placeId/galleries", GC.deleteMany);
route.use("/admin", require("./admin/admin"));
route.use("/guide", require("./guide/guide"));
route.use("/client", require("./client/client"));

module.exports = route;
