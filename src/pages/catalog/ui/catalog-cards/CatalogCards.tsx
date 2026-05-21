import {ProductCard} from '@/entities/product-card';
import './CatalogCards.css';

function CatalogCards() {
  return (
    <div className="cards catalog__cards">
      <ProductCard />
    </div>
  );
}

export default CatalogCards;
