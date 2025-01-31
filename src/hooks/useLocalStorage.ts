import { useState, useEffect, useCallback } from 'react';
const useLocalStorage = <T>() => {
  const [storedValues, setStoredValues] = useState<Record<string, string>>(() => {
    try {
      return Object.keys(localStorage).reduce((acc, key) => {
        acc[key] = localStorage.getItem(key) ?? "";
        return acc;
      }, {} as Record<string, string>);
    } catch (error) {
      console.error('Error reading from localStorage', error);
      return {};
    }
  });

  const setValue = useCallback((key: string, value: string) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setStoredValues((prev) => ({ ...prev, [key]: value }));
      window.dispatchEvent(new Event('storage')); // Notify all subscribers
    } catch (error) {
      console.error('Error writing to localStorage', error);
    }
  }, []);

  const removeValue = useCallback((key: string) => {
    try {
      localStorage.removeItem(key);
      setStoredValues((prev) => {
        const newValues = { ...prev };
        delete newValues[key];
        return newValues;
      });
      window.dispatchEvent(new Event('storage'));
    } catch (error) {
      console.error('Error removing from localStorage', error);
    }
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      try {
        const newStoredValues = Object.keys(localStorage).reduce((acc, key) => {
          acc[key] = localStorage.getItem(key) ?? "";
          return acc;
        }, {} as Record<string, string>);
        setStoredValues(newStoredValues);
      } catch (error) {
        console.error('Error updating localStorage', error);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return { storedValues, setValue, removeValue };
}

export default useLocalStorage;
