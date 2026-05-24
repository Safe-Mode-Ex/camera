import type {ChangeEvent} from 'react';
import {InputType} from '@/shared/enums';
import {CustomInput} from '@/shared/ui/input';

interface Props {
  priceRange: [number, number];
}

function CatalogFilterPrice({priceRange}: Props) {
  const [minPrice, maxPrice] = priceRange;
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
          onChange={({target}: ChangeEvent<HTMLInputElement>) => {
            console.log(target.value);
          }}
        />
        <CustomInput
          type={InputType.number}
          name="priceUp"
          placeholder={maxPricePlaceholder}
          onChange={({target}: ChangeEvent<HTMLInputElement>) => {
            console.log(target.value);
          }}
        />
      </div>
    </fieldset>
  );
}

export default CatalogFilterPrice;
