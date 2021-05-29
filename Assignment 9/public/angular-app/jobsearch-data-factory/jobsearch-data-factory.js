angular.module("meanJobsearch").factory("JobsearchDataFactory",JobsearchDataFactory);
//factory not controller
function JobsearchDataFactory($http){

    return {    
        getAllJobs:getAllJobs,
        getOneJob:getOneJob,
        addOneJob:addOneJob,
        fullUpdateOneJob:fullUpdateOneJob,
        deleteOneJob:deleteOneJob
    }

    function getAllJobs(){
        return $http.get("/api/jobs").then(complete).catch(failed);
    }

    function getOneJob(jobId){
        return $http.get("/api/jobs/"+jobId).then(complete).catch(failed);
    }

    function addOneJob(job){
        return $http.post("/api/jobs/", job).then(complete).catch(failed);
    }

    function fullUpdateOneJob(jobId, job){
        return $http.put("/api/jobs/"+jobId,job).then(complete).catch(failed);
    }

    function deleteOneJob(jobId){
        return $http.delete("/api/jobs/"+jobId).then(complete).catch(failed);
    }

    function complete(response){
        return response.data;
    }    

    function failed(error){
        return error.status.statusText;
    }

}