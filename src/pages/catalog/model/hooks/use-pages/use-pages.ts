import type {MouseEvent} from 'react';
import {useState} from 'react';
import {PAGINATION_COUNT, PAGINATION_START_PAGE} from '../../config';

export const usePages = (
  currentPage: number,
  pagesCount: number,
  changePage: (page: number) => void,
): {
  currentPages: number[],
  isBackItemShown: boolean,
  isFurtherItemShown: boolean,
  getPrevPage: () => number,
  getNextPage: () => number,
  handlePageChange: (page: number) => (evt: MouseEvent<HTMLAnchorElement>) => void,
  handleBackItemClick: (evt: MouseEvent<HTMLAnchorElement>) => void,
  handleNextItemClick: (evt: MouseEvent<HTMLAnchorElement>) => void,
} => {
  const pagesInitialSlice = Math.floor((currentPage - 1) / PAGINATION_COUNT);
  const [pagesCurrentSlice, setPagesCurrentSlice] = useState(pagesInitialSlice);
  const paginationStart = pagesCurrentSlice * PAGINATION_COUNT;
  const pages = Array.from({length: pagesCount}, (_, index) => PAGINATION_START_PAGE + index);
  const currentSlicePages = pages.slice(paginationStart, paginationStart + PAGINATION_COUNT);

  const currentPages = currentSlicePages.length < PAGINATION_COUNT ?
    pages.slice(-PAGINATION_COUNT) :
    currentSlicePages;

  const isFurtherItemShown = (pagesCurrentSlice + 1) !== Math.ceil(pagesCount / PAGINATION_COUNT);
  const isBackItemShown = Boolean(pagesCurrentSlice);

  const handlePageChange = (page: number) => (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    changePage(page);
  };

  const getPrevPage = () => currentPages[0] - 1;
  const getNextPage = () => {
    const nextPage = paginationStart + 1 + PAGINATION_COUNT;
    return nextPage > pagesCount ? pagesCount : nextPage;
  };

  const handleBackItemClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    setPagesCurrentSlice(pagesCurrentSlice - 1);
    changePage(getPrevPage());
  };

  const handleNextItemClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    setPagesCurrentSlice(pagesCurrentSlice + 1);
    changePage(getNextPage());
  };

  return {
    currentPages,
    isBackItemShown,
    isFurtherItemShown,
    getPrevPage,
    getNextPage,
    handlePageChange,
    handleBackItemClick,
    handleNextItemClick,
  };
};
