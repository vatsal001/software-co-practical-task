import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.Superadmin.Superadmin);

  return (
    <div>
      <h1>Profile</h1>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Role: {user.role}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
