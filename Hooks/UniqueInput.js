import { useId } from "react";

/**
 * UniqueInput component using useId for generating unique IDs
 */
export function UniqueInput({ label }) {
  const id = useId();

  return (
    <div className="p-4">
      <label htmlFor={id} className="block text-gray-700">{label}</label>
      <input id={id} className="border rounded p-2 w-full" type="text" />
    </div>
  );
}