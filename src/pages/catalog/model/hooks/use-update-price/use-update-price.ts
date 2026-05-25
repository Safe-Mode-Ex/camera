import type {SetStateAction} from 'react';
import {useState} from 'react';

export const useUpdatePrice = (
  minPrice: number,
  maxPrice: number,
  setMinValue: (value: SetStateAction<number>) => void,
  setMaxValue: (value: SetStateAction<number>) => void,
) => {
  const [prevMinPrice, setPrevMinPrice] = useState(minPrice);
  const [prevMaxPrice, setPrevMaxPrice] = useState(maxPrice);

  if (prevMinPrice !== minPrice || prevMaxPrice !== maxPrice) {
    setPrevMinPrice(minPrice);
    setPrevMaxPrice(maxPrice);

    setMinValue((prev) => {
      if (prev === 0) {
        return 0;
      }

      if (prev > maxPrice) {
        return maxPrice;
      }

      if (prev < minPrice) {
        return minPrice;
      }

      return prev;
    });

    setMaxValue((prev) => {
      if (prev === 0) {
        return 0;
      }

      if (prev > maxPrice) {
        return maxPrice;
      }

      if (prev < minPrice) {
        return minPrice;
      }

      return prev;
    });
  }
};
