import { InputType } from '../../../shared/enums/input-type';
import { TonalButton } from '../../../shared/ui/button';
import { CustomInput, CustomRadio } from '../../../shared/ui/input';

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

          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input type="checkbox" name="digital" checked /><span className="custom-checkbox__icon"></span><span className="custom-checkbox__label">Цифровая</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input type="checkbox" name="film" disabled /><span className="custom-checkbox__icon"></span><span className="custom-checkbox__label">Плёночная</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input type="checkbox" name="snapshot" /><span className="custom-checkbox__icon"></span><span className="custom-checkbox__label">Моментальная</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input type="checkbox" name="collection" checked disabled /><span className="custom-checkbox__icon"></span><span className="custom-checkbox__label">Коллекционная</span>
            </label>
          </div>
        </fieldset>

        <fieldset className="catalog-filter__block">
          <legend className="title title&#45;&#45;h5">Уровень</legend>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input type="checkbox" name="zero" checked /><span className="custom-checkbox__icon"></span><span className="custom-checkbox__label">Нулевой</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input type="checkbox" name="non-professional" /><span className="custom-checkbox__icon"></span><span className="custom-checkbox__label">Любительский</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input type="checkbox" name="professional" /><span className="custom-checkbox__icon"></span><span className="custom-checkbox__label">Профессиональный</span>
            </label>
          </div>
        </fieldset>

        <TonalButton className="catalog-filter__reset-btn">Сбросить фильтры</TonalButton>
      </form>
    </div>
  );
}

export default CatalogFilter;
