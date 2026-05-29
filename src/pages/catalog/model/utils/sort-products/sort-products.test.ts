import {SortOrder, SortType} from '../../enums';
import {products} from '../../mocks';
import {sortProducts} from './sort-products';

describe('sortProducts', () => {
  it('return products sorted down by rating', () => {
    const sort = {
      type: SortType.Popular,
      order: SortOrder.Down,
    };
    const expected = [...products].sort(({rating: rateA}, {rating: rateB}) => rateB - rateA);

    const sorted = sortProducts(products, sort);

    expect(sorted).toEqual(expected);
  });

  it('return products sorted up by price', () => {
    const sort = {
      type: SortType.Price,
      order: SortOrder.Up,
    };
    const expected = [...products].sort(({price: priceA}, {price: priceB}) => priceA - priceB);

    const sorted = sortProducts(products, sort);

    expect(sorted).toEqual(expected);
  });
});
