import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      let item = false;
      if (typeof window !== "undefined") {
        item = window.localStorage.getItem(key);
      }
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
};

const useDarkMode = () => {
  const [enabled, setEnabled] = useLocalStorage("dark-theme");
  const isEnabled = typeof enabledState === "undefined" && enabled;

  useEffect(() => {
    const className = "dark";
    let bodyClass = window.document.body.classList;
    if (typeof window !== "undefined") {
      bodyClass = window.document.body.classList;
    }
    isEnabled ? bodyClass.add(className) : bodyClass.remove(className);
  }, [enabled, isEnabled]);

  return [enabled, setEnabled];
};

export default useDarkMode;
