import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../services/mockAPIs";
import { setEmployees } from "../redux/slices/employeeSlice";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employee.employees);

  useEffect(() => {
    const loadEmployees = async () => {
      const data = await fetchEmployees();
      dispatch(setEmployees(data));
    };
    loadEmployees();
  }, [dispatch]);

  return (
    <div>
      <h1>Admin Dashboard</h1>

      {employees.map((emp) => (
        <div key={emp.id}>{emp.name}</div>
      ))}
    </div>
  );
};

export default AdminDashboard;
