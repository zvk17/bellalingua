const mongoose = require("mongoose"),
      Schema = mongoose.Schema;

let LessonSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    langId: {
        type:Schema.Types.ObjectId,
        ref: "Language",
        required: true
    },
    typeOfLesson: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model("Lesson", LessonSchema);
