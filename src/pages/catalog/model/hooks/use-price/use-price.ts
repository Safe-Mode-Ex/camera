import type {ChangeEvent, FocusEvent} from 'react';
import {useState} from 'react';

export const usePrice = (minPrice: number, maxPrice: number): [
  number,
  number,
  ({target}: ChangeEvent<HTMLInputElement>) => void,
  ({target}: ChangeEvent<HTMLInputElement>) => void,
  ({target}: FocusEvent<HTMLInputElement>) => void,
  ({target}: FocusEvent<HTMLInputElement>) => void,
] => {
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(0);

  const handleMinPriceChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setMinValue(Number(target.value));
  };

  const handleMaxPriceChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(Number(target.value));
  };

  const handleMinPriceBlur = ({target}: FocusEvent<HTMLInputElement>) => {
    if (target.value === '') {
      return;
    }

    const value = Number(target.value);

    if (maxValue && value > maxValue) {
      setMinValue(maxValue);
      return;
    }

    if (value < minPrice) {
      setMinValue(minPrice);
    }

    if (value > maxPrice) {
      setMinValue(maxPrice);
    }
  };

  const handleMaxPriceBlur = ({target}: FocusEvent<HTMLInputElement>) => {
    if (target.value === '') {
      return;
    }

    const value = Number(target.value);

    if (minValue && value < minValue) {
      setMaxValue(minValue);
      return;
    }

    if (value < minPrice) {
      setMaxValue(minPrice);
    }

    if (value > maxPrice) {
      setMaxValue(maxPrice);
    }
  };

  return [
    minValue,
    maxValue,
    handleMinPriceChange,
    handleMaxPriceChange,
    handleMinPriceBlur,
    handleMaxPriceBlur,
  ];
};
