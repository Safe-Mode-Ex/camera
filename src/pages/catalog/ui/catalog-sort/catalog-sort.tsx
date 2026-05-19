import CatalogSortOrder from './catalog-sort-order/catalog-sort-order';
import CatalogSortType from './catalog-sort-type/catalog-sort-type';
import './catalog-sort.css';

function CatalogSort() {
  return (
    <div className="catalog-sort">
      <form action="#">
        <div className="catalog-sort__inner">
          <p className="title title&#45;&#45;h5">Сортировать:</p>
          <CatalogSortType />
          <CatalogSortOrder />
        </div>
      </form>
    </div>
  );
}

export default CatalogSort;
