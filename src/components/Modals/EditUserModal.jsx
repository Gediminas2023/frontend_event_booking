import { useState } from "react";
import { useAppointment } from "../../contexts/ApiContext";
import { useParams, useNavigate } from "react-router-dom";

const DeleteUserModal = ({ user, setShowEditModal }) => {
  const { updateUserById } = useAppointment();
  const { id } = useParams();
  const navigate = useNavigate();
  const [userName, setUserName] = useState((user && user.name) || "");
  const [userEmail, setUserEmail] = useState((user && user.email) || "");

  const handlerUserUpdate = () => {
    const data = { name: userName, email: userEmail };
    updateUserById(id, data);
    setShowEditModal(false);
    navigate("/users");
  };

  const updateName = (e) => {
    setUserName(e);
  };
  const updateEmail = (e) => {
    setUserEmail(e);
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border rounded-2xl  shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">Edit</h3>
              <button
                className="p-2 ml-auto bg-white rounded-lg border text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowEditModal()}
              >
                X
              </button>
            </div>
            <div className="relative p-6  flex flex-col ">
              <input
                onChange={(e) => updateName(e.target.value)}
                className="bg-transparent border-b w-18 pt-4"
                type="name"
                placeholder="Name"
                value={userName}
              />
              <input
                onChange={(e) => updateEmail(e.target.value)}
                className="bg-transparent border-b w-18 pt-4"
                type="email"
                placeholder="Email"
                value={userEmail}
              />
              <input
                className="bg-transparent border-b w-18 pt-4"
                type="time"
                placeholder="Time"
              />
              <p className="my-4 text-blueGray-500 text-lg leading-relaxed"></p>
            </div>

            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowEditModal()}
              >
                Close
              </button>
              <button
                onClick={handlerUserUpdate}
                className="bg-green-700 hover:bg-green-600 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default DeleteUserModal;
