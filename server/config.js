const bodyParser = require("body-parser"),
      express = require("express"),
      routes = require("./routes"),
      path = require("path"),
      hbs = require('express-handlebars'),
      cookieParser = require('cookie-parser'),
      morgan = require('morgan'),
      methodOverride = require('method-override'),
      expressValidator = require("express-validator"),
      errorHandler = require('errorhandler');
module.exports = app => {

    app.use(expressValidator());
    
    app.use((req,res,next)=>{
        // za više informacija pogledaj
        // https://www.smashingmagazine.com/2017/04/secure-web-app-http-headers/
        res.set({
            "X-XSS-Protection":"1; mode=block", // blokira XSS
            "X-Frame-Options": "SAMEORIGIN",  // dozvoljava iframe samo sa mog domena
            "X-Content-Type-Options":"nosniff"
            //to znaiči da mora da se poštuje mime type koji šalje server
        });
        next();
    });

    app.set("views", path.join(app.get("rootDirectory") , '/views'));

    app.engine('handlebars', hbs.create({
        defaultLayout: 'main',
        layoutsDir: app.get('views') + '/layouts',
        partialsDir: [app.get('views') + '/partials'],
        helpers: {
            host: () => {
                return app.get("host")
            }
        }
    }).engine);

    app.set('view engine', 'handlebars');

    app.use(morgan("dev"));
    app.use(methodOverride());
    app.use(cookieParser());
    //XXX set cookieparser
    //XXX set express session


    app.use("/", express.static(path.join(app.get("rootDirectory"),"/public")));

    app.use(
        bodyParser({
            uploadDir: path.join(app.get("rootDirectory"), 'public/upload/temp')
        })
    );

    app = routes(app);

    app.set('port', process.env.PORT || 5500);


    if ('development' === app.get('env')) {
        app.use(errorHandler());
    }

    return app;
}
