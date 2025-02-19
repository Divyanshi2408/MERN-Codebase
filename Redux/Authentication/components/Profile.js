import React from "react";
import { useAuth } from "../hooks/useAuth";

const Profile = () => {
  const { user, isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) return <p>Please log in.</p>;

  return (
    <div className="flex flex-col items-center space-y-4 p-4 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>
      <button
        onClick={logout}
        className="px-4 py-2 bg-red-500 text-white rounded-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
