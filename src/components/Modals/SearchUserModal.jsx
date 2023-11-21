import { useState } from "react";
import { Link } from "react-router-dom";

const DeleteUserModal = ({ users, handleSearchChange }) => {
  const [filteredUsers, setFilteredUsers] = useState();

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;

    const filteredItems = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filteredItems);
  };
  return (
    <div className="justify-center  pt-24 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative my-6 mx-auto  max-w-3xl w-2/5">
        <div className="border rounded-2xl shadow-lg w-full  h-3/4 relative flex flex-col outline-none focus:outline-none">
          <div className="relative p-6 overflow-auto flex flex-col ">
            <div className="mb-3 ">
              <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                <input
                  onChange={handleInputChange}
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

            {filteredUsers &&
              filteredUsers.map((user) => (
                <Link to={`/user/` + user.id} key={user.id}>
                  {user.name}
                </Link>
              ))}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => handleSearchChange()}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserModal;
