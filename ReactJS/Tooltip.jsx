import React from "react";

const Tooltip = ({ text, children }) => {
  return (
    <div className="relative flex items-center">
      {children}
      <span className="absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 hover:opacity-100 transition-opacity">
        {text}
      </span>
    </div>
  );
};

const TooltipPage = () => {
  return (
    <div className="p-6 flex justify-center items-center min-h-screen bg-gray-100">
      <Tooltip text="This is a tooltip">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Hover me</button>
      </Tooltip>
    </div>
  );
};

export default TooltipPage;
