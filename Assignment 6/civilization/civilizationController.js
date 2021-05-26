angular.module("myProperApp").controller("CivilizationController", CivilizationController);

function CivilizationController(CivilizationFactory){
//, $routeParams){
    let vm = this;
   // let civilizations = $routeParams.civilizations;

   //added DataFactory
    // $http.get("https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations")
    // .then(function(response){
    //     vm.civilization = response.data;
    // });

    CivilizationFactory.getAllCivilization().then(function(factoryResponse){
        vm.civilization = factoryResponse;
    });
}