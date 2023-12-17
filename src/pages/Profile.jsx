import { useEffect, useState } from "react";
import avatar from "../assets/200.png";
import HomeLayout from "../components/HomeLayout";
import { useAuthContext } from "../contexts/AuthContext";
import { useAppointment } from "../contexts/ApiContext";
import EditUserModal from "../components/Modals/AddEditUserModal";

const Profile = () => {
  const { authUser } = useAuthContext();
  const { getUserById, user, deleteEventById } = useAppointment();
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    getUserById(authUser.id);
  }, []);

  const deleteEvent = (id) => {
    deleteEventById(id);
  };

  const editUser = () => {
    setShowEditModal(!showEditModal);
  };

  if (showEditModal) {
    return (
      <HomeLayout>
        <EditUserModal
          user={user}
          setShowEditModal={() => setShowEditModal()}
        />
      </HomeLayout>
    );
  }

  return (
    <HomeLayout>
      <section className=" section">
        <div className="container">
          <div className="section-header pt-24">
            <h3 className="title" data-title="My info">
              Profile
            </h3>
          </div>

          <div className=" p-16 dark:bg-slate-800">
            <div className="p-8 shadow mt-24">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div>
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 text-yellow-300 me-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300 me-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300 me-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300 me-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                      4.95
                    </p>
                    <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                      out of
                    </p>
                    <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                      5
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <img
                    className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500"
                    src={avatar}
                  />
                </div>

                <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                  <button
                    onClick={editUser}
                    className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                  >
                    Update Profile
                  </button>
                </div>
              </div>
              <div className="mt-20 text-center border-b pb-12">
                <h1 className="text-4xl font-medium text-gray-500">
                  {user && user.username}
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
                              <button
                                onClick={() => deleteEvent(e.id)}
                                className="text-white py-2 px-4 uppercase rounded bg-pink-500 hover:bg-pink-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      ))}
                  </table>
                  <div className="flex justify-center">No comming events.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HomeLayout>
  );
};

export default Profile;
