//dependencies
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const htmlRoutes = require('./app/routing/htmlRoutes');
const apiRoutes = require('./app/routing/apiRoutes');
const friends = [];

//configuring express and setting up a port
const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));
app.use(express.static(__dirname + "/public"));

//requiring routing for servers
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

htmlRoutes(app);
apiRoutes(app, friends);