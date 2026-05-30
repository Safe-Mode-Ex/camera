import type {ChangeEvent, MouseEvent} from 'react';
import {act, renderHook} from '@testing-library/react';
import {noop} from '@tanstack/react-query';
import {products} from '../../mocks';
import type {Filter} from '../../types';
import {FilterCategory, FilterLevel, FilterType} from '../../enums';
import {filterProducts} from '../../utils';
import {useFilter} from './use-filter';

describe('Hook: useFilter', () => {
  const initialFilter: Filter = {category: null, types: [], levels: []};

  it('should return object with right properties', () => {
    const {result} = renderHook(() => useFilter(products));
    const {
      filteredProducts,
      activeFilter,
      changeRadioHandler,
      changeCheckboxHandler,
      resetFilters,
    } = result.current;

    expect(filteredProducts).toEqual(products);
    expect(activeFilter).toEqual(initialFilter);
    expectTypeOf(changeRadioHandler).toBeFunction();
    expectTypeOf(changeCheckboxHandler).toBeFunction();
    expectTypeOf(resetFilters).toBeFunction();
  });

  it('should properly change category', () => {
    const expectedFilter = {
      ...initialFilter,
      category: FilterCategory.Photo,
    };
    const expectedProducts = filterProducts(products, expectedFilter);

    const {result} = renderHook(() => useFilter(products));
    const {changeRadioHandler} = result.current;
    const handler = changeRadioHandler('category');
    act(() => {
      handler({target: {value: FilterCategory.Photo}} as ChangeEvent<HTMLInputElement>);
    });
    const {activeFilter, filteredProducts} = result.current;

    expect(activeFilter).toEqual(expectedFilter);
    expect(filteredProducts).toEqual(expectedProducts);
  });

  it('should properly change types and levels', () => {
    const expectedFilter = {
      ...initialFilter,
      types: [FilterType.Digital],
      levels: [FilterLevel.Beginner],
    };
    const expectedProducts = filterProducts(products, expectedFilter);

    const {result} = renderHook(() => useFilter(products));
    const {changeCheckboxHandler} = result.current;
    const typesHandler = changeCheckboxHandler('types');
    act(() => {
      typesHandler({
        target: {
          value: FilterType.Digital,
          checked: true,
        },
      } as ChangeEvent<HTMLInputElement>);
    });
    const levelsHandler = changeCheckboxHandler('levels');
    act(() => {
      levelsHandler({
        target: {
          value: FilterLevel.Beginner,
          checked: true,
        },
      } as ChangeEvent<HTMLInputElement>);
    });
    const {activeFilter, filteredProducts} = result.current;

    expect(activeFilter).toEqual(expectedFilter);
    expect(filteredProducts).toEqual(expectedProducts);
  });

  it('should reset filters', () => {
    const {result} = renderHook(() => useFilter(products));
    const {
      activeFilter,
      filteredProducts,
      changeRadioHandler,
      changeCheckboxHandler,
      resetFilters,
    } = result.current;
    const radioHandler = changeRadioHandler('category');
    const typesHandler = changeCheckboxHandler('types');
    const levelsHandler = changeCheckboxHandler('levels');

    act(() => {
      radioHandler({target: {value: FilterCategory.Photo}} as ChangeEvent<HTMLInputElement>);
    });
    act(() => {
      typesHandler({
        target: {
          value: FilterType.Digital,
          checked: true,
        },
      } as ChangeEvent<HTMLInputElement>);
    });
    act(() => {
      levelsHandler({
        target: {
          value: FilterLevel.Beginner,
          checked: true,
        },
      } as ChangeEvent<HTMLInputElement>);
    });
    act(() => {
      resetFilters({preventDefault: noop} as MouseEvent<HTMLButtonElement>);
    });

    expect(activeFilter).toEqual(initialFilter);
    expect(filteredProducts).toEqual(products);
  });
});
