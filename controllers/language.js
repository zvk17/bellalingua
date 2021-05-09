const path = require("path"),
      validator = require("validator"),
      waterfall = require("async").waterfall,
      Models = require("../models/model"),
      helper = require("../models/helper");

module.exports = {
    index(req, res) {
        Models.Language.find({fromLanguage:"sr"},
            null,
            {sort: {name: 1}},
            (err, langs) => {
                if (err) {
                    console.log(err);
                    res.send(500, {error:"Internal error"});
                    return;
                }

                let list = {
                    title: "Lista jezika",                    
                    list: langs.map(lang=>{
                        return {
                            title: lang.name,
                            href: path.join(req.url, lang.langId, "/lessons"),
                            description: lang.description,
                            image: lang.image
                        }
                    })
                };

                res.render("list", list);
        });


    },



    lessons(req,res) {
        let p = req.params;
        if (!validator.isAlpha(p.langId) || !validator.isByteLength(p.langId,{max:2,min:2})) {
            res.send(404,"File not found!");
            return;
        }
        waterfall([
            helper.findUniqueLanguage(p),
            helper.findLessons
        ], (err,results)=> {

            if (err) {
                if (err === "Not found") {
                    res.send(400, "Not found");
                } else {
                    res.send(500, "Internal error");
                }
                return;
            }

            let language = results.language;
            let lessons = results.lessons;

            let list = {
                title: language.name,
                breadcrumbs: [
                    {
                        name:"Jezici",
                        href:"/languages"
                    },{
                        name:language.name,
                        href: path.join("/languages", language.langId, "/lessons")
                    }
                ],
                list: lessons.map(lesson=>{
                    return {
                        title: lesson.name,
                        href: path.join(req.url, lesson._id.toString()),
                        description:"",
                        image:""
                    }
                }),
                description: ""
            }
            res.render("list", list);
        });
    }
};
