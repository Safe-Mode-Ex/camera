import {ProductType} from '@/shared/dto';
import {FilterType} from '../enums';

export const typeMap: Record<FilterType, ProductType> = {
  [FilterType.Digital]: ProductType.Digital,
  [FilterType.Film]: ProductType.Film,
  [FilterType.Momentum]: ProductType.Momentum,
  [FilterType.Collection]: ProductType.Collection,
};
