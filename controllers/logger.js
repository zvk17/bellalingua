const Models = require("../models/model");
module.exports = {
    index(req, res, next) {
        
        if (!(req.app.get("env") === 'development')){
            let log = new Models.Logger({
                "ip": req.headers['x-forwarded-for'],
                "url": req.url,
                "referer": req.headers["referer"],
                "user-agent": req.headers["user-agent"],
            });
            log.save((err,log)=>{
                if (err) {
                    console.log(err);
                }
                console.log(log);
            });
        }

        next();
    }

};
