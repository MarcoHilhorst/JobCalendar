import { Calendar, momentLocalizer } from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
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


const DnDCalendar = withDragAndDrop(Calendar)
const BigCalendar = ({ jobs, calTitle, view, calHeight, views }) => {

  const [events, setEvents] = useState(jobs)  
  let eventsDisplay = jobs

  const onChangeEventTime = (event) => {
    // Map through the existing events and update the dragged event
    console.log("color code is",  event.event.color)
    console.log("event is", event)
    const updatedEvents = events.map((e) =>
      e.id === event.event.id && e.color === event.event.color
        ? {
            ...e,
            start: event.start,
            end: event.end,
          }
        : e
    );

    // Set the updated events to the state
    setEvents(updatedEvents);
  };

  return (
    <div>
      <h2>{calTitle}</h2>
    <DnDCalendar
      localizer={localizer}
      events={events}
      style={{ height: calHeight }}
      view={[view]}
      eventPropGetter={eventColor}
      draggableAccessor={(event)=> true}
      onEventDrop={onChangeEventTime}
      onEventResize={onChangeEventTime}
    />
  </div>
  )
}

export default BigCalendar
