import type {ChangeEvent, FocusEvent} from 'react';
import {InputType} from '@/shared/enums';
import {CustomInput} from '@/shared/ui/input';

interface Props {
  priceRange: [number, number];
  valueRange: [number, number];
  handleMinPriceChange: ({target}: ChangeEvent<HTMLInputElement>) => void;
  handleMaxPriceChange: ({target}: ChangeEvent<HTMLInputElement>) => void;
  handleMinPriceBlur: ({target}: FocusEvent<HTMLInputElement>) => void;
  handleMaxPriceBlur: ({target}: FocusEvent<HTMLInputElement>) => void;
}

function CatalogFilterPrice({
  priceRange,
  valueRange,
  handleMinPriceChange,
  handleMaxPriceChange,
  handleMinPriceBlur,
  handleMaxPriceBlur,
}: Props) {
  const [minPrice, maxPrice] = priceRange;
  const [minValue, maxValue] = valueRange;
  const minPricePlaceholder = minPrice.toString() || 'от';
  const maxPricePlaceholder = maxPrice.toString() || 'до';

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Цена, ₽</legend>

      <div className="catalog-filter__price-range">
        <CustomInput
          type={InputType.number}
          name="price"
          placeholder={minPricePlaceholder}
          value={minValue || ''}
          onChange={handleMinPriceChange}
          onBlur={handleMinPriceBlur}
        />
        <CustomInput
          type={InputType.number}
          name="priceUp"
          value={maxValue || ''}
          placeholder={maxPricePlaceholder}
          onChange={handleMaxPriceChange}
          onBlur={handleMaxPriceBlur}
        />
      </div>
    </fieldset>
  );
}

export default CatalogFilterPrice;
