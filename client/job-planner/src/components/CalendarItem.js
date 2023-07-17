import { useState } from "react"
import Calendar from 'react-calendar'
import moment from 'moment'
import 'react-calendar/dist/Calendar.css'



const disabledDates = [new Date("May 25 2023")]

const tileDisabled = ({ date, view }) => {
  if(view === 'month') {
    return disabledDates.find(element => +element === +date)
  }  
}


const CalendarItem = ({ jobs }) => {
    const [date, setDate] = useState(new Date())

    const testFunc = (aDate) => {
      setDate(aDate)
      console.log(date)
    }


    const testClick =(e) => {
      // console.log(e)
    }

  return (
  <div className='app'>
    <h1>React Calendar with Range</h1>
    <div>
      <Calendar onChange={testFunc} value={date} selectRange={false} onClickDay={testClick} tileDisabled={tileDisabled}  />
    </div>
   {date.length > 0 ? (
   <p>
     <span>Start:</span>{' '} {date[0].toDateString()}
     &nbsp; to &nbsp;
     <span>End:</span> {date[1].toDateString()}
   </p>
        ) : (
   <p>
     <span>Default selected date:</span>{' '} {date.toDateString()}
   </p>
        )}
 </div>
  
  )
}

export default CalendarItem
