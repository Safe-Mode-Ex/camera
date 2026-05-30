import type {Dispatch, SetStateAction} from 'react';
import {useState} from 'react';
import type {Product} from '@/shared/dto';

export const usePriceFilter = (products: Product[]): {
  priceRangedProducts: Product[],
  setMinPriceValue: Dispatch<SetStateAction<number | null>>,
  setMaxPriceValue: Dispatch<SetStateAction<number | null>>,
  resetPriceFilter: () => void,
} => {
  const [minPriceValue, setMinPriceValue] = useState<number | null>(null);
  const [maxPriceValue, setMaxPriceValue] = useState<number | null>(null);

  const priceRangedProducts = [...products].filter(({price}) => {
    const minValue = Number(minPriceValue);
    const isFitMinPrice = minValue <= price;
    return maxPriceValue ? isFitMinPrice && maxPriceValue >= price : isFitMinPrice;
  });

  const resetPriceFilter = () => {
    setMinPriceValue(null);
    setMaxPriceValue(null);
  };

  return {priceRangedProducts, setMinPriceValue, setMaxPriceValue, resetPriceFilter};
};
