angular.module("meanMovies",['ngRoute']).config(config);


function config($routeProvider, $locationProvider){
    $locationProvider.hashPrefix("")
    $routeProvider.when("/",{
        templateUrl:"movie-list/movie-list.html",
        controller:"MoviesController",
        controllerAs:"vm"
    }).when("/movie/:movieId",{
        templateUrl:"movie-one/movie-one.html",
        controller:"MovieOneController",
        controllerAs:"vm"
    });

}