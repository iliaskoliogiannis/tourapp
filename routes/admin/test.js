const express = require("express");
const route = express.Router();

route.get("/key2/:key2", (req, res) => {
    res.json({
        params: req.params,
        key1: "key1: " + req.key1,
        key2: "key2: " + req.params.key2
    });
});

module.exports = route;
