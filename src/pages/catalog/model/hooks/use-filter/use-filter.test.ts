import {renderHook} from '@testing-library/react';
import {useFilter} from './use-filter';
import {products} from '../../mocks';

describe('Hook: useFilter', () => {
  it('should return object with right properties', () => {
    const {result} = renderHook(() => useFilter(products));
    console.log(result);
  });
});
