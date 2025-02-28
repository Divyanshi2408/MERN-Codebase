import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, removeTodo } from "../redux/todoSlice";

export const useTodo = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return {
    todos,
    addTodo: (text) => dispatch(addTodo(text)),
    toggleTodo: (id) => dispatch(toggleTodo(id)),
    removeTodo: (id) => dispatch(removeTodo(id)),
  };
};
