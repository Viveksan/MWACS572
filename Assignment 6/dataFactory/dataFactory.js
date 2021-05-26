angular.module("myProperApp").factory("CivilizationFactory", CivilizationFactory);
function CivilizationFactory($http){
    return{
        getAllCivilization: getAllCivilization
    }
}

function getAllCivilization(){
    return $http.get("https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations")
    .then(complete).catch(failed);

}

function complete(response){
    return response.data;
}

function failed(error){
    return error.statusText;
}