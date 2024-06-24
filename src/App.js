import React from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { store } from "./redux/store";
import AccessDenied from "./screen/AccessDenied";
import AdminDashboard from "./screen/AdminDashboard";
import Dashboard from "./screen/EmployeeDashboard";
import Login from "./screen/Login";
import NotFound from "./screen/NotFound";
import Profile from "./screen/Proflie";
import SuperAdminDashboard from "./screen/SuperAdminDashboard";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <Dashboard />
              // <PrivateRoute component={Dashboard} roles={["employee"]} />
            }
          />
          <Route
            path="/admin-dashboard"
            element={
              <AdminDashboard />
              // <PrivateRoute component={AdminDashboard} roles={["admin"]} />
            }
          />
          <Route
            path="/super-admin-dashboard"
            element={
              <SuperAdminDashboard />
              // <PrivateRoute
              //   component={SuperAdminDashboard}
              //   roles={["superadmin"]}
              // />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile />
              // <PrivateRoute component={Profile} />
            }
          />
          <Route path="/access-denied" element={<AccessDenied />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
