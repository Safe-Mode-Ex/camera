import {ProductType} from '@/shared/dto';
import {typeMap} from '../../maps';
import {FilterLevel, FilterType} from '../../enums';
import {hasProperFilter} from './has-proper-filter';

describe('hasProperFilter', () => {
  const filter = ProductType.Collection;

  it('should return true if has proper filter in filters array', () => {
    const filters = Object.values(FilterType);
    const expected = true;

    const result = hasProperFilter(filter, filters, typeMap);

    expect(result).toBe(expected);
  });

  it('should return false if has not proper filter in filters array', () => {
    const filters = Object.values(FilterLevel);
    const expected = false;

    const result = hasProperFilter(filter, filters, typeMap);

    expect(result).toBe(expected);
  });
});
