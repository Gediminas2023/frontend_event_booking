import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Dash";
import { ApiContext } from "./contexts/ApiContext";
import Users from "./pages/Users";
import Home from "./pages/Home";
import User from "./pages/User";
import Settings from "./pages/Settings/index";

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
          path="/appointments"
          element={
            <ApiContext>
              <Dashboard />
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
            <ApiContext>
              <Settings />
            </ApiContext>
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
