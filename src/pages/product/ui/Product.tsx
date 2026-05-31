import {useParams} from 'react-router-dom';
import {Icon} from '@/shared/ui/icon';
import {Breadcrumbs} from '@/widgets/breadcrumbs';
import {useProduct} from '../model/hooks';
import ProductDetails from './product-details/ProductDetails';
import ProductSimilar from './product-similar/ProductSimilar';
import ProductReviews from './product-reviews/ProductReviews';

function Product() {
  const {id} = useParams();
  const {data: product} = useProduct(Number(id));

  if (!product) {
    return null;
  }

  const {name} = product;

  return (
    <>
      <main>
        <div className="page-content">
          <Breadcrumbs pageTitle={name} />

          <div className="page-content__section">
            <ProductDetails {...product} />
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
