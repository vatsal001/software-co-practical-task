import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./screen/Login";
import Dashboard from "./screen/EmployeeDashboard";
import Profile from "./screen/Proflie";
import AdminDashboard from "./screen/AdminDashboard";
import SuperAdminDashboard from "./screen/SuperAdminDashboard";
import AccessDenied from "./screen/AccessDenied";
import NotFound from "./screen/NotFound";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute component={Dashboard} roles={["employee"]} />
            }
          />
          <Route
            path="/admin-dashboard"
            element={
              <PrivateRoute component={AdminDashboard} roles={["admin"]} />
            }
          />
          <Route
            path="/super-admin-dashboard"
            element={
              <PrivateRoute
                component={SuperAdminDashboard}
                roles={["superadmin"]}
              />
            }
          />
          <Route
            path="/profile"
            element={<PrivateRoute component={Profile} />}
          />
          <Route path="/access-denied" element={<AccessDenied />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
