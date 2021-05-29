angular.module("meanMovies").controller("MoviesController",MoviesController);

function MoviesController(MovieDataFactory, $route){
    const vm=this;
    vm.title="Mean Movies App";

    // $http.get("/api/movies").then(function(response){
    //     vm.games = response.data;
    // });
    MovieDataFactory.getAllMovie().then(function(response){
        vm.movies = response;
//        vm.movies = response.data;

    });

    vm.addMovie = function(){
        const newMovie = {
            title: vm.newMovieTitle,
            year: vm.newMovieYear,
            genre: vm.newMovieGenre
        };
        if(vm.movieForm.$valid){
            console.log(newMovie);
            MovieDataFactory.addOneMovie(newMovie).then(function(response){
                console.log("Movie saved");
                $route.reload();
                return response;
            }).catch(function(error){
                console.log(error);
            });
        }
    }

    vm.deleteMovie = function(movieId){
        console.log("Deleting movie with id: "+movieId);
        MovieDataFactory.deleteOneMovie(movieId).then(function(response){
            console.log("Movie Deleted");
            $route.reload();
            return response;
        }).catch(function(error){
            console.log(error);
        });
    }
}