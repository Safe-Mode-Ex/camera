import {useState, type MouseEvent} from 'react';
import {useSearchParams} from 'react-router-dom';
import {Banners} from '@/widgets/banners';
import {Breadcrumbs} from '@/widgets/breadcrumbs';
import CatalogCards from './catalog-cards/CatalogCards';
import CatalogFilter from './catalog-filter/CatalogFilter';
import CatalogPagination from './catalog-pagination/CatalogPagination';
import CatalogSort from './catalog-sort/CatalogSort';
import {PRODUCTS_PER_PAGE, useProducts} from '../model';
import {getPriceRange} from '../model/utils';
import {useFilter, usePriceFilter, useSort} from '../model/hooks';

function Catalog() {
  const {data: products} = useProducts();
  const [
    filteredProducts,
    activeFilter,
    changeRadioHandler,
    changeCheckboxHandler,
    resetFilter,
  ] = useFilter(products);
  const [
    priceRangedProducts,
    setMinPriceValue,
    setMaxPriceValue,
    resetPriceFilter,
  ] = usePriceFilter(filteredProducts);
  const [
    sortedProducts,
    sort,
    changeSortTypeHandler,
    changeSortOrderHandler,
  ] = useSort(priceRangedProducts);

  const priceRange = getPriceRange(filteredProducts);

  const handleFiltersReset = (evt: MouseEvent<HTMLButtonElement>) => {
    resetFilter(evt);
    resetPriceFilter();
  };

  const [queryParams, setQueryParams] = useSearchParams();
  const initialPageQuery = queryParams.get('page') ?? '1';
  const initialPage = Number(initialPageQuery);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const pageStartIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const pageProducts = [...sortedProducts].slice(pageStartIndex, pageStartIndex + PRODUCTS_PER_PAGE);
  const pagesCount = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE);

  const changePage = (page: number) => {
    setCurrentPage(page);
    setQueryParams({page: page.toString()});
  };

  return (
    <main>
      <Banners />

      <div className="page-content">
        <Breadcrumbs />

        <section className="catalog">
          <div className="container">
            <h1 className="title title--h2">Каталог фото- и видеотехники</h1>

            <div className="page-content__columns">
              <div className="catalog__aside">
                <CatalogFilter
                  {...activeFilter}
                  setMinPriceValue={setMinPriceValue}
                  setMaxPriceValue={setMaxPriceValue}
                  priceRange={priceRange}
                  onRadioChange={changeRadioHandler}
                  onCheckboxChange={changeCheckboxHandler}
                  onResetFilters={handleFiltersReset}
                />
              </div>

              <div className="catalog__content">
                <CatalogSort
                  sort={sort}
                  onSortTypeChange={changeSortTypeHandler}
                  onSortOrderChange={changeSortOrderHandler}
                />
                <CatalogCards products={pageProducts} />
                <CatalogPagination
                  currentPage={currentPage}
                  pagesCount={pagesCount}
                  changePage={changePage}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Catalog;
