import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { useAppointment } from "../../contexts/ApiContext";

const Home = () => {
  const { users, getUser, getEventsByStuff, eventListByStuff } =
    useAppointment();
  moment.locale("en-GB");
  const localizer = momentLocalizer(moment);
  const [stuffId, setStuffId] = useState();

  useEffect(() => {
    getUser();
  }, []);

  const filteredEvents = eventListByStuff.filter(
    (data) => data.stuffId === stuffId
  );

  const allEvents = filteredEvents.map((event) => {
    const eventUser = users.find((user) => user.id === stuffId);
    const username = eventUser ? eventUser.username : "Unknown User";

    return {
      id: event.id,
      title: `${username} - ${event.service}`,
      start: moment(
        `${event.date} ${event.start}`,
        "YYYY/MM/DD ddd HH:mm"
      ).toDate(),
      end: moment(
        `${event.date} ${event.end}`,
        "YYYY/MM/DD ddd HH:mm"
      ).toDate(),
    };
  });

  const getStuffId = (stuffId) => {
    setStuffId(Number(stuffId));
    getEventsByStuff(stuffId);
  };

  return (
    <Layout>
      <div className="col-span-full p-2 xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg border  border-slate-200 dark:border-slate-700">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <span
            className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
            id="basic-addon2"
          >
            <select
              id="underline_select"
              className="w-full cursor-pointer text-gray-500 bg-transparent border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 "
              onChange={(e) => getStuffId(e.target.value)}
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled>
                Choose a specialist
              </option>
              {users.map((user) =>
                user.roles.map((e) =>
                  e.name === "ROLE_MODERATOR" ? (
                    <option key={user.id} value={user.id}>
                      {user.username}
                    </option>
                  ) : (
                    ""
                  )
                )
              )}
            </select>
          </span>
        </div>
        <Calendar
          views={["day", "agenda", "work_week", "month"]}
          selectable
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={allEvents}
          style={{ height: "100vh" }}
          onSelectEvent={(event) => alert(event.title)}
        />
      </div>
    </Layout>
  );
};

export default Home;
