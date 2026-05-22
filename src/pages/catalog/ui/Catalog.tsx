import {useState} from 'react';
import {Banners} from '@/widgets/banners';
import {Breadcrumbs} from '@/widgets/breadcrumbs';
import CatalogCards from './catalog-cards/CatalogCards';
import CatalogFilter from './catalog-filter/CatalogFilter';
import CatalogPagination from './catalog-pagination/CatalogPagination';
import CatalogSort from './catalog-sort/CatalogSort';
import {useProducts} from '../model';
import type {Sort} from '../model/types';
import {SortOrder, SortType} from '../model/enums';

function Catalog() {
  const {data: products} = useProducts();
  const [sort, setSort] = useState<Sort>({type: SortType.Price, order: SortOrder.Up});

  if (!products) {
    return null;
  }

  const preparedProducts = [...products].sort((firstProduct, secondProduct) => {
    switch (sort.order) {
      case SortOrder.Down:
        return secondProduct[sort.type] - firstProduct[sort.type];
      default:
        return firstProduct[sort.type] - secondProduct[sort.type];
    }
  });

  const changeSortTypeHandler = (type: SortType) => () => {
    setSort((state) => ({
      ...state,
      type,
    }));
  };

  const changeSortOrderHandler = (order: SortOrder) => () => {
    setSort((state) => ({
      ...state,
      order,
    }));
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
                <CatalogFilter />
              </div>

              <div className="catalog__content">
                <CatalogSort
                  sort={sort}
                  onSortTypeChange={changeSortTypeHandler}
                  onSortOrderChange={changeSortOrderHandler}
                />
                <CatalogCards products={preparedProducts} />
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
