import { useEffect, useState } from 'react'
import JobList from '../components/JobList'


const Joblist = () => {

  // Setting state for DB data
  const [jobs, setJobs] = useState([])

  // Fetching data from DB
  useEffect(() => {
    fetchJobs()
  }, [])

  // get request to DB and updating state
  const fetchJobs = async() => {
    try {
      const res = await fetch('//localhost:3001/joblist')
      const data = await res.json()
      setJobs(data) 
    }
    catch (err){
      console.error(err)
    }
  }

  // Delete request for idividual jobs
  const deleteJob = async (id) => {
    
    try {
      const res = await fetch(`//localhost:3001/joblist/${id}`, {
        method: 'DELETE',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
          _id: id
        })
      })  
      if(res.ok){
        
        setJobs(jobs.filter((job) => job._id !== id))
      } else {
        console.log("Failed to delete!")
      }    
    }
    catch (err){
      console.error(err)
    }
  }

  // Put request to update an individual job and includes a fetch to retrieve and populate the updated data
  const updateJob =  async (job) => {
   
    try {
      const res = await fetch(`//localhost:3001/joblist/${job._id}`, {
        method: 'PUT',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
          _id: job.id,
          jobName: job.jobName,
          stage1: job.stage1,
          stage1Start: job.stage1Start,
          stage1End: job.stage1End,
          stage2: job.stage2,
          stage2Start: job.stage2Start,
          stge2End: job.stage2End,
          stage3: job.stage3,
          stage3Start: job.stage3Start,
          stage3End: job.stage3End
          
        })
      })

      if(res.ok){
        console.log("Updated successfully")
        alert("Update successful!")
        fetchJobs()
      }


    } catch (err) {
      console.error(err)
    }
  }
    

  return (
    <div className='jobListMainPage'>
      <h1>List view of jobs from the database</h1>
      {jobs.map((job) => <JobList job={job} key={job._id} onDelete={deleteJob} onUpdate={updateJob} />)}
      
    </div>
  )
}

export default Joblist
