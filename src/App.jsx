import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Dash";
import { ApiContext } from "./contexts/ApiContext";
import { SettingsApiContext } from "./contexts/SettingsContext";
import Users from "./pages/Users";
import Home from "./pages/Home";
import User from "./pages/User";
import Settings from "./pages/Settings/index";
import Appointment from "./pages/Appointment";
import About from "./pages/About";
import Calendar from "./pages/Calendar";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ApiContext>
              <Home />
            </ApiContext>
          }
        />
        <Route
          exact
          path="/about"
          element={
            <ApiContext>
              <About />
            </ApiContext>
          }
        />
        <Route
          exact
          path="/calendar"
          element={
            <ApiContext>
              <SettingsApiContext>
                <Calendar />
              </SettingsApiContext>
            </ApiContext>
          }
        />
        <Route
          exact
          path="/dashboard"
          element={
            <ApiContext>
              <Dashboard />
            </ApiContext>
          }
        />
        <Route
          exact
          path="/appointments"
          element={
            <ApiContext>
              <Appointment />
            </ApiContext>
          }
        />
        <Route
          exact
          path="/users"
          element={
            <ApiContext>
              <Users />
            </ApiContext>
          }
        />
        <Route
          exact
          path="/settings"
          element={
            <SettingsApiContext>
              <Settings />
            </SettingsApiContext>
          }
        />
        <Route
          exact
          path="/user/:id"
          element={
            <ApiContext>
              <User />
            </ApiContext>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
