//import { useState, useEffect } from 'react'
import { useParams, useLoaderData, useNavigate} from 'react-router-dom'
//import Spinner from './Spinner'
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

function JobPage({deleteJob}) {
    const { id } = useParams()
    const job = useLoaderData()
    const navigate = useNavigate()

    const onDeleteClick = async (id) => {
        const confirm = window.confirm('Are you sure you want to delete this job?')
        if(!confirm) {
            return
        }

        deleteJob(id)

        toast.success('Job deleted successfully')
        
        navigate('/jobs')   
    }
      
    //const [job, setJob] = useState(null)
    //const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     const fetchJob = async () => {
    //         try {
    //             const response = await fetch(`/api/jobs/${id}`)
    //             const data = await response.json()
    //             setJob(data)
    //         } catch (error) {
    //             console.error('Error fetching job:', error)
    //         } finally {
    //             setLoading(false)
    //         }
    //     }

    //     fetchJob()
    // })


//   return loading ? <Spinner loading={loading}  /> : (
//     <h1>{job.title}</h1>
//   )

    return(
        <>       
            <section>
            <div className="container px-6 py-6 m-auto">
                <Link
                to="/jobs"
                className="flex items-center text-indigo-500 hover:text-indigo-600"
                >
                <FaArrowLeft className='mr-2'/> Back to Job Listings
                </Link>
            </div>
            </section>

            <section className="bg-indigo-50">
            <div className="container px-6 py-10 m-auto">
                <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-70/30">
                <main>
                    <div
                    className="p-6 text-center bg-white rounded-lg shadow-md md:text-left"
                    >
                    <div className="mb-4 text-gray-500">Full-Time</div>
                    <h1 className="mb-4 text-3xl font-bold">
                        {job.title}
                    </h1>
                    <div
                        className="flex justify-center mb-4 text-gray-500 align-middle md:justify-start"
                    >
                    <FaMapMarker className="mr-2" />
                        <p className="text-orange-700">{job.location}</p>
                    </div>
                    </div>

                    <div className="p-6 mt-6 bg-white rounded-lg shadow-md">
                    <h3 className="mb-6 text-lg font-bold text-indigo-800">
                        {job.company.name}
                    </h3>

                    <p className="mb-4">
                    {job.description}
                    </p>

                    <h3 className="mb-2 text-lg font-bold text-indigo-800">Salary</h3>

                    <p className="mb-4">{job.salary}</p>
                    </div>
                </main>

                
                <aside>
                    
                    <div className="p-6 bg-white rounded-lg shadow-md">
                    <h3 className="mb-6 text-xl font-bold">Company Info</h3>

                    <h2 className="text-2xl">{job.company.name}</h2>

                    <p className="my-2">
                        {job.company.description}
                    </p>

                    <hr className="my-4" />

                    <h3 className="text-xl">Contact Email:</h3>

                    <p className="p-2 my-2 font-bold bg-indigo-100">
                        {job.company.contactEmail}
                    </p>

                    <h3 className="text-xl">Contact Phone:</h3>

                    <p className="p-2 my-2 font-bold bg-indigo-100">{job.company.contactPhone}</p>
                    </div>

                    
                    <div className="p-6 mt-6 bg-white rounded-lg shadow-md">
                    <h3 className="mb-6 text-xl font-bold">Manage Job</h3>
                    <Link
                        to={`/edit-job/${job.id}`}
                        className="block w-full px-4 py-2 mt-4 font-bold text-center text-white bg-indigo-500 rounded-full hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
                        >Edit Job
                    </Link>
                    <button
                        className="block w-full px-4 py-2 mt-4 font-bold text-white bg-red-500 rounded-full hover:bg-red-600 focus:outline-none focus:shadow-outline"
                        onClick={() => onDeleteClick(job.id)}
                    >
                        Delete Job
                    </button>
                    </div>
                </aside>
                </div>
            </div>
            </section>

        </>
    )
}

const jobLoader = async ({params}) => {
    const response = await fetch(`/api/jobs/${params.id}`)
    if (!response.ok) {
        throw new Error('Job not found')
    }
    const data = await response.json()
    return data
}

export { JobPage as default, jobLoader }
