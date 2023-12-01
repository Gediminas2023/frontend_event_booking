import React, { useState } from "react";
import "./Settings.css";
import Layout from "../../components/Layout";
import Calendar from "react-calendar";
import TimePicker from "react-time-picker";
import { useSettings } from "../../contexts/SettingsContext";
import { Link } from "react-router-dom";
import { isToday } from "date-fns";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-time-picker/dist/TimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-datepicker/dist/react-datepicker.css";

const Settings = () => {
  const { dateList, saveAndUpdateDate, deleteDataById } = useSettings();
  const [selectedDates, setSelectedDates] = useState(dateList);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    const newSelectedDates = [...selectedDates];
    const dateIndex = newSelectedDates.findIndex((selectedDate) =>
      isSameDay(selectedDate.date, date)
    );
    if (dateIndex === -1) {
      newSelectedDates.push({
        date: new Date(date),
        times: { start: "", end: "" },
      });
    } else {
      newSelectedDates.splice(dateIndex, 1);
    }
    setSelectedDates(newSelectedDates);

    if (!isDisabled(date)) {
      setSelectedDate(date);
    }
  };

  const isSameDay = (date1, date2) =>
    date1 instanceof Date &&
    date2 instanceof Date &&
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
      selectedDates.some((d) => {
        if (d.date instanceof Date) {
          return d.date.getTime() === date.getTime();
        }
        return false;
      })
    );
  };

  const removeByIdDate = (id) => {
    if (id) {
      deleteDataById(id);
    } else {
      console.log(selectedDates.filter((e) => e.id === id));
    }
    toast.success("Deleted sucessfully");
  };

  const handleHourStart = (date, e) => {
    const newList = selectedDates.map((item) =>
      item.date === date
        ? { ...item, times: { ...item.times, start: e } }
        : item
    );
    setSelectedDates(newList);
  };

  const handleHourEnd = (date, e) => {
    const newList = selectedDates.map((item) =>
      item.date === date ? { ...item, times: { ...item.times, end: e } } : item
    );
    setSelectedDates(newList);
  };

  const handleSaveSubmit = () => {
    const transformedObject = selectedDates.length > 0 ? selectedDates : [];
    saveAndUpdateDate(transformedObject);
    toast.success("Saved sucessfully");
  };

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
      <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg border  border-slate-200 dark:border-slate-700">
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
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
                {dateList &&
                  selectedDates
                    .filter(
                      (e) =>
                        isToday(new Date(e.date)) ||
                        new Date(e.date) > new Date()
                    )
                    .map((date, i) => (
                      <tr key={i}>
                        <td className="p-2 whitespace-nowrap ">
                          <Link to="/">
                            <div className="flex items-center ">
                              {formatDate(date.date)}
                            </div>
                          </Link>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">
                            <TimePicker
                              onChange={(e) => handleHourStart(date.date, e)}
                              value={date.times.start}
                            />
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">
                            <TimePicker
                              onChange={(e) => handleHourEnd(date.date, e)}
                              value={date.times.end}
                            />
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <button
                            onClick={() => removeByIdDate(date.id)}
                            className="border border-gray-500 text-red-700 font-semibold p-1"
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
            {selectedDates.map((e) => e.date) ? (
              <div className="space-x-8 flex justify-between  md:mt-4 md:justify-end">
                <button
                  onClick={handleSaveSubmit}
                  className="text-gray-600 py-2 px-4 uppercase rounded bg-green-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                >
                  Save
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
