import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios.get('/api/jobs')
            .then(response => setJobs(response.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Job Recommendations</h1>
            <ul>
                {jobs.map(job => (
                    <li key={job.id}>{job.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default JobList;
