import type {Dispatch, MouseEvent, SetStateAction} from 'react';
import {TonalButton} from '@/shared/ui/button';
import {CustomCheckbox, CustomRadio} from '@/shared/ui/input';
import {FilterCategory, FilterLevel, FilterType} from '../../model/enums';
import type {ChangeCheckableHandler, Filter, ResetFiltersHandler} from '../../model/types';
import {usePrice} from '../../model/hooks';
import CatalogFilterPrice from './catalog-filter-price/CatalogFilterPrice';
import './CatalogFilter.css';

interface Props {
  category: FilterCategory | null;
  types: FilterType[];
  levels: FilterLevel[];
  priceRange: [number, number];
  onRadioChange: ChangeCheckableHandler<Filter>;
  onCheckboxChange: ChangeCheckableHandler<Omit<Filter, 'category'>>;
  onResetFilters: ResetFiltersHandler;
  setMinPriceValue: Dispatch<SetStateAction<number | null>>;
  setMaxPriceValue: Dispatch<SetStateAction<number | null>>;
}

function CatalogFilter({
  category,
  types,
  levels,
  onRadioChange,
  onCheckboxChange,
  onResetFilters,
  priceRange,
  setMinPriceValue,
  setMaxPriceValue,
}: Props) {
  const [minPrice, maxPrice] = priceRange;
  const {
    valueRange,
    handleMinPriceChange,
    handleMaxPriceChange,
    handleMinPriceBlur,
    handleMaxPriceBlur,
    resetPriceValues,
  } = usePrice(minPrice, maxPrice, setMinPriceValue, setMaxPriceValue);
  const hasFilters = Boolean(category ?? (types.length || levels.length));
  const hasPrice = valueRange.some((value) => Boolean(value));
  const isResetBtnShown = hasFilters || hasPrice;

  const handleFiltersReset = (evt: MouseEvent<HTMLButtonElement>) => {
    resetPriceValues();
    onResetFilters(evt);
  };

  return (
    <div className="catalog-filter">
      <form action="#">
        <h2 className="visually-hidden">Фильтр</h2>

        <CatalogFilterPrice
          priceRange={priceRange}
          valueRange={valueRange}
          handleMinPriceChange={handleMinPriceChange}
          handleMaxPriceChange={handleMaxPriceChange}
          handleMinPriceBlur={handleMinPriceBlur}
          handleMaxPriceBlur={handleMaxPriceBlur}
        />

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

        {isResetBtnShown &&
          <TonalButton
            className="catalog-filter__reset-btn"
            onClick={handleFiltersReset}
          >Сбросить фильтры
          </TonalButton>}
      </form>
    </div>
  );
}

export default CatalogFilter;
