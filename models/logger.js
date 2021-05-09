let mongoose = require("mongoose"),
    Schema = mongoose.Schema;

let LoggerSchema = new Schema({
    "ip": {
        type: String,
        maxlength: 50
    },
    "user-agent": {
        type: String,
        maxlength: 250
    },
    "referer": {
        type: String,
        maxlength: 250
    },
    "url": {
        type: String,
        maxlength: 250
    },
    "timestamp": {
        type: Date,
        "default": Date.now
    }
});
module.exports = mongoose.model("Logger", LoggerSchema);
