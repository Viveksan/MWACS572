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
            vm.movie = response;
    });

    vm.updateMovie = function(movieId){
        console.log("Movie id: "+movieId);
        const newMovie = {
            title: vm.newMovieTitle,
            year: vm.newMovieYear,
            genre: vm.newMovieGenre
        };
        if(vm.updateMovieForm.$valid){
            console.log(newMovie);
            MovieDataFactory.fullUpdateOneMovie(movieId, newMovie).then(function(response){
                console.log("Movie Updated!");
                return response;
            }).catch(function(error){
                console.log(error);
            });
        }
    }

}