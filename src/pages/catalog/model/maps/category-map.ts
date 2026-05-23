import {ProductCategory} from '@/shared/dto';
import {FilterCategory} from '../enums';

export const categoryMap: Record<FilterCategory, ProductCategory> = {
  [FilterCategory.Photo]: ProductCategory.Photo,
  [FilterCategory.Video]: ProductCategory.Video,
};
