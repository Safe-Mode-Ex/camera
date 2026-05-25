import {PAGINATION_START_PAGE} from '../../config';

export const getCurrentPage = (
  pagesCount: number,
  initialPageFromQuery: number,
): number => {

  const initialPage = initialPageFromQuery || PAGINATION_START_PAGE;

  if (!pagesCount || initialPage < PAGINATION_START_PAGE) {
    return PAGINATION_START_PAGE;
  }

  if (initialPage > pagesCount) {
    return pagesCount;
  }

  return initialPage;
};
