import {FilledButton, TextButton} from '@/shared/ui/button';
import {PreviewImage} from '@/shared/ui/preview-image';
import {Rate} from '@/shared/ui/rate';
import type {Product} from '@/shared/dto';
import {formatPrice} from '@/shared/lib/format-price';
import './ProductCard.css';

interface Props {
  product: Product;
}

function ProductCard({product}: Props) {
  const {previewImg, previewImg2x, previewImgWebp, previewImgWebp2x, name, rating, reviewCount, price} = product;
  const formattedPrice = formatPrice(price);

  return (
    <div className="product-card">
      <div className="product-card__img">
        <PreviewImage
          imageSource={{
            previewImg,
            previewImg2x,
            previewImgWebp,
            previewImgWebp2x,
          }}
          width="280"
          height="240"
          alt={name}
        />
      </div>
      <div className="product-card__info">
        <Rate rating={rating} total={reviewCount} className="product-card__rate" />
        <p className="product-card__title">{name}</p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>{formattedPrice} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <FilledButton className="product-card__btn">Купить</FilledButton>
        <TextButton href="#">Подробнее</TextButton>
      </div>
    </div>
  );
}

export default ProductCard;
