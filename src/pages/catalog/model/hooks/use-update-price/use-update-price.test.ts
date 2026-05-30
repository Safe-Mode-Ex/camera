import {useState} from 'react';
import {renderHook} from '@testing-library/react';
import {useUpdatePrice} from './use-update-price';

const useTestUpdatePrice = (
  minPrice: number,
  maxPrice: number,
  initialMinValue = 0,
  initialMaxValue = 0,
) => {
  const [minValue, setMinValue] = useState(initialMinValue);
  const [maxValue, setMaxValue] = useState(initialMaxValue);

  useUpdatePrice(minPrice, maxPrice, setMinValue, setMaxValue);

  return [minValue, maxValue];
};

describe('Hook: useUpdatePrice', () => {
  const minPrice = 2000;
  const maxPrice = 190000;

  it('should not update value if value is equal to 0', () => {
    const {result} = renderHook(() => useTestUpdatePrice(minPrice, maxPrice));
    expect(result.current).toEqual([0, 0]);
  });

  it('should update value if new value is between minPrice and maxPrice', () => {
    const expectedMinValue = 10000;
    const expectedMaxValue = 20000;

    const {result, rerender} = renderHook(
      ({initialMinValue, initialMaxValue}) =>
        useTestUpdatePrice(12000, 17000, initialMinValue, initialMaxValue),
      {initialProps: {initialMinValue: expectedMinValue, initialMaxValue: expectedMaxValue}},
    );
    rerender({initialMinValue: expectedMinValue, initialMaxValue: expectedMaxValue});

    expect(result.current).toEqual([expectedMinValue, expectedMaxValue]);
  });

  it('should set maxPrice if value is greater than maxPrice', () => {
    const maxValue = 200000;

    const {result, rerender} = renderHook(
      ({initialMinValue, initialMaxValue}) =>
        useTestUpdatePrice(minPrice, maxPrice, initialMinValue, initialMaxValue),
      {initialProps: {initialMinValue: minPrice, initialMaxValue: maxPrice}},
    );
    rerender({initialMinValue: maxValue, initialMaxValue: maxValue});

    expect(result.current).toEqual([minPrice, maxPrice]);
  });

  it('should set minPrice if value is less than minPrice', () => {
    const minValue = 1000;

    const {result, rerender} = renderHook(
      ({initialMinValue, initialMaxValue}) =>
        useTestUpdatePrice(minPrice, maxPrice, initialMinValue, initialMaxValue),
      {initialProps: {initialMinValue: minPrice, initialMaxValue: maxPrice}},
    );
    rerender({initialMinValue: minValue, initialMaxValue: minValue});

    expect(result.current).toEqual([minPrice, maxPrice]);
  });
});
