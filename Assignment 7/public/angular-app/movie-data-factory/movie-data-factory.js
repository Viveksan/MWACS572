angular.module("meanMovies").factory("MovieDataFactory", MovieDataFactory);

function MovieDataFactory($http){
    return {
        getAllMovie:getAllMovie,
        getOneMovie:getOneMovie
    }

    function getAllMovie(){
        return $http.get("/api/movies").then(complete).catch(failed);
    }

    function getOneMovie(movieId){
        $http.get("/api/movies/"+movieId).then(complete).catch(failed);
    }

    function complete(response){
        return response.data;
    }    

    function failed(error){
        return error.status.statusText;
    }
}