import {InputType} from '@/shared/enums';
import {CustomInput} from '@/shared/ui/input';
import {usePrice} from '@/pages/catalog/model/hooks';

interface Props {
  priceRange: [number, number];
}

function CatalogFilterPrice({priceRange}: Props) {
  const [minPrice, maxPrice] = priceRange;
  const minPricePlaceholder = minPrice.toString() || 'от';
  const maxPricePlaceholder = maxPrice.toString() || 'до';
  const [
    minValue,
    maxValue,
    handleMinPriceChange,
    handleMaxPriceChange,
    handleMinPriceBlur,
    handleMaxPriceBlur,
  ] = usePrice(minPrice, maxPrice);

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
