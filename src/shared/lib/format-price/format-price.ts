const LOCALE_RU = 'ru-Ru';
const STYLE_DECIMAL = 'decimal';
const CURRENCY_RUB = 'RUB';

export const formatPrice = (price: number): string => new Intl.NumberFormat(
  LOCALE_RU,
  {style: STYLE_DECIMAL, currency: CURRENCY_RUB},
)
  .format(
    price,
  );
