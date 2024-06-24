import { MaterialReactTable } from "material-react-table";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmployees } from "../redux/slices/employeeSlice";
import { fetchEmployees } from "../services/mockAPIs";

const EmployeeDashboard = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employee.employees);
  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "email",
        header: "Email",
        size: 150,
      },
      {
        accessorKey: "address.street",
        header: "Address",
        size: 200,
      },
      {
        accessorKey: "city",
        header: "City",
        size: 150,
      },
      {
        accessorKey: "state",
        header: "State",
        size: 150,
      },
    ],
    []
  );

  useEffect(() => {
    const loadEmployees = async () => {
      const data = await fetchEmployees();
      dispatch(setEmployees(data));
    };
    loadEmployees();
  }, [dispatch]);

  return (
    <div>
      <h1>Employee Dashboard</h1>
      <MaterialReactTable
        columns={columns}
        data={employees}
        enablePagination
        enableSorting
      />
    </div>
  );
};

export default EmployeeDashboard;
