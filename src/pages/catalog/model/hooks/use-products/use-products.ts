import {useQuery} from '@tanstack/react-query';
import {getProducts} from '@/entities/products';

export const useProducts = () => (
  useQuery({
    queryKey: ['produсts'],
    queryFn: () => getProducts(),
  })
);
