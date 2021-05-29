angular.module("meanMovies").controller("MovieOneController", MovieOneController);

function MovieOneController(MovieDataFactory,$routeParams){
    const vm=this;
    let movieId = $routeParams.movieId;
    // $http.get("/api/movies/"+movieId).then(function(response){
    //     // vm.games = response.data;
    //         vm.movie = response.data;
    // });
    MovieDataFactory.getOneMovie(movieId).then(function(response){
           // vm.movie = response.data;
            vm.movie = response.data;
    });
}