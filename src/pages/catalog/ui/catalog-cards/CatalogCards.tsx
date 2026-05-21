import {ProductCard} from '@/entities/product-cards';
import './CatalogCards.css';
import type {Product} from '@/shared/dto';

interface Props {
  products: Product[];
}

function CatalogCards({products}: Props) {
  return (
    <div className="cards catalog__cards">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default CatalogCards;
