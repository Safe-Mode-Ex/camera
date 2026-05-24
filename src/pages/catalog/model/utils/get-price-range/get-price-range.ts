import type {Product} from '@/shared/dto';
import {priceUpSort} from '../../config';
import {sortProducts} from '../sort-products/sort-products';

export const getPriceRange = (products: Product[] = []): [number, number] => {
  if (!products.length) {
    return [0, 0];
  }
  const sortedProducts = sortProducts(products, priceUpSort);
  const minPrice = sortedProducts[0].price;
  const maxPrice = sortedProducts[sortedProducts.length - 1].price;
  return [minPrice, maxPrice];
};
