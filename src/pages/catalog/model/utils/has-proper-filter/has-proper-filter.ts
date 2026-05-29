import type {FilterCategory, FilterLevel, FilterType} from '../../enums';

export const hasProperFilter = (
  filter: string,
  filters: (FilterCategory | FilterType | FilterLevel)[],
  filterMap: Record<string, string>,
) => !filters.length || filters.some((filterItem) => filterMap[filterItem] === filter);
