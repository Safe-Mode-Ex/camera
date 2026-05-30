import {act, renderHook} from '@testing-library/react';
import {usePrice} from './use-price';
import type {ChangeEvent, FocusEvent} from 'react';

describe('Hook: usePrice', () => {
  const minPrice = 2000;
  const maxPrice = 200000;
  const setMinPriceValue = vi.fn();
  const setMaxPriceValue = vi.fn();
  const expectedMinPrice = 10000;
  const expectedMaxPrice = 20000;

  it('should return object with right properties', () => {
    const {result} = renderHook(() =>
      usePrice(minPrice, maxPrice, setMinPriceValue, setMaxPriceValue));
    const {
      valueRange,
      handleMinPriceChange,
      handleMaxPriceChange,
      handleMinPriceBlur,
      handleMaxPriceBlur,
      resetPriceValues,
    } = result.current;

    expect(valueRange).toEqual([0, 0]);
    expect(handleMinPriceChange).toBeInstanceOf(Function);
    expect(handleMaxPriceChange).toBeInstanceOf(Function);
    expect(handleMinPriceBlur).toBeInstanceOf(Function);
    expect(handleMaxPriceBlur).toBeInstanceOf(Function);
    expect(resetPriceValues).toBeInstanceOf(Function);
  });

  it('should handle min and max price change', () => {
    const {result} = renderHook(() =>
      usePrice(minPrice, maxPrice, setMinPriceValue, setMaxPriceValue));
    const {handleMinPriceChange, handleMaxPriceChange} = result.current;
    act(() => {
      handleMinPriceChange({
        target: {value: expectedMinPrice},
      } as unknown as ChangeEvent<HTMLInputElement>);
    });
    act(() => {
      handleMaxPriceChange({
        target: {value: expectedMaxPrice},
      } as unknown as ChangeEvent<HTMLInputElement>);
    });
    const {valueRange} = result.current;

    expect(valueRange).toEqual([expectedMinPrice, expectedMaxPrice]);
  });

  it('should handle min and max price blur', () => {
    const {result} = renderHook(() =>
      usePrice(minPrice, maxPrice, setMinPriceValue, setMaxPriceValue));
    const {handleMinPriceBlur, handleMaxPriceBlur} = result.current;
    act(() => {
      handleMinPriceBlur({
        target: {value: expectedMinPrice},
      } as unknown as FocusEvent<HTMLInputElement>);
    });
    act(() => {
      handleMaxPriceBlur({
        target: {value: expectedMaxPrice},
      } as unknown as FocusEvent<HTMLInputElement>);
    });

    expect(setMinPriceValue).toHaveBeenCalledWith(expectedMinPrice);
    expect(setMaxPriceValue).toHaveBeenCalledWith(expectedMaxPrice);
  });

  it('should handle min and max price blur', () => {
    const {result} = renderHook(() =>
      usePrice(minPrice, maxPrice, setMinPriceValue, setMaxPriceValue));
    const {handleMinPriceBlur, handleMaxPriceBlur} = result.current;
    act(() => {
      handleMinPriceBlur({
        target: {value: expectedMinPrice},
      } as unknown as FocusEvent<HTMLInputElement>);
    });
    act(() => {
      handleMaxPriceBlur({
        target: {value: expectedMaxPrice},
      } as unknown as FocusEvent<HTMLInputElement>);
    });

    expect(setMinPriceValue).toHaveBeenCalledWith(expectedMinPrice);
    expect(setMaxPriceValue).toHaveBeenCalledWith(expectedMaxPrice);
  });

  it('should reset price values', () => {
    const {result} = renderHook(() =>
      usePrice(minPrice, maxPrice, setMinPriceValue, setMaxPriceValue));
    const {resetPriceValues} = result.current;
    act(() => {
      resetPriceValues();
    });
    const {valueRange} = result.current;

    expect(valueRange).toEqual([0, 0]);
  });

  it('should update min and max price', () => {
    const {result, rerender} = renderHook(
      ({min, max}) => usePrice(min, max, setMinPriceValue, setMaxPriceValue),
      {initialProps: {min: minPrice, max: maxPrice}},
    );
    act(() => {
      result.current.handleMinPriceChange({
        target: {value: 3000},
      } as unknown as ChangeEvent<HTMLInputElement>);

      result.current.handleMaxPriceChange({
        target: {value: 50000},
      } as unknown as ChangeEvent<HTMLInputElement>);
    });
    rerender({min: expectedMinPrice, max: expectedMaxPrice});
    const {valueRange} = result.current;

    expect(valueRange).toEqual([expectedMinPrice, expectedMaxPrice]);
  });
});
