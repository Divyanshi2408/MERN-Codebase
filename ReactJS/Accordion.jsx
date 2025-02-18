import React, { useState } from "react";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border rounded-md mb-2">
      <button className="w-full text-left p-3 bg-gray-200 hover:bg-gray-300" onClick={() => setIsOpen(!isOpen)}>
        {title}
      </button>
      {isOpen && <div className="p-3 bg-white">{children}</div>}
    </div>
  );
};

const AccordionPage = () => {
  return (
    <div className="p-6 flex flex-col items-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Accordion Component</h1>
      <Accordion title="What is React?">
        React is a JavaScript library for building user interfaces.
      </Accordion>
      <Accordion title="Why use Tailwind?">
        Tailwind CSS is a utility-first CSS framework for rapid UI development.
      </Accordion>
    </div>
  );
};

export default AccordionPage;
