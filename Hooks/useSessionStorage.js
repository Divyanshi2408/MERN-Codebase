import { useState, useEffect } from "react";

/**
 * useSessionStorage - Custom hook to manage sessionStorage
 * @param {string} key - The key to store the value in sessionStorage
 * @param {*} initialValue - Default value if none exists in storage
 */
export function useSessionStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading sessionStorage:", error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      sessionStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Error setting sessionStorage:", error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
