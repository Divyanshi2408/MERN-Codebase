import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative w-16 h-16">
        <div className="absolute w-full h-full border-4 border-transparent border-t-blue-500 border-b-blue-500 rounded-full animate-spin"></div>
        <div className="absolute w-12 h-12 top-2 left-2 border-4 border-transparent border-t-blue-400 border-b-blue-400 rounded-full animate-spin-slow"></div>
      </div>
    </div>
  );
};

const LoaderPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Stylish Loader Component</h1>
      <Loader />
    </div>
  );
};

export default LoaderPage;
