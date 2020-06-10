global.mongoose = require("mongoose");
const bcrypt = require("mongoose-bcrypt");

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const userSchema = mongoose.Schema({
    role: {
        type: String,
        required: true,
        default: "client",
        enum: ["client", "guide", "admin"]
    },
    username: {
        type: String,
        required: function() {return !(this.role === "client")}
    },
    password: {
        type: String,
        required: true,
        bcrypt: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    places: {
        type: mongoose.Schema.Types.Mixed,
        ref: "Place",
        required: function() {return !(this.role === "client")}
    },
    title: {
        type: String,
        required: function() {return !(this.role === "client")}
    },
    favorites: {
        type: mongoose.Schema.Types.Mixed,
        ref: "Place",
        required: function() {return this.role === "client"}
    }
}, {
    timestamps: true
});
userSchema.plugin(bcrypt);
global.User = mongoose.model("User", userSchema);

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    alias: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
global.Category = mongoose.model("Category", categorySchema);

const citySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    alias: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    country: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Country",
        required: true
    }
}, {
    timestamps: true
});
global.City = mongoose.model("City", citySchema);

const countrySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    alias: {
        type: String,
        required: true
    },
    flag: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
global.Country = mongoose.model("Country", countrySchema);

const placeSchema = mongoose.Schema({
    guide: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    alias: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    polygon: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    places: {
        type: mongoose.Schema.Types.Mixed,
        ref: "Place",
        required: false
    },
    photo: {
        type: String,
        required: false
    },
    gallery: {
        type: mongoose.Schema.Types.Mixed,
        required: false
    },
    country: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Country",
        required: true
    },
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "City",
        required: true
    },
    media: {
        type: mongoose.Schema.Types.Mixed, //array
        required: false
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    prices: {
        type: mongoose.Schema.Types.Mixed, //array
        required: false
    }
}, {
    timestamps: true
});
global.Place = mongoose.model("Place", placeSchema);
