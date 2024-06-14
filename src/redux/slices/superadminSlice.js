// src/redux/slices/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Superadmin: null,
};

const superadminSlice = createSlice({
  name: "Superadmin",
  initialState,
  reducers: {
    setSuperadmin: (state, action) => {
      state.Superadmin = action.payload;
    },
    logout: (state) => {
      state.Superadmin = null;
    },
  },
});

export const { setSuperadmin, logout } = superadminSlice.actions;
export default superadminSlice.reducer;
