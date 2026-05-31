import type {MouseEvent} from 'react';
import {useTabsContext} from '../use-tabs-context/use-tabs-context';

export const useActiveValue = (value: string): [
  boolean,
  (evt: MouseEvent<HTMLButtonElement>) => void,
] => {
  const {activeValue, setActiveValue} = useTabsContext();
  const isActive = activeValue === value;

  const handleTabsControlClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    setActiveValue(value);
  };

  return [isActive, handleTabsControlClick];
};
