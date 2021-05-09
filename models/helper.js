const waterfall = require("async").waterfall,
      Models = require("../models/model");

let checkIfFound = (callback) => {
    return (err,result) => {
        if (!result) {
            callback("Not found!");
        } else {
            callback(err, result);
        }
    }

}

module.exports = {
    findUniqueLanguage(p){
        return (callback)=>{
            Models.Language.findOne(
                {fromLanguage: "sr", langId: p.langId},
                null,
                checkIfFound(callback)
            );
        }
    },
    findLessons(language, callback){
        Models.Lesson.find({"langId":language._id})
            .exec(
                (err,lessons)=>{
                    if (!lessons)
                        callback("Not found");
                    else
                        callback(err, {language, lessons});
                }
            );
    },
    findUniqueLesson(p) {
        return (language, callback)=> {
            Models.Lesson.findOne(
                {_id:p.lessonId, langId: language._id},
                null,
                (err,lesson)=> {
                    if (!lesson)
                        callback("Not found");
                    else
                        callback(err, {language, lesson});
                }
            );
        }
    },
    findExercises(obj,callback){
        Models.Exercise.find(
            {lessonId: obj.lesson._id}).exec(
            (err, exercises) => {
                if (!exercises)
                    callback("Not found");
                else {
                    obj.exercises = exercises;
                    callback(err,obj);
                }
            }
        );
    },
    findUniqueExercise(p){
        return (obj,callback) => {
            Models.Exercise.findOne(
                {_id: p.exerciseId, lessonId: p.lessonId },
                null,
                (err,exercise)=> {
                    if (!exercise)
                        callback("Not found");
                    else {
                        obj.exercise = exercise;
                        callback(err,obj);
                    }
                }
            );
        }
    }
}
