import {ProductLevel} from '@/shared/dto';
import {FilterLevel} from '../enums';

export const levelMap: Record<FilterLevel, ProductLevel> = {
  [FilterLevel.Zero]: ProductLevel.Zero,
  [FilterLevel.Beginner]: ProductLevel.Beginner,
  [FilterLevel.Professional]: ProductLevel.Professional,
};
