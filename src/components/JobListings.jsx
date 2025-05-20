import React from 'react'
import jobs from '../jobs.json'
import JobListing from './JobListing'

function JobListings({isHome=false }) {
  const jobListings = isHome ? jobs.slice(0, 3) : jobs;

  return (
    <div>
      <section className="px-4 py-10 bg-blue-50">
      <div className="m-auto container-xl lg:container">
        <h2 className="mb-6 text-3xl font-bold text-center text-indigo-500">
          {isHome ? 'Recent Jobs' : 'All Jobs'}
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {jobListings.map((job) => (
                <JobListing key={job.id} job={job} />
            ))}

        </div>
      </div>
    </section>
    </div>
  )
}

export default JobListings
