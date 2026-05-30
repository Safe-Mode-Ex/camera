import {act, renderHook} from '@testing-library/react';
import {usePriceFilter} from './use-price-filter';
import {products} from '../../mocks';

describe('Hook: usePriceFilter', () => {
  const expectedMinPrice = 2000;
  const expectedMaxPrice = 10000;

  it('should return object with right properties', () => {
    const {result} = renderHook(() => usePriceFilter(products));
    const {
      priceRangedProducts,
      setMinPriceValue,
      setMaxPriceValue,
      resetPriceFilter,
    } = result.current;

    expect(priceRangedProducts).toEqual(products);
    expect(setMinPriceValue).toBeInstanceOf(Function);
    expect(setMaxPriceValue).toBeInstanceOf(Function);
    expect(resetPriceFilter).toBeInstanceOf(Function);
  });

  it('should return filtered products when changing price', () => {
    const expectedProducts = [...products].filter(
      ({price}) => price < expectedMaxPrice && price > expectedMinPrice,
    );

    const {result} = renderHook(() => usePriceFilter(products));
    const {setMinPriceValue, setMaxPriceValue} = result.current;
    act(() => {
      setMinPriceValue(expectedMinPrice);
      setMaxPriceValue(expectedMaxPrice);
    });
    const {priceRangedProducts} = result.current;

    expect(priceRangedProducts).toEqual(expectedProducts);
  });

  it('should return all products on filters reset', () => {
    const {result} = renderHook(() => usePriceFilter(products));
    const {setMinPriceValue, setMaxPriceValue} = result.current;
    act(() => {
      setMinPriceValue(expectedMinPrice);
      setMaxPriceValue(expectedMaxPrice);
    });
    const {resetPriceFilter} = result.current;
    act(() => {
      resetPriceFilter();
    });
    const {priceRangedProducts} = result.current;

    expect(priceRangedProducts).toEqual(products);
  });
});
