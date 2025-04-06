const getStoreAppliedJob = () => {
    const storeJobApplication = localStorage.getItem('job-applied');
    if(storeJobApplication) {
        return JSON.parse(storeJobApplication);
    }
    return [];
}

const storeAppliedJobId = id => {
    const storeJobApplied = getStoreAppliedJob();
    const haveStoreJob = storeJobApplied.find(jobId => jobId == id);
    if(!haveStoreJob) {
        storeJobApplied.push(id);
        localStorage.setItem('job-applied', JSON.stringify(storeJobApplied));
    }
}

export { getStoreAppliedJob, storeAppliedJobId}