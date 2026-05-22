import {useState} from 'react';
import type {Product} from '@/shared/dto';
import {SortType, SortOrder} from '../../enums';
import type {Sort, SortOrderHandler, SortTypeHandler} from '../../types';

export const useSort = (products: Product[] = []): [Product[], Sort, SortTypeHandler, SortOrderHandler] => {
  const [sort, setSort] = useState<Sort>({type: SortType.Price, order: SortOrder.Up});

  const preparedProducts = [...products].sort((firstProduct, secondProduct) => {
    switch (sort.order) {
      case SortOrder.Down:
        return secondProduct[sort.type] - firstProduct[sort.type];
      default:
        return firstProduct[sort.type] - secondProduct[sort.type];
    }
  });

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

  return [preparedProducts, sort, changeSortTypeHandler, changeSortOrderHandler];
};
