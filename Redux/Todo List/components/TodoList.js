import React from "react";
import { useTodo } from "../hooks/useTodo";

const TodoList = () => {
  const { todos, toggleTodo, removeTodo } = useTodo();

  return (
    <ul className="mt-4 space-y-2">
      {todos.length === 0 ? (
        <p className="text-gray-500">No tasks added.</p>
      ) : (
        todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center p-2 border rounded-md shadow-md">
            <span
              onClick={() => toggleTodo(todo.id)}
              className={`cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""}`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => removeTodo(todo.id)}
              className="px-3 py-1 bg-red-500 text-white rounded-md"
            >
              ❌
            </button>
          </li>
        ))
      )}
    </ul>
  );
};

export default TodoList;
