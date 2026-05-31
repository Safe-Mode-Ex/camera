import {useState, useMemo} from 'react';

export const useContextValue = (defaultValue: string) => {
  const [activeValue, setActiveValue] = useState<string>(defaultValue);
  return useMemo(
    () => ({activeValue, setActiveValue}),
    [activeValue, setActiveValue],
  );
};
