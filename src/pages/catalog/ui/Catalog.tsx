import {Banners} from '@/widgets/banners';
import {Breadcrumbs} from '@/widgets/breadcrumbs';
import CatalogCards from './catalog-cards/CatalogCards';
import CatalogFilter from './catalog-filter/CatalogFilter';
import CatalogPagination from './catalog-pagination/CatalogPagination';
import CatalogSort from './catalog-sort/CatalogSort';
import {useProducts} from '../model';
import {useFilter, useSort} from '../model/hooks';

function Catalog() {
  const {data: products} = useProducts();
  const [filtered, activeFilter, changeRadioHandler, changeCheckboxHandler, resetFiltersHandler] = useFilter(products);
  const [sorted, sort, changeSortTypeHandler, changeSortOrderHandler] = useSort(filtered);

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
                <CatalogCards products={sorted} />
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
