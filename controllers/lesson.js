const path = require("path"),
      validator = require("validator"),
      waterfall = require("async").waterfall,
      marked = require("marked"),
      helper = require("../models/helper");


module.exports = {
    index(req,res){
        let params = req.params;
        if (!(validator.isAlpha(params.langId) && validator.isAlphanumeric(params.lessonId))){
            res.send(404, {error:"Not found"});
            return;
        }
        waterfall([
            helper.findUniqueLanguage(params),
            helper.findUniqueLesson(params),
            helper.findExercises
        ],
        (err, obj)=> {
            if (err) {
                if (err == "Not found") {
                    res.send(404, "Not found");
                } else {
                    res.send(500, "Internal error");
                }
                return;
            }
            let list = {
                title: obj.lesson.name,
                breadcrumbs: [
                    {
                        name:"Jezici",
                        href:"/languages"
                    }, {
                        name: obj.language.name,
                        href: path.join("/languages",obj.language.langId, "/lessons")
                    }, {
                        name: obj.lesson.name,
                        href: path.join("/languages",obj.language.langId, "/lessons", obj.lesson._id.toString())
                    }
                ],
                list: obj.exercises.map(exercise=>{
                    return {
                        title: exercise.name,
                        description: exercise.description,
                        href: path.join(req.url,"/exercise/",exercise._id.toString())
                    };
                }),
                description: marked(obj.lesson.description)
            }
            res.render("list", list);

        });
    }
}
