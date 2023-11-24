import React, { useState } from "react";
import "./Settings.css";
import Layout from "../../components/Layout";
import Calendar from "react-calendar";
import TimePicker from "react-time-picker";
import { Link } from "react-router-dom";
import "react-time-picker/dist/TimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-datepicker/dist/react-datepicker.css";

const Settings = () => {
  const [selectedDates, setSelectedDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dayHoursStart, setDayHoursStart] = useState("08:00");
  const [dayHoursEnd, setDayHoursEnd] = useState("17:00");

  const handleDateChange = (date) => {
    const newSelectedDates = [...selectedDates];
    const dateIndex = newSelectedDates.findIndex((selectedDate) =>
      isSameDay(selectedDate, date)
    );
    if (dateIndex === -1) {
      newSelectedDates.push(date);
    } else {
      newSelectedDates.splice(dateIndex, 1);
    }
    setSelectedDates(newSelectedDates);

    if (!isDisabled(date)) {
      setSelectedDate(date);
    }
  };
  const isSameDay = (date1, date2) =>
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear();

  const isWeekend = (date) => {
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  };

  const isDisabled = (date) => {
    return (
      isWeekend(date) ||
      selectedDates.some((d) => d.getTime() === date.getTime())
    );
  };

  const removeById = (date) => {
    const newList = selectedDates.filter((e) => e !== date);
    setSelectedDates(newList);
  };

  return (
    <Layout>
      <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg border  border-slate-200 dark:border-slate-700">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          selectRange={false}
          tileDisabled={({ date }) => isDisabled(date)}
        />
        <div className="p-3 w-full">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
                <tr>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">
                      Selected Dates:
                    </div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">
                      Work hours start
                    </div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">
                      Work hours End
                    </div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left"></div>
                  </th>
                </tr>
              </thead>

              <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
                {selectedDates.map((date, i) => (
                  <tr key={i}>
                    <td className="p-2 whitespace-nowrap ">
                      <Link to="/">
                        <div className="flex items-center ">
                          {date.toDateString()}
                        </div>
                      </Link>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">
                        <TimePicker
                          onChange={setDayHoursStart}
                          value={dayHoursStart}
                        />
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">
                        <TimePicker
                          onChange={setDayHoursEnd}
                          value={dayHoursEnd}
                        />
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <button
                        onClick={() => removeById(date)}
                        className="border border-gray-500 text-red-700 font-semibold p-1"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {selectedDates ? (
              <div className="space-x-8 flex justify-between  md:mt-4 md:justify-end">
                <button className="text-gray-600 py-2 px-4 uppercase rounded bg-green-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                  save
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
