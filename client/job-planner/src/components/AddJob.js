import JobInputs from "./JobInputs"

// Add task
const AddJob = ({ fetchJobs }) => {
  
    const addJobToDB = async (task) => {
      if(!task.jobName){
        alert("Please enter a Job name or #")
        return
      }
      try {
        const response = await fetch("http://localhost:3001/", {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(task)
        })
        const result = await response.json()  
         result && alert('Job added!')
        console.log(result)
         fetchJobs()
        

      } 
      catch (error) {
        console.error(error)
      }
     
      
    }

  return (
    <div>
        <JobInputs onAdd={addJobToDB} btnText={"Add Job"}/>
      
    </div>
  )
}

export default AddJob
