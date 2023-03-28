const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String },
    thumbnail: { type: String },
    year: { Number },
    type: { type: String },
    rating: { type: String },
    isSeries: { type: Boolean, default: false }
},
    { timestamps: true }
);

module.export = mongoose.model("Movie", MovieSchema);