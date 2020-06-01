const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.listen(process.env.PORT);

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

require("./config/db");
app.use(require("./routes/base"));

/*
* users.areas ???
* check if categories, countries, cities etc _id's exist
* MediaController getByType query
* Schemas, declare array of strings, objects
* pass req.params from root route (media, prices)
* Media, Prices list -> simpler response
* db.places save _id or object into places[] for children documents
* when deleting place, delete its id from all fields (softdelete?)
* error handling
* */
