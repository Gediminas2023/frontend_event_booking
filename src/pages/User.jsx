import { useParams, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { useAppointment } from "../contexts/ApiContext";
import { useEffect, useState } from "react";
import avatar from "../assets/200.png";
import DeleteUserModal from "../components/Modals/DeleteUserModal";
import EditUserModal from "../components/Modals/AddEditUserModal";
import DeleteEventModal from "../components/Modals/DeleteEventModal";

const User = () => {
  const navigate = useNavigate();
  const { getUserById, user, blockUserById, deleteUserById, deleteEventById } =
    useAppointment();
  const { id } = useParams();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteEventModal, setShowDeleteEventModal] = useState(false);

  const editUser = () => {
    setShowEditModal(!showEditModal);
  };

  const deleteUser = (e) => {
    setShowDeleteModal(!showDeleteModal);
    if (e === "YES") {
      deleteUserById(id);
      navigate("/dashboard/users");
      setShowDeleteModal(!showDeleteModal);
    }
  };

  const deleteEvent = (id, userId) => {
    deleteEventById(id, userId);
    navigate(`/users/${userId}`);
  };

  const blockUser = () => {
    const data = {
      username: user.username,
      email: user.email,
      blocked: !user.blocked,
      role: user.roles.map((e) => {
        if (e.name === "ROLE_ADMIN") {
          return "admin";
        }
        if (e.name === "ROLE_MODERATOR") {
          return "mod";
        }
        if (e.name === "ROLE_USER") {
          return "user";
        }
      }),
    };
    blockUserById(id, data);
    navigate("/dashboard/users");
  };

  useEffect(() => {
    getUserById(id);
  }, [id]);

  if (showEditModal) {
    return (
      <Layout>
        <EditUserModal
          user={user}
          setShowEditModal={() => setShowEditModal()}
        />
      </Layout>
    );
  }

  if (showDeleteModal) {
    return (
      <Layout>
        <DeleteUserModal
          name={user.username}
          setShowDeleteModal={() => setShowDeleteModal()}
          deleteUser={(e) => deleteUser(e)}
        />
      </Layout>
    );
  }

  if (showDeleteEventModal) {
    return (
      <Layout>
        <DeleteEventModal
          user={user}
          setShowDeleteEventModal={() => setShowDeleteEventModal()}
          deleteEvent={(e) => deleteEvent(e)}
        />
      </Layout>
    );
  }
  return (
    <Layout>
      <div className=" p-16 dark:bg-slate-800">
        <button
          className="p-2 ml-auto bg-white rounded-lg border text-black opacity-30 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
          onClick={() => navigate("/dashboard/users")}
        >
          X
        </button>
        <div className="p-8 shadow mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div>
              <p className="text-gray-400">
                <button className="text-white py-2 px-4 uppercase rounded bg-green-600 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                  Add appointment
                </button>
              </p>
            </div>

            {user && !user.image ? (
              <div className="relative">
                <img
                  className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500"
                  src={avatar}
                />
              </div>
            ) : (
              <div className="relative">
                <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-24 w-24"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                  </svg>
                </div>
              </div>
            )}

            <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              <button
                onClick={editUser}
                className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              >
                Update
              </button>
              <button
                onClick={deleteUser}
                className="text-white py-2 px-4 uppercase rounded bg-red-800 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              >
                Delete
              </button>
              <button
                onClick={blockUser}
                className="text-white py-2 px-4 uppercase rounded bg-red-800 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              >
                {user && user.blocked ? "Unblock" : "Block"}
              </button>
            </div>
          </div>
          <div className="mt-20 text-center border-b pb-12">
            <h1 className="text-4xl font-medium text-gray-500">
              {user && user.username},
              <span className="font-light pl-4 text-gray-500">
                {user && user.email}
              </span>
            </h1>

            <div className="relative pt-8  overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                {user &&
                  user.events.map((e) => (
                    <tbody key={e.id}>
                      <tr className="bg-white border-b dark:bg-transparent dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {e.service}
                        </th>
                        <td className="px-6 py-4">{e.date}</td>
                        <td className="px-6 py-4">{e.start}</td>
                        <td className="px-6 py-4">
                          {" "}
                          <button
                            onClick={() => deleteEvent(e.id, user.id)}
                            className="text-white py-2 px-4 uppercase rounded bg-red-800 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  ))}
              </table>
            </div>
          </div>
          <div className="mt-12 flex flex-col justify-center">
            <p className="text-gray-400 text-center font-light lg:px-16">
              An artist of considerable range, Ryan — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure. An artist of considerable range.
            </p>
            <button className="text-gray-500 py-2 px-4  font-medium mt-4">
              Show more
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default User;
