import { Calendar, momentLocalizer } from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import moment from 'moment'


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
  return (
    <DnDCalendar 
        localizer={localizer}
        events={myEventsList}
        draggableAccessor={(event)=> true}
    />
  )
}

export default Dnd
