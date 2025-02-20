import { useReducer } from "react";

/**
 * Counter component using useReducer for state management
 */
const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className="p-4 border rounded shadow-md text-center">
      <p className="text-xl">Count: {state.count}</p>
      <button className="m-2 p-2 bg-blue-500 text-white rounded" onClick={() => dispatch({ type: "increment" })}>+</button>
      <button className="m-2 p-2 bg-red-500 text-white rounded" onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}