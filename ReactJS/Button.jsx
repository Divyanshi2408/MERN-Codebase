import React from "react";

const Button = ({ children, variant = "blue", onClick }) => {
  const baseStyles =
    "px-6 py-3 text-white font-semibold rounded-full transition-all duration-300 shadow-lg";

  const variants = {
    blue: "bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800",
    purple: "bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800",
    pink: "bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600",
    green: "bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};

const ButtonPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
      <h1 className="text-3xl font-bold mb-4">Stylish Gradient Buttons</h1>
      <Button variant="blue">Blue Button</Button>
      <Button variant="purple">Purple Button</Button>
      <Button variant="pink">Pink Button</Button>
      <Button variant="green">Green Button</Button>
    </div>
  );
};

export default ButtonPage;
