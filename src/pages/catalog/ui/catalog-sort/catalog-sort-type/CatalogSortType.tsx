import {SortType} from '@/pages/catalog/model/enums';
import type {SortTypeHandler} from '@/pages/catalog/model/types';

interface Props {
  type: SortType;
  onSortChange: SortTypeHandler;
}

function CatalogSortType({type, onSortChange}: Props) {
  return (
    <div className="catalog-sort__type">
      <div className="catalog-sort__btn-text">
        <input
          type="radio"
          id="sortPrice"
          name="sort"
          value={SortType.Price}
          checked={type === SortType.Price}
          onChange={onSortChange(SortType.Price)}
        />
        <label htmlFor="sortPrice">по цене</label>
      </div>

      <div className="catalog-sort__btn-text">
        <input
          type="radio"
          id="sortPopular"
          name="sort"
          value={SortType.Popular}
          checked={type === SortType.Popular}
          onChange={onSortChange(SortType.Popular)}
        />
        <label htmlFor="sortPopular">по популярности</label>
      </div>
    </div>
  );
}

export default CatalogSortType;
