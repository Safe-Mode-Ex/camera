import {type MouseEvent} from 'react';
import {Banners} from '@/widgets/banners';
import {Breadcrumbs} from '@/widgets/breadcrumbs';
import {getPriceRange} from '../model/utils';
import {useFilter, usePagination, usePriceFilter, useProducts, useSort} from '../model/hooks';
import CatalogCards from './catalog-cards/CatalogCards';
import CatalogFilter from './catalog-filter/CatalogFilter';
import CatalogPagination from './catalog-pagination/CatalogPagination';
import CatalogSort from './catalog-sort/CatalogSort';

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
  const [
    pageProducts,
    currentPage,
    pagesCount,
    isPaginationShown,
    changePage,
  ] = usePagination(sortedProducts);

  const priceRange = getPriceRange(filteredProducts);

  const handleFiltersReset = (evt: MouseEvent<HTMLButtonElement>) => {
    resetFilter(evt);
    resetPriceFilter();
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

                {isPaginationShown &&
                  <CatalogPagination
                    currentPage={currentPage}
                    pagesCount={pagesCount}
                    changePage={changePage}
                  />}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Catalog;
