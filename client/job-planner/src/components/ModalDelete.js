import ReactDom from 'react-dom'

const ModalDelete = ({ job, onClose, onDelete, open }) => {

    if(!open) return null

  return ReactDom.createPortal(
    <>
      <div className="overlay"></div>
      <div className='myModal'>
        <h4>Are you sure you want to delete this?</h4>
        <button onClick={onClose} className='btn'>No</button>
        <button onClick={() => onDelete(job._id)} className='btn'>Yes, I'm sure</button>
      </div>
      
    </>,
    document.getElementById('portal')
  )
}

export default ModalDelete
