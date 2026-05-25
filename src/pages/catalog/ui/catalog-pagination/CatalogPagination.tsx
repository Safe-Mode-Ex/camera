import type {MouseEvent} from 'react';
import {useState} from 'react';
import classNames from 'classnames';
import {PAGINATION_COUNT} from '../../model';
import './CatalogPagination.css';

interface Props {
  currentPage: number;
  pagesCount: number;
  changePage: (page: number) => void;
}

function CatalogPagination({currentPage, pagesCount, changePage}: Props) {
  const initialPageSection = Math.floor((currentPage - 1) / PAGINATION_COUNT);
  const [currentPageSection, setCurrentPageSection] = useState(initialPageSection);
  const pageSectionStart = currentPageSection * PAGINATION_COUNT;
  const pages = new Array<number>(pagesCount)
    .fill(1)
    .map((page, index) => (page + index))
    .slice(pageSectionStart, pageSectionStart + PAGINATION_COUNT);
  const isFutherItemShown = (currentPageSection + 1) !== Math.ceil(pagesCount / PAGINATION_COUNT);
  const isBackItemShown = Boolean(currentPageSection);

  const handlePageChange = (page: number) => (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    changePage(page);
  };

  const getPrevPage = () => pageSectionStart + 1 - PAGINATION_COUNT > pagesCount ? pagesCount : pageSectionStart + 1 - PAGINATION_COUNT;
  const getNextPage = () => pageSectionStart + 1 + PAGINATION_COUNT > pagesCount ? pagesCount : pageSectionStart + 1 + PAGINATION_COUNT;

  const handleBackItemClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    setCurrentPageSection(currentPageSection - 1);
    changePage(getPrevPage());
  };

  const handleMextItemClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    setCurrentPageSection(currentPageSection + 1);
    changePage(getNextPage());
  };

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {isBackItemShown &&
          <li className="pagination__item">
            <a
              className="pagination__link pagination__link--text"
              href={getPrevPage().toString()}
              onClick={handleBackItemClick}
            >Назад
            </a>
          </li>}

        {pages.map((page) => (
          <li key={page} className="pagination__item">
            <a
              className={classNames(
                'pagination__link',
                {'pagination__link--active': currentPage === page},
              )}
              href={page.toString()}
              onClick={handlePageChange(page)}
            >{page}
            </a>
          </li>
        ))}

        {isFutherItemShown &&
          <li className="pagination__item">
            <a
              className="pagination__link pagination__link--text"
              href={getNextPage().toString()}
              onClick={handleMextItemClick}
            >Далее
            </a>
          </li>}
      </ul>
    </div>
  );
}

export default CatalogPagination;
