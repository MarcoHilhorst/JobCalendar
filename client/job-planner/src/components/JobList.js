import { FaTimes } from 'react-icons/fa'
import { FaPencilAlt } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'
import { useState } from 'react'
import Modal from './Modal'
import ModalDelete from './ModalDelete'



const JobList = ({ job, onDelete, onEdit, onUpdate }) => {

  const [isOpen, setIsOpen] = useState(false)
  const [delIsOpen, setDelIsOpen] = useState(false)
  const [innerText, setInnerText] = useState("")

  
  const shortenDate = (date) => {
    const dateObj = new Date(date)
    const year = dateObj.getFullYear()
    const month = String(dateObj.getMonth() +1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0')

    return `${day}-${month}-${year}`
  }
 
  
  
 

  return (


  <div className="collapse bg-base-200 individualJobsListView">
    <input type="checkbox" /> 
    <div className="collapse-title text-xl font-medium jobListTitleAreaFormat">
    <h3>{job.jobName}</h3>
    <section>
      <p>Start: {shortenDate(job.stage1Start)}</p>
      <p>End: {shortenDate(job.stage3End)}</p>
    </section>
    </div>
    <div className="collapse-content "> 
      <hr />
      <div className='stageListView'>
        {/* Manufacturing section */}
        <section className='processSection'>
          <h4 style={{background: "orange", borderRadius: "5px"}}>Manufacturing</h4>
          <p>{`${job.stage1} ${job.stage1>1? "days": "day"}`}</p>
          <div className='startAndEndDates' >
            <p>Start: {shortenDate(job.stage1Start)}</p>
            <p>End: {shortenDate(job.stage1End)}</p>
          </div>
        </section>
        {/* Assembly section */}
        <section className='processSection'>
          <h4 style={{background: "lightblue", borderRadius: "5px"}}>Assembly</h4>
          <p>{`${job.stage2} ${job.stage2>1? "days": "day"}`}</p>
          <div className='startAndEndDates' >
            <p>Start: {shortenDate(job.stage2Start)}</p>
            <p>End: {shortenDate(job.stage2End)}</p>
          </div>
        </section>
        {/* Installation section */}
        <section className='processSection'>
          <h4 style={{background: "lightgreen", borderRadius: "5px"}}>Installation</h4>
          <p>{`${job.stage3} ${job.stage3>1? "days": "day"}`}</p>
          <div className='startAndEndDates' >
            <p>Start: {shortenDate(job.stage3Start)}</p>
            <p>End: {shortenDate(job.stage3End)}</p>
          </div>
        </section>
      </div>
      <div className='editAndDeleteIcons'>
           <FaPencilAlt className='editIcon' onClick={() => {
            setIsOpen(true)
            setInnerText("Edit job")
            // }} /> <FaTimes className='delIcon' onClick={() => onDelete(job._id)} />
          }} /> 
          <FaTrash className='delIcon' onClick={() => setDelIsOpen(true)}/>
        </div>
          <Modal open={isOpen} onClose={() => setIsOpen(false)} text={innerText} job={job} updateJob={onUpdate} />
          <ModalDelete open={delIsOpen} onClose={() => setDelIsOpen(false)} job={job} onDelete={onDelete} />
    </div>
  </div>

  )
}

export default JobList
