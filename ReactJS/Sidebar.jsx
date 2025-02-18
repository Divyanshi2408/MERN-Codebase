import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4 fixed left-0 top-0">
      <h2 className="text-xl font-semibold mb-4">Sidebar</h2>
      <ul>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded">Home</li>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded">About</li>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded">Services</li>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded">Contact</li>
      </ul>
    </div>
  );
};

const SidebarPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="ml-64 p-6">
        <h1 className="text-2xl font-bold">Sidebar Component</h1>
        <p className="mt-4">This is a simple sidebar navigation layout.</p>
      </div>
    </div>
  );
};

export default SidebarPage;
