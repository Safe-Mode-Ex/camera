import type {Product} from '@/shared/dto';
import type {Sort} from '../../types';
import {SortOrder} from '../../enums';

export const sortProducts = (products: Product[], sort: Sort): Product[] =>
  [...products].sort((firstProduct, secondProduct) => {
    switch (sort.order) {
      case SortOrder.Down:
        return secondProduct[sort.type] - firstProduct[sort.type];
      default:
        return firstProduct[sort.type] - secondProduct[sort.type];
    }
  });
