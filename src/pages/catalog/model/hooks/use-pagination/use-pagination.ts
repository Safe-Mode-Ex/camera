import {useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import type {Product} from '@/shared/dto';
import {PRODUCTS_PER_PAGE} from '../../config';

export const usePagination = (products: Product[]): [
  Product[],
  number,
  number,
  boolean,
  (page: number) => void,
] => {
  const [queryParams, setQueryParams] = useSearchParams();
  const initialPageQuery = queryParams.get('page') ?? '1';
  const initialPage = Number(initialPageQuery);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const pageStartIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const pageProducts = [...products].slice(pageStartIndex, pageStartIndex + PRODUCTS_PER_PAGE);
  const pagesCount = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const isPaginationShown = pagesCount > 1;

  const changePage = (page: number) => {
    setCurrentPage(page);
    setQueryParams({page: page.toString()});
  };

  return [pageProducts, currentPage, pagesCount, isPaginationShown, changePage];
};
