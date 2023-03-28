const mongoose = require('mongoose')

const ListSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    type: { type: String },
    thumbnail: { type: String },
    year: { Number },
    type: { type: String },
    rating: { type: String },
    isSeries: { type: Boolean, default: false },
    content: { type: Array }
},
    { timestamps: true }
);

module.export = mongoose.model("List", ListSchema);