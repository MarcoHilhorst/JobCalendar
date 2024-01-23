import { Calendar, momentLocalizer } from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import moment from 'moment'
import { useCallback, useState, useEffect } from 'react'


const DnDCalendar = withDragAndDrop(Calendar)
const localizer = momentLocalizer(moment)
const myEventsList = [
    {
        id: 0,
        title: 'All Day Event very long title',
        allDay: true,
        start: new Date(2015, 3, 0),
        end: new Date(2015, 3, 1),
      },
      {
        id: 1,
        title: 'Today',
        start: new Date(new Date().setHours(new Date().getHours() + 3)),
        end: new Date(new Date().setHours(new Date().getHours() + 28)),
        desc: "Idk some description here",
      }
]




const Dnd = () => {
  const [events, setEvents] = useState(myEventsList)

  const onChangeEventTime = (event) => {
    // Map through the existing events and update the dragged event

    const updatedEvents = events.map((e) =>
      e.id === event.event.id
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


  useEffect(() => {
    // Log the updated state after the render
    console.log(events);
  }, [events])


  return (
    <DnDCalendar 
        localizer={localizer}
        events={events}
        draggableAccessor={(event)=> true}
        onEventDrop={onChangeEventTime}
        onEventResize={onChangeEventTime}
    />
  )
}

export default Dnd
