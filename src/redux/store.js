import { configureStore } from '@reduxjs/toolkit';
import SuperAdminReducer from './slices/superadminSlice';
import workspaceReducer from './slices/workspaceSlice';
import employeeReducer from './slices/employeeSlice';

export const store = configureStore({
  reducer: {
    user: SuperAdminReducer,
    workspace: workspaceReducer,
    employee: employeeReducer,
  },
});
