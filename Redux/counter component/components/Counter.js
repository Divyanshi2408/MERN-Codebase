import React from "react";
import { useCounter } from "../hooks/useCounter";

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div className="flex flex-col items-center space-y-4 p-4 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">Counter: {count}</h2>
      <div className="flex space-x-2">
        <button onClick={increment} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          Increment
        </button>
        <button onClick={decrement} className="px-4 py-2 bg-red-500 text-white rounded-lg">
          Decrement
        </button>
        <button onClick={reset} className="px-4 py-2 bg-gray-500 text-white rounded-lg">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
