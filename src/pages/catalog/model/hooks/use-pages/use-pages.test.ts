import {noop} from '@tanstack/react-query';
import {renderHook} from '@testing-library/react';
import {usePages} from './use-pages';

describe('Hook: usePages', () => {
  const pagesCount = 5;
  const changePage = noop;
  let currentPage = 1;

  it('should return object with right properties', () => {
    const {result} = renderHook(() => usePages(currentPage, pagesCount, changePage));
    const {
      currentPages,
      isBackItemShown,
      isFurtherItemShown,
      getPrevPage,
      getNextPage,
      handlePageChange,
      handleBackItemClick,
      handleNextItemClick,
    } = result.current;

    expect(currentPages).toBeInstanceOf(Array);
    expectTypeOf(isBackItemShown).toBeBoolean();
    expectTypeOf(isFurtherItemShown).toBeBoolean();
    expect(getPrevPage).toBeInstanceOf(Function);
    expect(getNextPage).toBeInstanceOf(Function);
    expect(handlePageChange).toBeInstanceOf(Function);
    expect(handleBackItemClick).toBeInstanceOf(Function);
    expect(handleNextItemClick).toBeInstanceOf(Function);
  });

  it('should properly handle first page', () => {
    const expectedPages = [1, 2, 3];

    const {result} = renderHook(() => usePages(currentPage, pagesCount, changePage));
    const {
      currentPages,
      isBackItemShown,
      isFurtherItemShown,
      getPrevPage,
      getNextPage,
    } = result.current;

    expect(currentPages).toEqual(expectedPages);
    expect(isBackItemShown).toBe(false);
    expect(isFurtherItemShown).toBe(true);
    expect(getPrevPage()).toBe(0);
    expect(getNextPage()).toBe(4);
  });

  it('should properly handle last page', () => {
    currentPage = pagesCount;
    const expectedPages = [3, 4, 5];

    const {result} = renderHook(() => usePages(currentPage, pagesCount, changePage));
    const {
      currentPages,
      isBackItemShown,
      isFurtherItemShown,
      getPrevPage,
      getNextPage,
    } = result.current;

    expect(currentPages).toEqual(expectedPages);
    expect(isBackItemShown).toBe(true);
    expect(isFurtherItemShown).toBe(false);
    expect(getPrevPage()).toBe(2);
    expect(getNextPage()).toBe(5);
  });

  it('should properly handle middle page', () => {
    currentPage = 3;
    const expectedPages = [1, 2, 3];

    const {result} = renderHook(() => usePages(currentPage, pagesCount, changePage));
    const {
      currentPages,
      isBackItemShown,
      isFurtherItemShown,
      getPrevPage,
      getNextPage,
    } = result.current;

    expect(currentPages).toEqual(expectedPages);
    expect(isBackItemShown).toBe(false);
    expect(isFurtherItemShown).toBe(true);
    expect(getPrevPage()).toBe(0);
    expect(getNextPage()).toBe(4);
  });
});
