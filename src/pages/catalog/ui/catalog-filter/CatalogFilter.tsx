import type {ChangeEvent} from 'react';
import {InputType} from '@/shared/enums';
import {TonalButton} from '@/shared/ui/button';
import {CustomCheckbox, CustomInput, CustomRadio} from '@/shared/ui/input';
import {FilterCategory, FilterLevel, FilterType} from '../../model/enums';
import type {ChangeCheckableHandler, Filter, ResetFiltersHandler} from '../../model/types';
import './CatalogFilter.css';

interface Props {
  category: FilterCategory | null;
  types: FilterType[];
  levels: FilterLevel[];
  onRadioChange: ChangeCheckableHandler<Filter>;
  onCheckboxChange: ChangeCheckableHandler<Omit<Filter, 'category'>>;
  onResetFilters: ResetFiltersHandler;
}

function CatalogFilter({category, types, levels, onRadioChange, onCheckboxChange, onResetFilters}: Props) {
  const hasFilters = Boolean(category ?? (types.length || levels.length));

  return (
    <div className="catalog-filter">
      <form action="#">
        <h2 className="visually-hidden">Фильтр</h2>

        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Цена, ₽</legend>

          <div className="catalog-filter__price-range">
            <CustomInput
              type={InputType.number}
              name="price"
              placeholder="от"
              onChange={({target}: ChangeEvent<HTMLInputElement>) => {
                console.log(target.value);
              }}
            />
            <CustomInput
              type={InputType.number}
              name="priceUp"
              placeholder="до"
              onChange={({target}: ChangeEvent<HTMLInputElement>) => {
                console.log(target.value);
              }}
            />
          </div>
        </fieldset>

        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Категория</legend>

          <CustomRadio
            className="catalog-filter__item"
            name="category"
            value={FilterCategory.Photo}
            label="Фотокамера"
            checked={category === FilterCategory.Photo}
            onChange={onRadioChange('category')}
          />

          <CustomRadio
            className="catalog-filter__item"
            name="category"
            value={FilterCategory.Video}
            label="Видеокамера"
            checked={category === FilterCategory.Video}
            onChange={onRadioChange('category')}
          />
        </fieldset>

        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Тип камеры</legend>

          <CustomCheckbox
            className="catalog-filter__item"
            name="digital"
            label="Цифровая"
            value={FilterType.Digital}
            checked={types.includes(FilterType.Digital)}
            onChange={onCheckboxChange('types')}
          />

          <CustomCheckbox
            className="catalog-filter__item"
            name="film"
            label="Плёночная"
            value={FilterType.Film}
            disabled={category === FilterCategory.Video}
            checked={types.includes(FilterType.Film)}
            onChange={onCheckboxChange('types')}
          />

          <CustomCheckbox
            className="catalog-filter__item"
            name="snapshot"
            label="Моментальная"
            value={FilterType.Momentum}
            disabled={category === FilterCategory.Video}
            checked={types.includes(FilterType.Momentum)}
            onChange={onCheckboxChange('types')}
          />

          <CustomCheckbox
            className="catalog-filter__item"
            name="collection"
            label="Коллекционная"
            value={FilterType.Collection}
            checked={types.includes(FilterType.Collection)}
            onChange={onCheckboxChange('types')}
          />
        </fieldset>

        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Уровень</legend>

          <CustomCheckbox
            className="catalog-filter__item"
            name="zero"
            label="Нулевой"
            value={FilterLevel.Zero}
            checked={levels.includes(FilterLevel.Zero)}
            onChange={onCheckboxChange('levels')}
          />

          <CustomCheckbox
            className="catalog-filter__item"
            name="non-professional"
            label="Любительский"
            value={FilterLevel.Beginner}
            checked={levels.includes(FilterLevel.Beginner)}
            onChange={onCheckboxChange('levels')}
          />

          <CustomCheckbox
            className="catalog-filter__item"
            name="professional"
            label="Профессиональный"
            value={FilterLevel.Professional}
            checked={levels.includes(FilterLevel.Professional)}
            onChange={onCheckboxChange('levels')}
          />
        </fieldset>

        {hasFilters &&
          <TonalButton
            className="catalog-filter__reset-btn"
            onClick={onResetFilters()}
          >Сбросить фильтры
          </TonalButton>}
      </form>
    </div>
  );
}

export default CatalogFilter;
