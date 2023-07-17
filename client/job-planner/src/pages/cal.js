import BigCalendar from "../components/BigCalendar"
import CalendarItem from "../components/CalendarItem"
import Dnd from "../components/Dnd"
import { useEffect, useState } from "react"

// Array for job stage 1
let manufacturing = []

// Array for job stage 2
let assembly = []

// Array for job stage 3
let installation = []

const Cal = ({ jobs, fetchJobs }) => {
  const [showAssembly, setShowAssembly] = useState(false)
  const [showInstallation, setShowInstallation] = useState(false)
  const [showManufacturing, setShowManufacturing] = useState(false)
  useEffect(() => {
    fetchJobs()
  })

  const toggleAssembly = () => {
    setShowAssembly(true)
    setShowInstallation(false)
    setShowManufacturing(false)
  }

  const toggleInstallation = () => {
    setShowAssembly(false)
    setShowInstallation(true)
    setShowManufacturing(false)
  }

  const toggleManufacturing = () => {
    setShowAssembly(false)
    setShowInstallation(false)
    setShowManufacturing(true)
  }

  // Resets the arrays each time data is fetched from the database to prevent jobs duplicating in the array
  manufacturing = []
  assembly = []
  installation = []

  // Foreach loop, create 3 objects, each has the job name, stage start and end date, push each object to the appropriate array
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
    
    manufacturing.push(manufactureDates)
    assembly.push(assemblyDates)
    installation.push(installDates)
  })


  return (
    <div className="calendarDisplay">
      <h1>Calendar view</h1>
      <div>
        <button onClick={toggleManufacturing} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md calSwitch">Manufacturing</button>
        <button onClick={toggleAssembly} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md calSwitch">Assembly</button>
        <button onClick={toggleInstallation} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md calSwitch">Installation</button>
      </div>
      {/* <CalendarItem jobs={jobs} /> */}

      {showManufacturing ? <BigCalendar jobs={manufacturing} calTitle={"Manufacturing"} view={['month']} calHeight={"500px"}/> : null}
      {showAssembly ? <BigCalendar jobs={assembly} calTitle={"Assembly"} view={['month']} calHeight={"500px"}/> : null}
      {showInstallation ? <BigCalendar jobs={installation} calTitle={"Installation"} view={['month']} calHeight={"500px"}/> : null}
    </div>
  )
}

export default Cal
