function CatalogSortType() {
  return (
    <div className="catalog-sort__type">
      <div className="catalog-sort__btn-text">
        <input type="radio" id="sortPrice" name="sort" defaultChecked />
        <label htmlFor="sortPrice">по цене</label>
      </div>
      <div className="catalog-sort__btn-text">
        <input type="radio" id="sortPopular" name="sort" />
        <label htmlFor="sortPopular">по популярности</label>
      </div>
    </div>
  );
}

export default CatalogSortType;
