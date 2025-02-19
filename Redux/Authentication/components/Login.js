import React from "react";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { login } = useAuth();

  const handleLogin = () => {
    const mockUser = { name: "Divyanshi", email: "divyanshi@example.com" };
    login(mockUser);
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">Login</h2>
      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
