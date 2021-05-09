const path = require("path"),
      validator = require("validator"),
      waterfall = require("async").waterfall,
      Models = require("../models/model"),
      helper = require("../models/helper");


module.exports = {
    index(req,res){
        let p = req.params;
        if (!validator.isAlphanumeric(p.lessonId+p.exerciseId) || !validator.isAlpha(p.langId)) {
            res.send(404, "Not found");
            return;
        }
        waterfall([
            helper.findUniqueLanguage(p),
            helper.findUniqueLesson(p),
            helper.findUniqueExercise(p)
        ],
        (err,results)=> {
            if (err) {
                if (err == "Not found") {
                    res.send(404, "Not found");
                } else {
                    res.send(500, "Internal error");
                }
                return;
            }
            let exercise = {
                title: results.exercise.name,
                breadcrumbs: [
                    {
                        name:"Jezici",
                        href:"/languages"
                    }, {
                        name: results.language.name,
                        href: path.join("/languages",results.language.langId, "/lessons")
                    }, {
                        name: results.lesson.name,
                        href: path.join("/languages",results.language.langId, "/lessons", results.lesson._id.toString())
                    }, {
                        name: results.exercise.name,
                        href: path.join("/languages",results.language.langId, "/lessons", results.lesson._id.toString(), "/exercise", results.exercise._id.toString())
                    }

                ],
                questions: JSON.stringify(results.exercise.questions),
                langId: results.language.langId
            }
            res.render("exercise", exercise);
        });
    }
}
