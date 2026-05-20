import CatalogSortOrder from './catalog-sort-order/CatalogSortOrder';
import CatalogSortType from './catalog-sort-type/CatalogSortType';
import './CatalogSort.css';

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
