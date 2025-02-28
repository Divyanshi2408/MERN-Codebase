import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Redux Todo List</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default App;
