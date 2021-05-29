angular.module("meanJobsearch",['ngRoute']).config(config);


function config($routeProvider, $locationProvider){
    $locationProvider.hashPrefix("")
    $routeProvider.when("/",{
        templateUrl:"jobsearch-list/jobsearch-list.html",
        controller:"JobsearchController",
        controllerAs:"vm"
    })
    .when("/jobs/:jobId",{
        templateUrl:"jobsearch-one/jobsearch-one.html",
        controller:"JobsearchOneController",
        controllerAs:"vm"
    });

}