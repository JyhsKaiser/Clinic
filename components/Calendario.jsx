import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { FaRegCalendarAlt } from "react-icons/fa";
import "dayjs/locale/es-mx"
import "../styles/calendario.css"
dayjs.locale("es-mx");
export default function App() {

  const localizer = dayjsLocalizer(dayjs)

  const events = [
    // {
    //   start: dayjs('2024-08-31T12:00:00').toDate(),
    //   end: dayjs('2024-08-31T13:00:00').toDate(),
    //   title: "Evento 1"
    // }
    {
      start: dayjs('2024-09-01T13:00:00').toDate(),
      end: dayjs('2024-09-01T14:00:00').toDate(),
      title: "Evento 2"
    }
  ]

  const components = {
    event: props => {
      console.log(props)
      return <div>
        <FaRegCalendarAlt />

        {props.title}
      </div>
    }
  }

  const messages = {
    allDay: "Todo el día",
    previous: "Anterior",
    next: "Siguiente",
    today: "Hoy",
    month: "Mes",
    week: "Semana",
    day: "Día",
    agenda: "Agenda",
    date: "Fecha",
    time: "Hora",
    event: "Evento",
    noEventsInRange: "Sin eventos"
  };
  return(  
    <>
      {/* CALENDARIO */}
      <div className="center" style={{
        height: "60vh",
        width: "45vw",
        margin:'0 auto',  
      }}>
        <Calendar
          localizer={localizer}
          events={events}
          views={["month" , "week", "day"]}
          formats={{
            dayHeaderFormat: date => {
              console.log(date)
              return dayjs(date).format("DD/MM/YYYY")
            }
          }}
          components={components}
          messages={{
            next: "Siguiente",
            previous: "Anterior",
            today: "Hoy",
            month: "Mes",
            week: "Semana",
            day: "Día",
          }}
        />
      </div> 
    </>  
  );
}