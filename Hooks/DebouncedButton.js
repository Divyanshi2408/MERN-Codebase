import { useState, useCallback } from "react";

/**
 * DebouncedButton component using useCallback to optimize function execution
 */
export function DebouncedButton({ onClick, label }) {
  const [loading, setLoading] = useState(false);

  const handleClick = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      onClick();
      setLoading(false);
    }, 500);
  }, [onClick]);

  return (
    <button className="p-2 bg-green-500 text-white rounded" onClick={handleClick} disabled={loading}>
      {loading ? "Processing..." : label}
    </button>
  );
}