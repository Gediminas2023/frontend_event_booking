import Layout from "../components/Layout";
import avatar from "../assets/avatar.png";
import { useAppointment } from "../contexts/ApiContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import EditUserModal from "../components/Modals/AddEditUserModal";
import SearchUserModal from "../components/Modals/SearchUserModal";

// import users from "../constants/users";
import Pagination from "../components/Pagination";

const Users = () => {
  const { users } = useAppointment();
  const [showEditModal, setShowEditModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = users.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(users.length / recordsPerPage);
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const goToNextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const handleSearchChange = () => {
    setShowSearchModal(!showSearchModal);
  };

  if (showSearchModal) {
    return (
      <Layout>
        <SearchUserModal
          users={users}
          handleSearchChange={handleSearchChange}
        />
      </Layout>
    );
  }

  if (showEditModal) {
    return (
      <Layout>
        <EditUserModal setShowEditModal={() => setShowEditModal()} />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg border  border-slate-200 dark:border-slate-700">
        <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
          <div className="mb-3 ">
            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
              <button
                onClick={() => setShowEditModal(!showEditModal)}
                className="text-white py-2 px-4 uppercase rounded bg-blue-500 hover:bg-blue-400 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              >
                Create User
              </button>
              <input
                onClick={handleSearchChange}
                type="search"
                className="relative m-0 block min-w-0 flex-auto rounded border border-solid border-neutral-600 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-500 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-400 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
              />

              <span
                className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                id="basic-addon2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" />
                </svg>
              </span>
            </div>
          </div>
        </header>

        <div className="p-3">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
                <tr>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Name</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Email</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Role</div>
                  </th>
                </tr>
              </thead>

              <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
                {currentRecords.map((user) => {
                  return (
                    <tr key={user.id}>
                      <td className="p-2 whitespace-nowrap ">
                        <Link to={`/user/` + user.id}>
                          <div className="flex items-center text-red-700">
                            <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                              <img
                                className="rounded-full"
                                src={user.image ? user.image : avatar}
                                width="40"
                                height="40"
                                alt={user.name}
                              />
                            </div>
                            <div
                              className={
                                user.blocked
                                  ? "font-medium text-red-600 dark:text-red-700"
                                  : "font-medium text-slate-800 dark:text-slate-100"
                              }
                            >
                              {user.name}
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div
                          className={
                            user.blocked
                              ? "font-medium text-red-600 dark:text-red-700"
                              : "font-medium text-slate-800 dark:text-slate-100"
                          }
                        >
                          {user.email}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div
                          className={
                            user.roles === "WORKER"
                              ? "text-yellow-500"
                              : user.roles === "ADMIN"
                              ? "text-green-500"
                              : ""
                          }
                        >
                          {user.roles}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <Pagination
              pageNumbers={pageNumbers}
              goToPrevPage={goToPrevPage}
              goToNextPage={goToNextPage}
              setCurrentPage={(e) => setCurrentPage(e)}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
