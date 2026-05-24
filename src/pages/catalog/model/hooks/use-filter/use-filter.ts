import type {ChangeEvent, MouseEvent} from 'react';
import {useState} from 'react';
import type {Product} from '@/shared/dto';
import type {FilterType, FilterLevel} from '../../enums';
import {categoryMap, typeMap, levelMap} from '../../maps';
import type {ChangeCheckableHandler, Filter, ResetFiltersHandler} from '../../types';
import {hasProperFilter} from '../../utils';

export const useFilter = (products: Product[] = []): [
  Product[],
  Filter,
  ChangeCheckableHandler<Filter>,
  ChangeCheckableHandler<Omit<Filter, 'category'>>,
  ResetFiltersHandler,
] => {
  const initialFilter = {category: null, types: [], levels: []};

  const [activeFilter, setActiveFilter] = useState<Filter>(initialFilter);
  const filteredProducts = [...products].filter(({category, type, level}) => {
    const {category: filterCategory, types: filterTypes, levels: filterLevels} = activeFilter;
    const isProperCategory = !filterCategory || categoryMap[filterCategory] === category;

    return isProperCategory
        && hasProperFilter(type, filterTypes, typeMap)
        && hasProperFilter(level, filterLevels, levelMap);
  });

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

  const resetFiltersHandler = () => (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    setActiveFilter(initialFilter);
  };

  return [
    filteredProducts,
    activeFilter,
    changeRadioHandler,
    changeCheckboxHandler,
    resetFiltersHandler,
  ];
};
