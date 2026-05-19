import { Banners } from '../../../widgets/banners';
import { Breadcrumbs } from '../../../widgets/breadcrumbs';
import CatalogFilter from './catalog-filter';

function Catalog() {
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
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Catalog;
