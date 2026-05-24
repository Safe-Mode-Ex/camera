import type {SortOrder} from '../enums';

export type SortOrderHandler = (type: SortOrder) => () => void;
