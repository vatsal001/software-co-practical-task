import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWorkspaces } from "../services/mockAPIs";
import { setWorkspaces } from "../redux/slices/workspaceSlice";

const SuperAdminDashboard = () => {
  const dispatch = useDispatch();
  const workspaces = useSelector((state) => state.workspace.workspaces);

  useEffect(() => {
    const loadWorkspaces = async () => {
      const data = await fetchWorkspaces();
      dispatch(setWorkspaces(data));
    };
    loadWorkspaces();
  }, [dispatch]);

  return (
    <div>
      <h1>Super Admin Dashboard</h1>
      {/* Display workspaces */}
      {workspaces.map((ws) => (
        <div key={ws.id}>{ws.name}</div>
      ))}
    </div>
  );
};

export default SuperAdminDashboard;
