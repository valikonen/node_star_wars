var moviesJSON = require("../movies.json");


//Home
exports.home = function(res, res) {

    var movies = moviesJSON.movies;

    res.render("home", {
        title: "Star wars movies app",
        movies: movies
    });
};

// movie single
exports.movie_single = function(req, res) {

    var episode_number = req.params.episode_number;
    var movies = moviesJSON.movies;


    if(episode_number >= 1 && episode_number <= 6) {

        var movie = movies[episode_number - 1];
        var title = movie.title;
        var main_characters = movie.main_characters;

        res.render("movie_single", {
            movies: movies,
            title: title,
            movie: movie,
            main_characters: main_characters
        });
    }
    else {
        res.render("notFound", {
            movies: movies,
            title: "404"
        });
    }
};

// 404
exports.notFound =  function(req, res){
    res.send("This pages doesn't exists ±404±")
};