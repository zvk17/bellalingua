const mongoose = require("mongoose"),
      Schema = mongoose.Schema;

let FeedbackSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 40
    },
    email: {
        type: String,
        required: true,
        maxlength: 40
    },
    subject: {
        type: String,
        required: true,
        maxlength: 40
    },
    text: {
        type: String,
        required: true,
        maxlength: 200
    },
    timestamp: {
        type: Date,
        "default": Date.now
    }
});
module.exports = mongoose.model('Feedback', FeedbackSchema);
