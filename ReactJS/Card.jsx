import React from "react";

const Card = ({ image, title, description, buttonText, onButtonClick }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      {image && <img src={image} alt={title} className="w-full h-48 object-cover" />}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        {buttonText && (
          <button
            onClick={onButtonClick}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
