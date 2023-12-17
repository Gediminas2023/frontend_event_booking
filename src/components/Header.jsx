import React, { useState } from "react";
import { TiMessages } from "react-icons/ti";
import ThemeToggle from "./ThemeToggle";
import { useAuthContext } from "../contexts/AuthContext";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const { logout } = useAuthContext();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const signout = () => {
    logout();
  };

  return (
    <header className="sticky top-0 bg-white dark:bg-[#182235] border-b border-slate-200 dark:border-slate-700 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          <div className="flex">
            <button
              className="text-slate-500 hover:text-slate-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(!sidebarOpen);
              }}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
          </div>

          <div className="flex items-center space-x-3">
            <div className="relative inline-block">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="relative z-10 block p-2 "
              >
                <div className="relative ">
                  <div className="absolute bottom-auto left-auto right-5 top-4 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-red-600 p-1.5 text-xs"></div>
                  <div className="flex items-center justify-center rounded-lg px-4 py-2 text-center shadow-lg ">
                    <TiMessages className="h-7 w-7" />
                  </div>
                </div>
              </button>

              <div
                onClick={() => setDropdownOpen(!dropdownOpen)}
                x-transition:enter="transition ease-out duration-100"
                x-transition:enter-start="opacity-0 scale-90"
                x-transition:enter-end="opacity-100 scale-100"
                x-transition:leave="transition ease-in duration-100"
                x-transition:leave-start="opacity-100 scale-100"
                x-transition:leave-end="opacity-0 scale-90"
                className={
                  dropdownOpen
                    ? "absolute  right-0 z-20 w-64 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-lg sm:w-80 dark:bg-gray-800"
                    : "absolute hidden right-0 z-20 w-64 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-lg sm:w-80 dark:bg-gray-800"
                }
              >
                <div className="py-2">
                  <a
                    href="#"
                    className="flex items-center px-4 py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
                  >
                    <img
                      className="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                      alt="avatar"
                    />
                    <p className="mx-2 text-sm text-gray-600 dark:text-white">
                      <span className="font-bold" href="#">
                        Sara Salah
                      </span>
                    </p>
                  </a>

                  <a
                    href="#"
                    className="flex items-center px-4 py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
                  >
                    <img
                      className="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full"
                      src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                      alt="avatar"
                    />
                    <p className="mx-2 text-sm text-gray-600 dark:text-white">
                      <span className="font-bold" href="#">
                        Jane Doe
                      </span>
                    </p>
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-3 -mx-2 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <img
                      className="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full"
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80"
                      alt="avatar"
                    />
                    <p className="mx-2 text-sm text-gray-600 dark:text-white">
                      <span className="font-bold" href="#">
                        Abigail Bennett
                      </span>
                    </p>
                  </a>
                </div>
                <a
                  href="#"
                  className="block py-2 font-bold text-center text-white bg-gray-800 dark:bg-gray-700 hover:underline"
                >
                  See all notifications
                </a>
              </div>
            </div>

            <hr className="w-px h-6 bg-slate-200 dark:bg-slate-700 border-none" />
            <ThemeToggle />
            <button className="pr-1 pl-2" onClick={signout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
