import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Dash";
import { ApiContext } from "./contexts/ApiContext";
import { AuthUserContext } from "./contexts/AuthContext";
import { SettingsApiContext } from "./contexts/SettingsContext";
import PrivateRoute from "./util/PrivateRoute";
import PrivateAdminRoute from "./util/PrivateAdminRoute";
import Users from "./pages/Users";
import Home from "./pages/Home";
import User from "./pages/User";
import Settings from "./pages/Settings/index";
import Appointment from "./pages/Appointment";
import Calendar from "./pages/Calendar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <AuthUserContext>
        <SettingsApiContext>
          <ApiContext>
            <Routes>
              <Route
                exact
                path="/calendar"
                element={
                  <PrivateRoute>
                    <Calendar />
                  </PrivateRoute>
                }
              />
              <Route
                exact
                path="/dashboard"
                element={
                  <PrivateAdminRoute>
                    <Dashboard />
                  </PrivateAdminRoute>
                }
              />
              <Route
                exact
                path="/dashboard/appointments"
                element={
                  <PrivateAdminRoute>
                    <Appointment />
                  </PrivateAdminRoute>
                }
              />
              <Route
                exact
                path="/dashboard/users"
                element={
                  <PrivateAdminRoute>
                    <Users />
                  </PrivateAdminRoute>
                }
              />
              <Route
                exact
                path="/dashboard/settings"
                element={
                  <PrivateAdminRoute>
                    <Settings />
                  </PrivateAdminRoute>
                }
              />
              <Route exact path="/users/:id" element={<User />} />
              <Route
                exact
                path="/profile"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </ApiContext>
        </SettingsApiContext>
      </AuthUserContext>
    </Router>
  );
}

export default App;
