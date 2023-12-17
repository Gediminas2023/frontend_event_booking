import React from "react";
import { format, parse, addMinutes } from "date-fns";
import { useAppointment } from "../../contexts/ApiContext";

const AppointmentModal = ({ authUser, userDate, setShowModal, interval }) => {
  const { saveEvent } = useAppointment();
  const time = new Date(userDate.time);
  const formattedTime = format(time, "HH:mm");
  const date = new Date(userDate.time);
  const formattedDate = format(date, "yyyy/MM/dd EEEE");

  const handleClick = async () => {
    const data = {
      stuffId: userDate.stuffId,
      date: formattedDate,
      start: formattedTime,
      end: calculateEndTime(formattedTime, interval),
      service: userDate.service,
    };
    await saveEvent(authUser.id, data);
  };
  const calculateEndTime = (startTime, interval) => {
    const startTimeObj = parse(startTime, "HH:mm", new Date());
    const endTimeObj = addMinutes(startTimeObj, interval);
    const formattedEndTime = format(endTimeObj, "HH:mm");
    return formattedEndTime;
  };

  return (
    <>
      <div
        id="default-modal"
        aria-hidden="true"
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {authUser.username}
              </h2>
              <button
                onClick={setShowModal}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-4 md:p-5 space-y-4">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {userDate.service}
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {formattedDate} - {formattedTime}
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400"></p>
            </div>

            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                onClick={handleClick}
                data-modal-hide="default-modal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                I accept
              </button>
              <button
                onClick={setShowModal}
                data-modal-hide="default-modal"
                type="button"
                className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentModal;
