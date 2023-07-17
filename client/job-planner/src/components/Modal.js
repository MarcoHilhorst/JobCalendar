import ReactDom from 'react-dom'
import JobInputs from './JobInputs'


const Modal = ({ open, onClose, text, updateJob, job }) => {
 
  if(!open) return null

  return ReactDom.createPortal(
    <>
      <div className="overlay"></div>
      <div className='myModal'>
        {text}
        <div>
           <JobInputs btnText="Update Job" job={job} onAdd={updateJob}/>
        </div>
        <div className='buttonPosition'>
          <button onClick={onClose} className='btn'>Close</button>
        </div>
        
      </div>
      
    </>,
  document.getElementById('portal')
  )
}

export default Modal
