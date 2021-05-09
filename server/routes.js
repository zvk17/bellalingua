const feedback = require("../controllers/feedback"),
      lesson = require("../controllers/lesson"),
      language = require("../controllers/language"),
      exercise = require("../controllers/exercise"),
      about = require("../controllers/about"),
      front = require("../controllers/front"),
      logger = require("../controllers/logger");



module.exports = app => {

    app.get("*", logger.index);

    app.get("/", front.index);


    app.get("/feedback", feedback.index);
    app.post("/feedback", feedback.send);

    app.get("/about", about.index);


    app.get("/languages", language.index);
    app.get("/languages/:langId/lessons", language.lessons);
    app.get("/languages/:langId/lessons/:lessonId", lesson.index);
    app.get("/languages/:langId/lessons/:lessonId/exercise/:exerciseId", exercise.index);



    app.get("/data/:langId", require("../controllers/languageData").index)

    return app;
}
