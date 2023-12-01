import React, { useState } from "react";
import "./Calendar.css";
import { FaCircleUser } from "react-icons/fa6";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { MdAccessTimeFilled } from "react-icons/md";
import { GiEyelashes } from "react-icons/gi";
import Layout from "../../components/HomeLayout";
import { format, add, isTomorrow } from "date-fns";
import { useAppointment } from "../../contexts/ApiContext";
import { useSettings } from "../../contexts/SettingsContext";
import AppointmentModal from "../../components/Modals/AppointmentModal";

const Calendars = () => {
  const { users } = useAppointment();
  const { dateList } = useSettings();
  const todayClose = new Date();
  todayClose.setDate(todayClose.getDate() + 1);
  const [userDate, setUserDate] = useState({
    dates: null,
    time: null,
    service: null,
    roles: null,
  });
  const [showModal, setShowModal] = useState(false);
  const services = ["Volume", "Classic", "Addition Volume", "Addition Classic"];

  const getDate = (date) => {
    setUserDate((prev) => ({ ...prev, dates: date }));
  };
  const getRole = (role) => {
    setUserDate((prev) => ({ ...prev, roles: role }));
  };
  const getService = (service) => {
    setUserDate((prev) => ({ ...prev, service: service }));
  };
  const getTime = (time) => {
    setUserDate((prev) => ({ ...prev, time: time }));
    setShowModal(!showModal);
  };

  const getTimes = () => {
    if (userDate.dates === null) {
      return;
    }

    const { dates } = userDate;
    const selectedDate = dateList.find(
      (e) => e.date.getTime() === new Date(dates).getTime()
    );

    if (selectedDate) {
      const starts = new Date(dates);
      starts.setHours(
        parseInt(selectedDate.times.start.split(":")[0]),
        parseInt(selectedDate.times.start.split(":")[1])
      );

      const ends = new Date(dates);
      ends.setHours(
        parseInt(selectedDate.times.end.split(":")[0]),
        parseInt(selectedDate.times.end.split(":")[1])
      );

      const interval = userDate.service === "Volume" ? 120 : 60;

      const times = [];
      for (let i = starts; i <= ends; i = add(i, { minutes: interval })) {
        times.push(i);
      }
      return times;
    }
    return [];
  };
  const times = getTimes();

  function formatDate(d) {
    const date = new Date(d);
    const formattedDate = date
      .toLocaleDateString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .split("/")
      .reverse()
      .join("-");
    return formattedDate;
  }

  return (
    <Layout>
      <section className=" h-screen ">
        <div className="section-header">
          <h3 className="title">Appointment</h3>
        </div>

        <div className="section-body grid grid-cols-2 gap-4">
          <div className="col-start-1 col-end-2">
            {!userDate.roles ? (
              <h1 className="text-end text-lg">Please select specialist.</h1>
            ) : !userDate.service ? (
              <h2 className="text-end text-lg">Please select service.</h2>
            ) : !userDate.dates ? (
              <h2 className="text-end text-lg">
                Please select appointment date.
              </h2>
            ) : userDate.dates ? (
              <h2 className="text-end text-lg">
                Please select appointment time.
              </h2>
            ) : (
              ""
            )}
          </div>

          <div className="column-2 ">
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <FaCircleUser className="w-6 h-6 dark:bg-slate-50 rounded-full" />
                </span>
                <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-300">
                    <select
                      id="underline_select"
                      className="w-full cursor-pointer text-gray-500 bg-transparent border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 "
                      onChange={(e) => getRole(e.target.value)}
                      defaultValue={"DEFAULT"}
                    >
                      <option value="DEFAULT" disabled>
                        Choose a specialist
                      </option>
                      {users.map((user) => {
                        if (user.roles === "WORKER")
                          return (
                            <option key={user.id} value={user.name}>
                              {user.name}
                            </option>
                          );
                      })}
                    </select>
                  </div>
                </div>
              </li>
              {userDate.roles ? (
                <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <GiEyelashes className="w-6 h-6 dark:bg-slate-50 rounded-full" />
                  </span>
                  <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-300">
                      <select
                        id="underline_select"
                        className="w-full cursor-pointer text-gray-500 bg-transparent border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 "
                        onChange={(e) => getService(e.target.value)}
                        defaultValue={"DEFAULT"}
                      >
                        <option value="DEFAULT" disabled>
                          Choose a service
                        </option>
                        {services.map((e) => (
                          <option key={e}>{e}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </li>
              ) : (
                " "
              )}

              {userDate.service ? (
                <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center  bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <BsFillCalendarDateFill className="w-6 h-6 dark:bg-slate-50 rounded-full " />
                  </span>

                  <div className="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                    <select
                      id="years"
                      size="5"
                      className="bg-transparent cursor-pointer border focus:outline-none focus:ring-0   text-gray-900 text-sm rounded-lg   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(e) => getDate(e.target.value)}
                    >
                      {dateList
                        .filter(
                          (e) =>
                            isTomorrow(new Date(e.date)) ||
                            new Date(e.date) > new Date()
                        )
                        .map((e) => (
                          <option key={e.id} value={e.date}>
                            {formatDate(e.date)}
                          </option>
                        ))}
                    </select>
                  </div>
                </li>
              ) : (
                ""
              )}
              {userDate.dates ? (
                <li className="ms-6">
                  <span className="absolute flex items-center justify-center bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <MdAccessTimeFilled className="w-6 h-6 dark:bg-slate-50 rounded-full" />
                  </span>
                  <div className="items-center gap-1 p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                    {times.map((time, i) => (
                      <div
                        key={i}
                        className="text-sm p-1 rounded-sm font-normal text-gray-500 lex dark:text-gray-300"
                      >
                        <button
                          onClick={() => getTime(time)}
                          className="border-gray-200 border-b w-full py-3 hover:text-gray-400 hover:border-gray-950"
                        >
                          {format(time, "kk:mm")}
                        </button>
                      </div>
                    ))}
                  </div>
                </li>
              ) : (
                ""
              )}
            </ol>
          </div>
        </div>
      </section>
      {showModal ? (
        <AppointmentModal
          userDate={userDate}
          setShowModal={() => setShowModal(!showModal)}
        />
      ) : (
        ""
      )}
    </Layout>
  );
};

export default Calendars;
