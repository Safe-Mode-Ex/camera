import {PRODUCTS_PER_PAGE} from '../../config';
import {getPageProducts} from './get-page-products';
import {products} from './mocks';

describe('getPageProducts', () => {
  it('should return first page products', () => {
    const currentPage = 1;
    const expectedProducts = products.slice(0, PRODUCTS_PER_PAGE);

    const pageProducts = getPageProducts(currentPage, products);

    expect(pageProducts).toEqual(expectedProducts);
  });

  it('should return second page products', () => {
    const currentPage = 2;
    const expectedProducts = products.slice(PRODUCTS_PER_PAGE, PRODUCTS_PER_PAGE * currentPage);

    const pageProducts = getPageProducts(currentPage, products);

    expect(pageProducts).toEqual(expectedProducts);
  });
});
