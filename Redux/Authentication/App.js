import React from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { useAuth } from "./hooks/useAuth";

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {isAuthenticated ? <Profile /> : <Login />}
    </div>
  );
};

export default App;
