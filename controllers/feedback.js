const model = require("../models/model");

module.exports = {
    index(req,res) {
        res.render("feedback", {title:"Feedback"});
    },
    send(req,res) {

        let name = req.body.name,
            email = req.body.email,
            subject = req.body.subject,
            text = req.body.text;

        let regexLettersWithSpace = /^[a-zA-Z ]*$/;

        req.checkBody("email", "Please enter a valid email address.").isEmail();
        req.checkBody("name", "Please use only letters and spaces.")
            .notEmpty()
            .matches(regexLettersWithSpace);

        req.checkBody("subject", "Please use only letters and spaces.")
            .notEmpty()
            .matches(regexLettersWithSpace);

        req.checkBody("text", "Please insert feedback.").notEmpty();
        req.sanitizeBody("text").escape();

        let errors = req.validationErrors();

        if (errors) {
            return res.json({errors});
        }

        let feedback = new model.Feedback({
            name: name,
            email: email,
            subject: subject,
            text: text
        });
        feedback.save((err, feedback)=>{
            if (err){
                res.json(500,{"error":"internal error"});
            } else {
                res.json({"status":"ok"});
            }
        })
    }
};
