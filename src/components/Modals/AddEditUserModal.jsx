import { useState } from "react";
import { useAppointment } from "../../contexts/ApiContext";
import { useNavigate } from "react-router-dom";

const DeleteUserModal = ({ user, setShowEditModal }) => {
  const { updateUserById, saveUser } = useAppointment();

  const navigate = useNavigate();
  const [username, setUsername] = useState((user && user.username) || "");
  const [email, setEmail] = useState((user && user.email) || "");
  const [roles, setRole] = useState(user && user.roles.map((e) => e.name));
  const [password, setPassword] = useState((user && user.password) || "");

  const handlerUserUpdate = () => {
    if (user) {
      const update = {
        username: username,
        email: email,
        password: password,
        roles: [roles],
        blocked: user.blocked,
      };

      updateUserById(user.id, update);
      setShowEditModal(false);
      navigate("/dashboard/users");
    } else {
      const save = {
        username: username,
        email: email,
        password: password,
        roles: [roles],
      };

      saveUser(save);
      setShowEditModal(false);
      navigate("/dashboard/users");
    }
  };

  const addName = (e) => {
    setUsername(e);
  };
  const addEmail = (e) => {
    setEmail(e);
  };
  const addPass = (e) => {
    setPassword(e);
  };
  const addRole = (e) => {
    setRole(e);
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 mx-auto max-w-3xl w-2/5">
          <div className="border rounded-2xl shadow-lg w-full relative flex flex-col outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                {user ? "Edit" : "Add new user"}
              </h3>
              <button
                className="p-2 ml-auto bg-white rounded-lg border text-black opacity-30 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowEditModal()}
              >
                X
              </button>
            </div>
            <div className="relative p-6 flex flex-col ">
              <input
                onChange={(e) => addName(e.target.value)}
                className="bg-transparent pb-2 border-b w-18 pt-4 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                type="name"
                placeholder="Name"
                value={username}
              />
              <input
                onChange={(e) => addEmail(e.target.value)}
                className="bg-transparent pb-2 border-b w-18 pt-4 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                type="email"
                placeholder="Email"
                value={email}
              />
              <input
                onChange={(e) => addPass(e.target.value)}
                className="bg-transparent pb-2 border-b w-18 pt-4 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                type="password"
                placeholder="Password"
                value={password}
              />

              <select
                id="underline_select"
                className="bg-transparent pb-2 border-b w-18 pt-4 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                defaultValue={"DEFAULT"}
                onChange={(e) => addRole(e.target.value)}
              >
                <option value="DEFAULT" disabled>
                  Choose a role
                </option>
                <option value="ROLE_USER">User</option>
                <option value="ROLE_ADMIN">Admin</option>
                <option value="ROLE_MODERATOR">Moderator</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-end p-6 rounded-b">
            <button
              className="text-grey-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
              {user ? "Update" : "Save"}
            </button>
          </div>
        </div>
      </div>

      {/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
    </>
  );
};

export default DeleteUserModal;
