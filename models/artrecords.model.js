const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const recordSchema = new Schema({
    artName: {
        type: String,
        trim: true
    },
    serial: {
        type: Number
    },
    src: {
        type: String,
        required: true
    },
    alt: {
        type: String
    },
    bids: [{
        user: {
            type: String,
            required: true
        },
        bid: {
            type: String,
            required: true
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});
const ArtRecords = mongoose.model("artrecord", recordSchema);

module.exports = ArtRecords;