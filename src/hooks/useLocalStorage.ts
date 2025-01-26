import { useState, useEffect, useCallback } from 'react';
const useLocalStorage = <T>(key: string, defaultValue: T | null = null) => {
  const [storedValue, setStoredValue] = useState<T | null>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Error reading from localStorage', error);
      return defaultValue;
    }
  });
  const setValue = useCallback(
    (value: T) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        localStorage.setItem(key, JSON.stringify(valueToStore));
        window.dispatchEvent(new Event('storage')); // Notify subscribers
      } catch (error) {
        console.error('Error writing to localStorage', error);
      }
    },
    [key, storedValue]
  );

  useEffect(() => {
    const handleStorageChange = () => {
      try {
        const item = localStorage.getItem(key);
        setStoredValue(item ? JSON.parse(item) : defaultValue);
      } catch (error) {
        console.error('Error reading from localStorage', error);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key, defaultValue]);

  const removeValue = useCallback(() => {
    try {
      localStorage.removeItem(key);
      setStoredValue(null);
      window.dispatchEvent(new Event('storage')); // Notify subscribers
    } catch (error) {
      console.error('Error removing from localStorage', error);
    }
  }, [key]);

  return { storedValue, setValue, removeValue };
}

export default useLocalStorage;
