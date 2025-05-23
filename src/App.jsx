import {Route, createBrowserRouter, createRoutesFromElements, Router, RouterProvider} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './Pages/JobsPage';
import NotFoundPage from './Pages/NotFoundPage';
import JobPage, {jobLoader} from './components/JobPage';
import AddJobPage from './Pages/AddJobPage';
import EditJobPage from './Pages/EditJobPage';

function App() {

const addJob =async (newJob) => {
  const res = await fetch('/api/jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newJob)
  })
  return
}

const deleteJob = async (id) => {
  const response = await fetch(`/api/jobs/${id}`, {
    method: 'DELETE',
  })
}

const updateJob = async (updatedJob) => {
  const res = await fetch(`/api/jobs/${updatedJob.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedJob)
  })
  return
}
  
const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/jobs' element={<JobsPage/>}/>
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
        <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob}/>}  loader={jobLoader}/>
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Route>
    )
  );

  return <RouterProvider router={router} />
}

export default App
