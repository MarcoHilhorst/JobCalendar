import React from 'react'
import AddJob from './AddJob'
import ReactDom from 'react-dom'

const AddJobModal = ({ open, onClose, text, updateJob, job, fetchJobs}) => {

    if(!open) return null

  return ReactDom.createPortal (
    <>
        <div className="overlay"></div>
        <div className='myModal'>
            <AddJob fetchJobs={fetchJobs}/>
            <div className='buttonPosition'>
              <button onClick={onClose} className='btn'>Close</button>
            </div>
            
        </div>
    </>, 
    document.getElementById('portal')
  )
}

export default AddJobModal





