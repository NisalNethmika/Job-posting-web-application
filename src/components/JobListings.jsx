import React from 'react'
import JobListing from './JobListing'
import { useState, useEffect } from 'react'
import Spinner from './Spinner'

function JobListings({isHome=false }) {
  
  const [jobs,setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:8000/jobs')
        const data = await response.json()
        setJobs(data)
        
      } catch (error) {
        console.error('Error fetching jobs:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
    
  },[])

  const jobList = isHome ? jobs.slice(0, 3) : jobs;

  return (
    <div>
      <section className="px-4 py-10 bg-blue-50">
        <div className="m-auto container-xl lg:container">
          <h2 className="mb-6 text-3xl font-bold text-center text-indigo-500">
            {isHome ? 'Recent Jobs' : 'All Jobs'}
          </h2>
          
          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {jobList.map((job) => (
                <JobListing key={job.id} job={job} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default JobListings
