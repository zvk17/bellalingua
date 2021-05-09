const mongoose = require("mongoose"),
      Schema = mongoose.Schema;

let LanguageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    fromLanguage: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image : {
        type: String,
        required: true
    },
    langId: {
        type: String,
        required: true,
        maxlength: 2
    }
});

module.exports = mongoose.model("Language", LanguageSchema);
