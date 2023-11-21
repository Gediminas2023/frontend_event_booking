import { useParams, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { useAppointment } from "../contexts/ApiContext";
import { useEffect, useState } from "react";
import avatar from "../assets/200.png";
import DeleteUserModal from "../components/Modals/DeleteUserModal";
import EditUserModal from "../components/Modals/AddEditUserModal";

const User = () => {
  const { deleteUserById } = useAppointment();
  const navigate = useNavigate();
  const { getUserById, user, blockUserById } = useAppointment();
  const { id } = useParams();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const editUser = () => {
    setShowEditModal(!showEditModal);
  };

  const deleteUser = (e) => {
    setShowDeleteModal(!showDeleteModal);
    if (e === "YES") {
      deleteUserById(id);
      navigate("/users");
      setShowDeleteModal(!showDeleteModal);
    }
  };

  const blockUser = () => {
    const data = { name: user.name, email: user.email, blocked: !user.blocked };
    blockUserById(id, data);
    navigate("/users");
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
          name={user.name}
          setShowDeleteModal={() => setShowDeleteModal()}
          deleteUser={(e) => deleteUser(e)}
        />
      </Layout>
    );
  }
  return (
    <Layout>
      <div className="p-16 dark:bg-slate-800">
        <button
          className="p-2 ml-auto bg-white rounded-lg border text-black opacity-30 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
          onClick={() => navigate("/users")}
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
            {/* </div>  */}

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
            <h1 className="text-4xl font-medium text-gray-300">
              {user && user.name},
              <span className="font-light pl-4 text-gray-500">
                {user && user.email}
              </span>
            </h1>
            {user &&
              user.events.map((e) => (
                <p key={e.id} className="mt-8 text-green-600">
                  {e.start}
                </p>
              ))}
            {/* <p className="mt-2 text-gray-400">University of Computer Science</p> */}
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
