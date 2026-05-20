import {Icon} from '../../../../../shared/ui/icon';

function CatalogSortOrder() {
  return (
    <div className="catalog-sort__order">
      <div className="catalog-sort__btn catalog-sort__btn&#45;&#45;up">
        <input type="radio" id="up" name="sort-icon" defaultChecked aria-label="По возрастанию" />
        <label htmlFor="up">
          <Icon title="icon-sort" width="16" height="14" />
        </label>
      </div>

      <div className="catalog-sort__btn catalog-sort__btn&#45;&#45;down">
        <input type="radio" id="down" name="sort-icon" aria-label="По убыванию" />
        <label htmlFor="down">
          <Icon title="icon-sort" width="16" height="14" />
        </label>
      </div>
    </div>
  );
}

export default CatalogSortOrder;
