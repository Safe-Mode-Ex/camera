import {act, renderHook} from '@testing-library/react';
import {products} from '../../mocks';
import {priceUpSort} from '../../config';
import {useSort} from './use-sort';
import {SortOrder, SortType} from '../../enums';

describe('Hook: useSort', () => {
  let initialSortedProducts = [...products].sort((a, b) => a.price - b.price);

  it('should return object with right properties', () => {
    const {result} = renderHook(() => useSort(products));
    const {
      sortedProducts,
      sort,
      changeSortTypeHandler,
      changeSortOrderHandler,
    } = result.current;

    expect(sortedProducts).toEqual(initialSortedProducts);
    expect(sort).toEqual(priceUpSort);
    expect(changeSortTypeHandler).toBeInstanceOf(Function);
    expect(changeSortOrderHandler).toBeInstanceOf(Function);
  });

  it('should change sort type', () => {
    initialSortedProducts = [...products].sort((a, b) => a.rating - b.rating);

    const {result} = renderHook(() => useSort(products));
    const {changeSortTypeHandler} = result.current;
    act(changeSortTypeHandler(SortType.Popular));
    const {sortedProducts} = result.current;

    expect(sortedProducts).toEqual(initialSortedProducts);
  });

  it('should change sort order', () => {
    initialSortedProducts = [...products].sort((a, b) => b.price - a.price);

    const {result} = renderHook(() => useSort(products));
    const {changeSortOrderHandler} = result.current;
    act(changeSortOrderHandler(SortOrder.Down));
    const {sortedProducts} = result.current;

    expect(sortedProducts).toEqual(initialSortedProducts);
  });
});
