import {FilledButton} from '@/shared/ui/button';
import {Icon} from '@/shared/ui/icon';
import {PreviewImage} from '@/shared/ui/preview-image';
import {Rate} from '@/shared/ui/rate';
import {Tabs} from '@/shared/ui/tabs';
import './ProductDetails.css';
const {BASE_URL} = import.meta.env;

function ProductDetails() {
  const imageSource = {
    previewImg: `${BASE_URL}img/content/das-auge.jpg`,
    previewImg2x: `${BASE_URL}img/content/das-auge@2x.jpg`,
    previewImgWebp: `${BASE_URL}img/content/das-auge.webp`,
    previewImgWebp2x: `${BASE_URL}img/content/das-auge@2x.webp`,
  };
  return (
    <section className="product">
      <div className="container">
        <div className="product__img">
          <PreviewImage
            imageSource={imageSource}
            width="560"
            height="480"
            alt="Ретрокамера Das Auge IV"
          />
        </div>

        <div className="product__content">
          <h1 className="title title--h3">Ретрокамера «Das Auge IV»</h1>

          <Rate className="product__rate" rating={4} total={12} />

          <p className="product__price">
            <span className="visually-hidden">Цена:</span>73 450 ₽
          </p>

          <FilledButton>
            <Icon title="icon-add-basket" width="24" height="16" />
            Добавить в корзину
          </FilledButton>

          <Tabs className="product__tabs" defaultValue="description">
            <Tabs.Controls className="product__tabs-controls">
              <Tabs.Control value="specs">Характеристики</Tabs.Control>
              <Tabs.Control value="description">Описание</Tabs.Control>
            </Tabs.Controls>

            <Tabs.Content>
              <Tabs.Element value="specs">
                <ul className="product__tabs-list">
                  <li className="item-list"><span className="item-list__title">Артикул:</span>
                    <p className="item-list__text"> DA4IU67AD5</p>
                  </li>
                  <li className="item-list"><span className="item-list__title">Категория:</span>
                    <p className="item-list__text">Видеокамера</p>
                  </li>
                  <li className="item-list"><span className="item-list__title">Тип камеры:</span>
                    <p className="item-list__text">Коллекционная</p>
                  </li>
                  <li className="item-list"><span className="item-list__title">Уровень:</span>
                    <p className="item-list__text">Любительский</p>
                  </li>
                </ul>
              </Tabs.Element>

              <Tabs.Element value="description">
                <div className="product__tabs-text">
                  <p>Немецкий концерн BRW разработал видеокамеру Das Auge IV в&nbsp;начале 80-х годов, однако она до&nbsp;сих пор пользуется популярностью среди коллекционеров и&nbsp;яростных почитателей старинной техники.</p>
                  <p>Вы&nbsp;тоже можете прикоснуться к&nbsp;волшебству аналоговой съёмки, заказав этот чудо-аппарат. Кто знает, может с&nbsp;Das Auge IV&nbsp;начнётся ваш путь к&nbsp;наградам всех престижных кинофестивалей.</p>
                </div>
              </Tabs.Element>
            </Tabs.Content>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
