import type {Product} from '@/shared/dto';
import type {Filter} from '../../types';
import {categoryMap, levelMap, typeMap} from '../../maps';
import {hasProperFilter} from '../has-proper-filter/has-proper-filter';

export const filterProducts = (products: Product[], activeFilter: Filter): Product[] =>
  [...products].filter(({category, type, level}) => {
    const {category: filterCategory, types: filterTypes, levels: filterLevels} = activeFilter;
    const isProperCategory = !filterCategory || categoryMap[filterCategory] === category;

    return isProperCategory
        && hasProperFilter(type, filterTypes, typeMap)
        && hasProperFilter(level, filterLevels, levelMap);
  });
