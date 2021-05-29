angular.module("meanMovies").factory("MovieDataFactory", MovieDataFactory);

function MovieDataFactory($http){
    return {
        getAllMovie:getAllMovie,
        getOneMovie:getOneMovie,
        addOneMovie:addOneMovie,
        fullUpdateOneMovie:fullUpdateOneMovie,//has to be same as in api controller
        deleteOneMovie:deleteOneMovie
    }

    function getAllMovie(){
        return $http.get("/api/movies").then(complete).catch(failed);
    }

    function getOneMovie(movieId){
        return $http.get("/api/movies/"+movieId).then(complete).catch(failed);
    }

    function addOneMovie(movie){
        console.log("Here1")
        return $http.post("/api/movies/", movie).then(complete).catch(failed);
    }

    function fullUpdateOneMovie(movieId, movie){
        return $http.put("/api/movies/"+movieId,movie).then(complete).catch(failed);
    }

    function deleteOneMovie(movieId){
        return $http.delete("/api/movies/"+movieId).then(complete).catch(failed);
    }

    function complete(response){
        return response.data;
    }    

    function failed(error){
        return error.status.statusText;
    }
}