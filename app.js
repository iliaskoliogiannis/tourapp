const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.listen(process.env.PORT);

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

require("./config/functions");
require("./config/db");
app.use(require("./routes/base"));

/*
* when deleting place, delete its id from all fields (soft delete???)
* routes how to tell places/:placeId from places/guides
* */
