angular.module("myProperApp").controller("MainController", MainController);

function MainController(){
    let vm = this;
    vm.name = "Jack";
    // $http.get("https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations").then(function(response){
    //     vm.civilization = response.data;
    // })
}