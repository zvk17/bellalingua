const express = require("express"),
    config = require("./server/config"),
    mongoose = require('mongoose');

let app = express();
app.set("rootDirectory", __dirname);
config(app);

app.listen(app.get("port"), function() {
    console.log('Server up: http://localhost:' + app.get('port'));
});
let local = "mongodb://localhost/languageSite";
mongoose.connect(local);

mongoose.connection.on('open', function() {
    console.log('Mongoose connected.');
});
