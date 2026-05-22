import type {Product} from '@/shared/dto';

export const SortType = {
  Price: 'price',
  Popular: 'rating',
} as const satisfies Record<string, keyof Product>;

export type SortType = typeof SortType[keyof typeof SortType];
