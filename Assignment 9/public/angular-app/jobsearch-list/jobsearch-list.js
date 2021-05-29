angular.module("meanJobsearch").controller("JobsearchController",JobsearchController);

function JobsearchController(JobsearchDataFactory, $route){
    const vm=this;
    vm.title="Mean Job Search App";
    JobsearchDataFactory.getAllJobs().then(function(response){
        vm.jobs = response;
    });     
        

    vm.addJob = function(){
        const newJob = {
            title: vm.newJobTitle,
            salary: vm.newJobSalary,
            location: {
                unit: vm.newJobAddressUnit,
                street: vm.newJobAddressStreet,
                pincode: vm.newJobAddressPincode
            },
            description: vm.newJobDescription,
            experience: vm.newJobExperience,
            skills: vm.newJobSkills,
            postDate: vm.newJobPostDate,

        };
        if(vm.jobsForm.$valid){
            console.log(newJob);
            JobsearchDataFactory.addOneJob(newJob).then(function(response){
                console.log("Job saved");
                $route.reload();
                return response;
            }).catch(function(error){
                console.log(error);
            });
        }
    }

    vm.deleteJob = function(jobId){
        console.log("Deleting job with id: "+jobId);
        JobsearchDataFactory.deleteOneJob(jobId).then(function(response){
            console.log("Job Deleted");
            $route.reload();
            return response;
        }).catch(function(error){
            console.log(error);
        });
    }






}
