var express = require("express");

var app = express();

var routes = require("./routes");
var path = require("path");

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

//ROUTES

//Home
app.get("/", routes.home);

// movie single
app.get("/star_wars_episode/:episode_number?", routes.movie_single);

// 404
app.get("*", routes.notFound);

app.listen(process.env.PORT || 8888);