const mongoose = require("mongoose");
const bcrypt = require("mongoose-bcrypt");

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
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
    role: {
        type: String,
        required: true,
        default: "client",
        enum: ["client", "guide", "admin"]
    },
    areas: {
        type: Array,
        required: false
    },
    title: {
        type: String,
        required: () => {return this.role === "guide"}
    },
    favorites: {
        type: Array
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
        type: mongoose.Types.ObjectId,
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
        type: mongoose.Types.ObjectId,
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
        type: Array,
        required: true
    },
    places: {
        type: Array,
        required: false
    },
    photo: {
        type: String,
        required: false
    },
    gallery: {
        type: Array,
        required: false
    },
    country: {
        type: mongoose.Types.ObjectId,
        ref: "Country",
        required: true
    },
    city: {
        type: mongoose.Types.ObjectId,
        ref: "City",
        required: true
    },
    media: {
        type: Array,
        required: false
    },
    description: {
        type: Array,
        required: true
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
        required: true
    },
    prices: {
        type: Array,
        required: false
    }
}, {
    timestamps: true
});
global.Place = mongoose.model("place", placeSchema);
