import type {ChangeEvent, Dispatch, FocusEvent, SetStateAction} from 'react';
import {useState} from 'react';

export const usePrice = (
  minPrice: number,
  maxPrice: number,
  setMinPriceValue: Dispatch<SetStateAction<number | null>>,
  setMaxPriceValue: Dispatch<SetStateAction<number | null>>,
): [
  [number, number],
  ({target}: ChangeEvent<HTMLInputElement>) => void,
  ({target}: ChangeEvent<HTMLInputElement>) => void,
  ({target}: FocusEvent<HTMLInputElement>) => void,
  ({target}: FocusEvent<HTMLInputElement>) => void,
  () => void,
] => {
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(0);

  const setMinimum = (value: number) => {
    setMinValue(value);
    setMinPriceValue(value);
  };

  const setMaximum = (value: number) => {
    setMaxValue(value);
    setMaxPriceValue(value);
  };

  const resetPriceValues = () => {
    setMinValue(0);
    setMaxValue(0);
  };

  const handleMinPriceChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setMinValue(Number(target.value));
  };

  const handleMaxPriceChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(Number(target.value));
  };

  const handleMinPriceBlur = ({target}: FocusEvent<HTMLInputElement>) => {
    if (target.value === '') {
      setMinPriceValue(0);
      return;
    }

    const value = Number(target.value);

    if (maxValue && value > maxValue) {
      setMinimum(maxValue);
      return;
    }

    if (value < minPrice) {
      setMinimum(minPrice);
      return;
    }

    if (value > maxPrice) {
      setMinimum(maxPrice);
      return;
    }

    setMinPriceValue(value);
  };

  const handleMaxPriceBlur = ({target}: FocusEvent<HTMLInputElement>) => {
    if (target.value === '') {
      setMaxPriceValue(null);
      return;
    }

    const value = Number(target.value);

    if (minValue && value < minValue) {
      setMaximum(minValue);
      return;
    }

    if (value < minPrice) {
      setMaximum(minPrice);
      return;
    }

    if (value > maxPrice) {
      setMaximum(maxPrice);
      return;
    }

    setMaxPriceValue(value);
  };

  return [
    [minValue, maxValue],
    handleMinPriceChange,
    handleMaxPriceChange,
    handleMinPriceBlur,
    handleMaxPriceBlur,
    resetPriceValues,
  ];
};
