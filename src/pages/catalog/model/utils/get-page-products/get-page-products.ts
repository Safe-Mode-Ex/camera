import type {Product} from '@/shared/dto';
import {PRODUCTS_PER_PAGE} from '../../config';

export const getPageProducts = (currentPage: number, products: Product[]) => {
  const pageStartIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  return [...products].slice(pageStartIndex, pageStartIndex + PRODUCTS_PER_PAGE);
};
