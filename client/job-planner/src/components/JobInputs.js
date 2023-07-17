import { useState, useRef, useEffect } from "react"

const JobInputs = ({ onAdd, btnText, job }) => {
  const [jobName, setName] = useState(job? job.jobName : "")
  const [stage1, setStage1] = useState(job ? job.stage1 : "")
  const [stage1Start, setStage1Start] = useState(job ? job.stage1Start : "")
  const [stage1End, setStage1End] = useState(job ? job.stage1End : "")
  const [stage2, setStage2] = useState(job ? job.stage2 : "")
  const [stage2Start, setStage2Start] = useState(job ? job.stage2Start : "")
  const [stage2End, setStage2End] = useState(job ? job.stage2End : "")
  const [stage3, setStage3] = useState(job ? job.stage3 : "")
  const [stage3Start, setStage3Start] = useState(job ? job.stage3Start : "")
  const [stage3End, setStage3End] = useState(job ? job.stage3End : "")
  const [id, setID] = useState(job ? job._id : '')

    
  // function that runs on submission of the form
  const onSubmit = (e) => {
    // prevents default
    e.preventDefault()
    console.log(`stage1: ${stage1End}`)
    console.log(`stage2: ${stage2End}`)
    console.log(`stage3: ${stage3End}`)

    // Creates the object to add to the database and uses the state to fill it's properties
    onAdd(
      { 
        jobName, 
        stage1, 
        stage1Start, 
        stage1End,
        stage2, 
        stage2Start, 
        stage2End,
        stage3, 
        stage3Start, 
        stage3End,
        id 
      }
    )

    // resets the form after submission
    setName('')
    setStage1('')
    setStage1Start('')
    setStage1End('')
    setStage2('')
    setStage2Start('')
    setStage2End('')
    setStage3('')
    setStage3Start('')
    setStage3End('')

  }

  
  // function that formats the date into dd-mm-yyyy
  const shortenDate = (date) => {
    const dateObj = new Date(date)
    const year = dateObj.getFullYear()
    const month = String(dateObj.getMonth() +1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0')

    return `${day}-${month}-${year}`
  }


  const endDate1 = useRef("")  
  const endDate2 = useRef("")
  const endDate3 = useRef("")
  
// use Effect trigger that monitors the stage1 duration and start date
  useEffect(() => {
    endDate1.current = String(new Date(new Date(stage1Start).setHours(new Date(stage1Start).getHours() + (stage1 * 24 - 24))))
    setStage1End(endDate1.current)
    endDate1.current = shortenDate(endDate1.current)
        
  }, [stage1, stage1Start])

  // Use effect trigger stage two 
  useEffect(() => {
    endDate2.current = String(new Date(new Date(stage2Start).setHours(new Date(stage2Start).getHours() + (stage2 * 24 - 24))))
    setStage2End(endDate2.current)
    endDate2.current = shortenDate(endDate2.current)
     
  }, [stage2, stage2Start])

  // Use effect trigger for stage three
  useEffect(() => {
    endDate3.current = String(new Date(new Date(stage3Start).setHours(new Date(stage3Start).getHours() + (stage3 * 24 - 24))))
    setStage3End(endDate3.current)
    endDate3.current = shortenDate(endDate3.current)
     
  }, [stage3, stage3Start])

  return (
    <form onSubmit={onSubmit} className="inputForm">
      <div className="inputConstrain jobTitleArea">
        <label>Job</label>
        <input type="text" placeholder={job ? job.jobName : "Job name or #"} value={jobName} onChange={(e) => setName(e.target.value)} className="input input-bordered input-sm w-full max-w-xs" />
      </div>
    {/* --------------------------- */}
    <div className="inputSection">
      <div className="inputConstrain"> 
        <label>Manufacturing duration</label>
        <input type="number" placeholder={job ? job.stage1 : 0} value={stage1} onChange={(e) => setStage1(e.target.value)} className="input input-bordered input-sm w-full max-w-xs"/>
      </div>
      <div className="inputConstrain">
        <label>Manufacturing start</label>
        <input type="date" placeholder={job ? job.stage1Start : 0} value={stage1Start.slice(0,10)}  onChange={(e) => setStage1Start(e.target.value)} className="input input-bordered input-sm w-full max-w-xs" />
      </div>
      <div className="inputConstrain">
        <label>Manufacturing end: </label>
        <p className="input input-bordered input-sm w-full max-w-xs" disabled> {endDate1.current === "NaN-NaN-NaN" ? "" : endDate1.current} </p>
      </div>
    </div>
      
{/*--------------------------  */}
      <div className="inputSection">
        <div className="inputConstrain">
          <label>Assembly duration</label>
          <input type="number" placeholder={job ? job.stage2 : 0} value={stage2} onChange={(e) => setStage2(e.target.value)} className="input input-bordered input-sm w-full max-w-xs" />
        </div>
        <div className="inputConstrain">
          <label>Assembly start</label>
          <input type="date" placeholder={job ? job.stage2Start : 0} value={stage2Start.slice(0, 10)} onChange={(e) => setStage2Start(e.target.value)} className="input input-bordered input-sm w-full max-w-xs" />
        </div>
        <div className="inputConstrain">
          <label>Assembly end: </label>
          <p className="input input-bordered input-sm w-full max-w-xs" disabled> {endDate2.current === "NaN-NaN-NaN" ? "" : endDate2.current} </p>
        </div>
      </div>
      
    {/* ---------------------- */}
    <div className="inputSection">
      <div className="inputConstrain">
        <label>Installation duration</label>
        <input type="number" placeholder={job ? job.stage3 : 0} value={stage3} onChange={(e) => setStage3(e.target.value)} className="input input-bordered input-sm w-full max-w-xs"/>
      </div>
      <div className="inputConstrain">
        <label>Installation start</label>
        <input type="date" placeholder={job ? job.stage3Start : 0} value={stage3Start.slice(0, 10)} onChange={(e) => setStage3Start(e.target.value)} className="input input-bordered input-sm w-full max-w-xs"/>
      </div>
      <div className="inputConstrain">
        <label>Installation end: </label>
        <p className="input input-bordered input-sm w-full max-w-xs" disabled> {endDate3.current === "NaN-NaN-NaN" ? "" : endDate3.current} </p>
      </div>
    </div>

    <input type="submit" value={btnText} className="btn"/>
    </form>
    
  )
}

export default JobInputs
