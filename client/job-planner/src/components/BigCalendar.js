import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import events from './Events'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useEffect, useState } from 'react'
import './calendarStyles.css'


const localizer = momentLocalizer(moment)

const eventColor = (event, start, end, isSelected) => {
  let newStyle = {
    backgroundColor: "lightgrey",
    color: 'black',
    border: "none"
  };

  if (event.color === 1){
    newStyle.backgroundColor = "orange"
  } 
  else if (event.color === 2){
    newStyle.backgroundColor = "lightblue"
  }
  else if (event.color === 3) {
    newStyle.backgroundColor = "lightgreen"
  }

  return {
    className: "",
    style: newStyle
  };
}



const BigCalendar = ({ jobs, calTitle, view, calHeight, views }) => {

  
  let eventsDisplay = jobs

  return (
    <div>
      <h2>{calTitle}</h2>
    <Calendar
      localizer={localizer}
      events={eventsDisplay}
      style={{ height: calHeight }}
      view={[view]}
      eventPropGetter={eventColor}
    />
  </div>
  )
}

export default BigCalendar
