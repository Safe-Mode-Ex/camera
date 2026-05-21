import {FilledButton, TextButton} from '@/shared/ui/button';
import {PreviewImage} from '@/shared/ui/preview-image';
import {Rate} from '@/shared/ui/rate';
import './ProductCard.css';

function ProductCard() {
  return (
    <div className="product-card">
      <div className="product-card__img">
        <PreviewImage
          imageSource={{
            previewImg: 'img/content/das-auge.jpg',
            previewImg2x: 'img/content/das-auge@2x.jpg',
            previewImgWebp: 'img/content/das-auge.webp',
            previewImgWebp2x: 'img/content/das-auge@2x.webp',
          }}
          width="280"
          height="240"
          alt="Ретрокамера «Das Auge IV»"
        />
      </div>
      <div className="product-card__info">
        <Rate rating={3} total={23} className="product-card__rate" />
        <p className="product-card__title">Ретрокамера «Das Auge IV»</p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>73 450 ₽
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
