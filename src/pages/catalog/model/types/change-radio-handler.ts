import type {ChangeEvent} from 'react';

export type ChangeCheckableHandler<T> = (filterParam: keyof T) =>
({target}: ChangeEvent<HTMLInputElement>) => void;
