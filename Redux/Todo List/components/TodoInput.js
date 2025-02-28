import React, { useState } from "react";
import { useTodo } from "../hooks/useTodo";

const TodoInput = () => {
  const [text, setText] = useState("");
  const { addTodo } = useTodo();

  const handleAdd = () => {
    if (text.trim() !== "") {
      addTodo(text);
      setText("");
    }
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task..."
        className="border p-2 rounded-md flex-1"
      />
      <button onClick={handleAdd} className="px-4 py-2 bg-blue-500 text-white rounded-md">
        Add
      </button>
    </div>
  );
};

export default TodoInput;
