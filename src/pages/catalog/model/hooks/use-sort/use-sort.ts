import {useState} from 'react';
import type {Product} from '@/shared/dto';
import type {SortType, SortOrder} from '../../enums';
import type {Sort, SortOrderHandler, SortTypeHandler} from '../../types';
import {sortProducts} from '../../utils';
import {priceUpSort} from '../../config';

export const useSort = (products: Product[] = []): [Product[], Sort, SortTypeHandler, SortOrderHandler] => {
  const [sort, setSort] = useState<Sort>(priceUpSort);
  const sortedProducts = sortProducts(products, sort);

  const changeSortTypeHandler = (type: SortType) => () => {
    setSort((state) => ({
      ...state,
      type,
    }));
  };

  const changeSortOrderHandler = (order: SortOrder) => () => {
    setSort((state) => ({
      ...state,
      order,
    }));
  };

  return [sortedProducts, sort, changeSortTypeHandler, changeSortOrderHandler];
};
