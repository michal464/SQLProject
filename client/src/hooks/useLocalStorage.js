import { useState } from 'react';

export default function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initial;
  });

  const set = (val) => {
    localStorage.setItem(key, JSON.stringify(val));
    setValue(val);
  };

  const remove = () => {
    localStorage.removeItem(key);
    setValue(initial);
  };

  return [value, set, remove];
}
