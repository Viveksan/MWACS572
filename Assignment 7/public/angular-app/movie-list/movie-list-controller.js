angular.module("meanMovies").controller("MoviesController",MoviesController);

function MoviesController(MovieDataFactory){
    const vm=this;
    vm.title="Mean Movies App";

    // $http.get("/api/movies").then(function(response){
    //     vm.games = response.data;
    // });
    MovieDataFactory.getAllMovie().then(function(response){
        vm.movies = response.data;
    });
}