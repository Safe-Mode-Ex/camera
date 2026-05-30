import type {ChangeEvent, Dispatch, FocusEvent, SetStateAction} from 'react';
import {useState} from 'react';
import {useUpdatePrice} from '../use-update-price/use-update-price';

export const usePrice = (
  minPrice: number,
  maxPrice: number,
  setMinPriceValue: Dispatch<SetStateAction<number | null>>,
  setMaxPriceValue: Dispatch<SetStateAction<number | null>>,
): {
  valueRange: [number, number],
  handleMinPriceChange: ({target}: ChangeEvent<HTMLInputElement>) => void,
  handleMaxPriceChange: ({target}: ChangeEvent<HTMLInputElement>) => void,
  handleMinPriceBlur: ({target}: FocusEvent<HTMLInputElement>) => void,
  handleMaxPriceBlur: ({target}: FocusEvent<HTMLInputElement>) => void,
  resetPriceValues: () => void,
} => {
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(0);

  /*
    TODO: подумать, нудно ли здесь жто поведение
    За: цена меняется в диапазоне, который задал клиент
    Против: пользователь задал цену, а мы ее менем без его воли
  */
  useUpdatePrice(minPrice, maxPrice, setMinValue, setMaxValue);
  // конец TODO

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

  return {
    valueRange: [minValue, maxValue],
    handleMinPriceChange,
    handleMaxPriceChange,
    handleMinPriceBlur,
    handleMaxPriceBlur,
    resetPriceValues,
  };
};
