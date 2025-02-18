import React, { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-5">
      {/* Button to Open Modal */}
      <button
        onClick={openModal}
        className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Open Modal
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          {/* Modal Content */}
          <div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96 text-center relative transform transition-all scale-95 opacity-0 animate-fadeIn"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Welcome to the Modal</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              This is a stylish and modern modal popup.
            </p>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="mt-4 px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
