// src/pages/Login.js
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setSuperadmin } from "../redux/slices/superadminSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const user = { name: data.name, role: "employee" };
    dispatch(setSuperadmin(user));
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input {...register("name")} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" {...register("password")} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
