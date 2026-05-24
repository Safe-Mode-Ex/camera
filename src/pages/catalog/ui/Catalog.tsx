import {Banners} from '@/widgets/banners';
import {Breadcrumbs} from '@/widgets/breadcrumbs';
import CatalogCards from './catalog-cards/CatalogCards';
import CatalogFilter from './catalog-filter/CatalogFilter';
import CatalogPagination from './catalog-pagination/CatalogPagination';
import CatalogSort from './catalog-sort/CatalogSort';
import {useProducts} from '../model';
import {getPriceRange} from '../model/utils';
import {useFilter, usePriceFilter, useSort} from '../model/hooks';

function Catalog() {
  const {data: products} = useProducts();
  const [
    filteredProducts,
    activeFilter,
    changeRadioHandler,
    changeCheckboxHandler,
    resetFiltersHandler,
  ] = useFilter(products);
  const [
    priceRangedProducts,
    setMinPriceValue,
    setMaxPriceValue,
  ] = usePriceFilter(filteredProducts);
  const [
    sortedProducts,
    sort,
    changeSortTypeHandler,
    changeSortOrderHandler,
  ] = useSort(priceRangedProducts);

  const priceRange = getPriceRange(filteredProducts);

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
                  onResetFilters={resetFiltersHandler}
                />
              </div>

              <div className="catalog__content">
                <CatalogSort
                  sort={sort}
                  onSortTypeChange={changeSortTypeHandler}
                  onSortOrderChange={changeSortOrderHandler}
                />
                <CatalogCards products={sortedProducts} />
                <CatalogPagination />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Catalog;
