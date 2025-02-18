import React, { useState } from "react";
import { createPortal } from "react-dom";

const Dialog = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          ✖
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

const DialogPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Dialog Component Using Portal</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setIsOpen(true)}
      >
        Open Dialog
      </button>
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-lg font-bold mb-2">This is a Dialog</h2>
        <p className="text-gray-700">Content inside the dialog box.</p>
      </Dialog>
    </div>
  );
};

export default DialogPage;
