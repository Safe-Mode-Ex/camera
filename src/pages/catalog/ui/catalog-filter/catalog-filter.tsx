import { InputType } from '../../../../shared/enums';
import { TonalButton } from '../../../../shared/ui/button';
import { CustomCheckbox, CustomInput, CustomRadio } from '../../../../shared/ui/input';
import './catalog-filter.css';

function CatalogFilter() {
  return (
    <div className="catalog-filter">
      <form action="#">
        <h2 className="visually-hidden">Фильтр</h2>

        <fieldset className="catalog-filter__block">
          <legend className="title title&#45;&#45;h5">Цена, ₽</legend>

          <div className="catalog-filter__price-range">
            <CustomInput type={InputType.number} name="price" placeholder="от" />
            <CustomInput type={InputType.number} name="priceUp" placeholder="до" />
          </div>
        </fieldset>

        <fieldset className="catalog-filter__block">
          <legend className="title title&#45;&#45;h5">Категория</legend>

          <CustomRadio
            className="catalog-filter__item"
            name="category"
            value="photocamera"
            label="Фотокамера"
            checked
          />

          <CustomRadio
            className="catalog-filter__item"
            name="category"
            value="videocamera"
            label="Видеокамера"
          />
        </fieldset>

        <fieldset className="catalog-filter__block">
          <legend className="title title&#45;&#45;h5">Тип камеры</legend>

          <CustomCheckbox
            className="catalog-filter__item"
            name="digital"
            label="Цифровая"
            checked
          />

          <CustomCheckbox
            className="catalog-filter__item"
            name="film"
            label="Плёночная"
            disabled
          />

          <CustomCheckbox
            className="catalog-filter__item"
            name="snapshot"
            label="Моментальная"
          />

          <CustomCheckbox
            className="catalog-filter__item"
            name="collection"
            label="Коллекционная"
            checked
            disabled
          />
        </fieldset>

        <fieldset className="catalog-filter__block">
          <legend className="title title&#45;&#45;h5">Уровень</legend>

          <CustomCheckbox
            className="catalog-filter__item"
            name="zero"
            label="Нулевой"
            checked
          />

          <CustomCheckbox
            className="catalog-filter__item"
            name="non-professional"
            label="Любительский"
          />

          <CustomCheckbox
            className="catalog-filter__item"
            name="professional"
            label="Профессиональный"
          />
        </fieldset>

        <TonalButton className="catalog-filter__reset-btn">Сбросить фильтры</TonalButton>
      </form>
    </div>
  );
}

export default CatalogFilter;
