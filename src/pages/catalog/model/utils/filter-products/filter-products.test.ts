import {filteredProductsMock, filterMock, products} from '../../mocks';
import {filterProducts} from './filter-products';

describe('filterProducts', () => {
  it('should return filtered products', () => {
    const filter = filterMock;
    const expected = filteredProductsMock;

    const filtered = filterProducts(products, filter);

    expect(filtered).toEqual(expected);
  });
});
