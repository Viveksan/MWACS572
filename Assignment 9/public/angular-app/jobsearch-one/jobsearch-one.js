angular.module("meanJobsearch").controller("JobsearchOneController",JobsearchOneController);

function JobsearchOneController(JobsearchDataFactory, $routeParams, $route){

    const vm=this;
    let jobId = $routeParams.jobId;

    JobsearchDataFactory.getOneJob(jobId).then(function(response){
        vm.jobs = response;
    });

    vm.updateJob = function(jobId){
        console.log("Job id: "+jobId);
        const newJob = {
            title: vm.newJobTitle,
            salary:vm.newJobSalary,
            unit:vm.newJobAddressUnit,
            street:vm.newJobAddressStreet,
            pincode:vm.newJobAddressPincode,
            description:vm.newJobDescription,
            experience:vm.newJobExperience,
            skills: vm.newJobSkills,
            postDate:vm.newJobPostDate
        };
        if(vm.updateJobsForm.$valid){
            console.log(newJob);
            JobsearchDataFactory.fullUpdateOneJob(jobId, newJob).then(function(response){
                console.log("Job Updated!");
                $route.reload();
                return response;
            }).catch(function(error){
                console.log(error);
            });
        }

    }
}
