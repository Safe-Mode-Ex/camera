import type {SortType} from '../enums';

export type SortTypeHandler = (type: SortType) => () => void;
