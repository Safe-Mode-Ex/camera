import type {FilterCategory, FilterLevel, FilterType} from '../enums';

export interface Filter {
  category: FilterCategory | null;
  types: FilterType[];
  levels: FilterLevel[];
}
