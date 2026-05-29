import {PAGINATION_START_PAGE} from '../../config';
import {getCurrentPage} from './get-current-page';

describe('getCurrentPage', () => {
  const pagesCount = 3;

  it('should return initial page', () => {
    const pageFromQuery = 1;
    const initialPage = getCurrentPage(pagesCount, pageFromQuery);
    expect(initialPage).toBe(pageFromQuery);
  });

  it('should return PAGINATION_START_PAGE if pageFromQuery is 0', () => {
    const pageFromQuery = 0;
    const initialPage = getCurrentPage(pagesCount, pageFromQuery);
    expect(initialPage).toBe(PAGINATION_START_PAGE);
  });

  it(`should return PAGINATION_START_PAGE if pagesCOunt is 0
    or initialPage less then PAGINATION_START_PAGE`, () => {
    const pageFromQuery = -1;
    const initialPage = getCurrentPage(pagesCount, pageFromQuery);
    expect(initialPage).toBe(PAGINATION_START_PAGE);
  });

  it('should return pagesCount if initialPage greater then pagesCount', () => {
    const pageFromQuery = 4;
    const initialPage = getCurrentPage(pagesCount, pageFromQuery);
    expect(initialPage).toBe(pagesCount);
  });
});
