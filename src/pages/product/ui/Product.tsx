import {Icon} from '@/shared/ui/icon';
import {Breadcrumbs} from '@/widgets/breadcrumbs';
import ProductDetails from './product-details/ProductDetails';
import ProductSimilar from './product-similar/ProductSimilar';
import ProductReviews from './product-reviews/ProductReviews';

function Product() {
  return (
    <>
      <main>
        <div className="page-content">
          <Breadcrumbs pageTitle="Ретрокамера «Das Auge IV»" />

          <div className="page-content__section">
            <ProductDetails />
          </div>

          <div className="page-content__section">
            <ProductSimilar />
          </div>

          <div className="page-content__section">
            <ProductReviews />
          </div>
        </div>
      </main>

      <a className="up-btn" href="#header">
        <Icon title="icon-arrow2" width="12" height="18"/>
      </a>
    </>
  );
}

export default Product;
