import "./BigCalendar.css";
import { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
// import { useAppointment } from "../../contexts/ApiContext";
import events from "../../constants/events";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

export default function ReactBigCalendar() {
  // const { getAppointment, setAppointment, appointments } = useAppointment();
  const [eventsData, setEventsData] = useState(events);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt("New Event name");
    if (title)
      // setAppointment(start, end, title),
      setEventsData([
        ...eventsData,
        {
          start,
          end,
          title,
        },
      ]);
  };

  useEffect(() => {
    // setEventsData(appointments);
    // getAppointment();
  }, []);

  return (
    <div className="col-span-full p-2 xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg border  border-slate-200 dark:border-slate-700">
      <Calendar
        views={["day", "agenda", "work_week", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={eventsData}
        style={{ height: "100vh" }}
        onSelectEvent={(event) => alert(event.title)}
        onSelectSlot={handleSelect}
      />
    </div>
  );
}
