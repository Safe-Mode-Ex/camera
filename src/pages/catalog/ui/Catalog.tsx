import type {ChangeEvent} from 'react';
import {useState} from 'react';
import {Banners} from '@/widgets/banners';
import {Breadcrumbs} from '@/widgets/breadcrumbs';
import CatalogCards from './catalog-cards/CatalogCards';
import CatalogFilter from './catalog-filter/CatalogFilter';
import CatalogPagination from './catalog-pagination/CatalogPagination';
import CatalogSort from './catalog-sort/CatalogSort';
import {useProducts} from '../model';
import {useSort} from '../model/hooks';
import type {Filter} from '../model/types';
import type {FilterLevel, FilterType} from '../model/enums';

function Catalog() {
  const {data: products} = useProducts();
  const initialFilter = {category: null, types: [], levels: []};

  const [activeFilter, setActiveFilter] = useState<Filter>(initialFilter);
  const changeRadioHandler = (filterParam: keyof Filter) =>
    ({target}: ChangeEvent<HTMLInputElement>) => {
      setActiveFilter((state) => ({
        ...state,
        [filterParam]: target.value,
      }));
    };
  const changeCheckboxHandler = (filterParam: Exclude<keyof Filter, 'category'>) =>
    ({target}: ChangeEvent<HTMLInputElement>) => {
      const {checked, value} = target as {
        checked: boolean, value: FilterType | FilterLevel
      };

      setActiveFilter((state) => ({
        ...state,
        [filterParam]: checked ?
          [...(state[filterParam] as (FilterType | FilterLevel)[]), value] :
          state[filterParam].filter((filter) => filter !== value),
      }));
    };

  const [sorted, sort, changeSortTypeHandler, changeSortOrderHandler] = useSort(products);

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
