import { useState, useEffect } from 'react';
// import jobs from '../../database/db.json';
import JobListing from './JobListing';
import Spinner from './Spinner';

const JobListings = ({ isHome }) => {
  // let jobsArray = jobs.jobs;
  // let recentJobs = jobsArray.slice(0, 3);

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';

      try {
        const res = await fetch(apiUrl);
        const jobs = await res.json();

        console.log(typeof res);
        console.log(jobs);

        setJobs(jobs);
        setError(null);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    // setTimeout(() => {
    fetchJobs();
    // }, 2000);
  }, []);

  return loading && !error ? (
    <div className="text-center py-10">
      <Spinner />
    </div>
  ) : error ? (
    <div className="text-center py-10">
      <p className="text-red-500">Error loading jobs: {error}</p>
    </div>
  ) : (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
