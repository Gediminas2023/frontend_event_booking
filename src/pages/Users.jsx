import Layout from "../components/Layout";
import avatar from "../assets/avatar.png";
import { useAppointment } from "../contexts/ApiContext";
import { Link } from "react-router-dom";

const Users = () => {
  const { users } = useAppointment();

  return (
    <Layout>
      <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg border  border-slate-200 dark:border-slate-700">
        <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
          <button className="text-white py-2 px-4 uppercase rounded bg-blue-500 hover:bg-blue-400 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
            Create User
          </button>
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
                </tr>
              </thead>

              <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
                {users.map((user) => {
                  return (
                    <tr key={user.id}>
                      <td className="p-2 whitespace-nowrap">
                        <Link to={`/user/` + user.id}>
                          <div className="flex items-center">
                            <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                              <img
                                className="rounded-full"
                                src={user.image ? user.image : avatar}
                                width="40"
                                height="40"
                                alt={user.name}
                              />
                            </div>
                            <div className="font-medium text-slate-800 dark:text-slate-100">
                              {user.name}
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{user.email}</div>
                      </td>

                      {/* <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">

                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">
                        </div>
                      </td> */}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
