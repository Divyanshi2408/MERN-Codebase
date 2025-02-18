import React from "react";

const Card = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-10 bg-gray-100 dark:bg-gray-800 min-h-screen">
      {/* Card 1 */}
      <div className="max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border dark:border-gray-700 transform hover:scale-105 transition-transform duration-300">
        <img src="https://source.unsplash.com/400x300/?technology" alt="Tech" className="w-full h-56 object-cover" />
        <div className="p-5">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Tech Innovations</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Explore the latest trends in technology and innovation.
          </p>
          <button
            onClick={() => alert("Read More clicked")}
            className="mt-4 w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Read More
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border dark:border-gray-700 transform hover:scale-105 transition-transform duration-300">
        <img src="https://source.unsplash.com/400x300/?nature" alt="Nature" className="w-full h-56 object-cover" />
        <div className="p-5">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Nature's Beauty</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Discover the wonders of nature with breathtaking views.
          </p>
          <button
            onClick={() => alert("Explore clicked")}
            className="mt-4 w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
