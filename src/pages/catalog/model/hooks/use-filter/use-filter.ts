import type {ChangeEvent, MouseEvent} from 'react';
import {useState} from 'react';
import type {Product} from '@/shared/dto';
import type {FilterType, FilterLevel} from '../../enums';
import type {ChangeCheckableHandler, Filter} from '../../types';
import {filterProducts} from '../../utils';

export const useFilter = (products: Product[] = []): {
  filteredProducts: Product[],
  activeFilter: Filter,
  changeRadioHandler: ChangeCheckableHandler<Filter>,
  changeCheckboxHandler: ChangeCheckableHandler<Omit<Filter, 'category'>>,
  resetFilters: (evt: MouseEvent<HTMLButtonElement>) => void,
} => {
  const initialFilter = {category: null, types: [], levels: []};
  const [activeFilter, setActiveFilter] = useState<Filter>(initialFilter);
  const filteredProducts = filterProducts(products, activeFilter);

  const changeRadioHandler = (filterParam: keyof Filter) =>
    ({target}: ChangeEvent<HTMLInputElement>) => {
      setActiveFilter((state) => ({
        ...state,
        [filterParam]: target.value,
      }));
    };

  const changeCheckboxHandler = (filterParam: Exclude<keyof Filter, 'category'>) =>
    ({target}: ChangeEvent<HTMLInputElement>) => {
      const {checked, value} = target as {
        checked: boolean, value: FilterType | FilterLevel
      };

      setActiveFilter((state) => ({
        ...state,
        [filterParam]: checked ?
          [...(state[filterParam] as (FilterType | FilterLevel)[]), value] :
          state[filterParam].filter((filter) => filter !== value),
      }));
    };

  const resetFilters = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    setActiveFilter(initialFilter);
  };

  return {
    filteredProducts,
    activeFilter,
    changeRadioHandler,
    changeCheckboxHandler,
    resetFilters,
  };
};
