const mongoose = require("mongoose"),
      Schema = mongoose.Schema;

let ExerciseSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    description: {
        type: String,
        required: true
    },
    questions: [
         {
             type: String
         }
    ],
    lessonId: {
        type: Schema.Types.ObjectId,
        ref: "Lesson",
        required: true
    }
});
module.exports = mongoose.model("Exercise", ExerciseSchema);
