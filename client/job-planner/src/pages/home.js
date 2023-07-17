import Calendar from 'react-calendar';
import AddJob from '../components/AddJob';
import BigCalendar from "../components/BigCalendar"
import { useEffect, useState } from 'react'
import AddJobModal from '../components/AddJobModal';
import { FaSquare } from 'react-icons/fa'



const Home = ({ jobs, fetchJobs }) => {

  const [isAddOpen, setIsAddOpen] = useState(false)

  let mixedJobs = []
 
  jobs.forEach(job => {
    let manufactureDates = {
      id: job._id,
      title: job.jobName,
      start: new Date(job.stage1Start),
      end: new Date(job.stage1End),
      desc: "description here",
      color: 1,
      allDay: true
    }

    let assemblyDates = {
      id: job._id,
      title: job.jobName,
      start: new Date(job.stage2Start),
      end: new Date(job.stage2End),
      desc: "description here",
      color: 2,
      allDay: true
    }

    let installDates = {
      id: job._id,
      title: job.jobName,
      start: new Date(job.stage3Start),
      end: new Date(job.stage3End),
      desc: "description here",
      color: 3,
      allDay: true
    }
    
    mixedJobs.push(manufactureDates, assemblyDates, installDates)
  })


  

  
  return (
    <div>
      <h1>Home</h1>
      <button className='btn'onClick={() => {setIsAddOpen(true)}} >Add a new job</button>
      <AddJobModal open={isAddOpen} onClose={() => {setIsAddOpen(false)}} fetchJobs={fetchJobs} />
      <div className='colorKeyContainer'>
        <div>
          <h3>Key</h3>
          <ul>
            <li className='colorKey'>
              <h4>Manufacturing:</h4>
              <FaSquare style={{color: "orange"}}/>
            </li>
            <li className='colorKey'>
              <h4>Assembly:</h4>
              <FaSquare style={{color: "lightblue"}}/>
            </li>
            <li className='colorKey'>
              <h4>Installation:</h4>
              <FaSquare style={{color: "lightgreen"}}/>
            </li>
          </ul>
        </div>
        
      </div>
      <div className='homeCalContainer'>
        <BigCalendar jobs={mixedJobs} calTitle={"ThisWeek"} view={['week']} calHeight={"300px"} />
      </div>
      
      
    </div>
  )
}

export default Home
