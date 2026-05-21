import {getProducts} from '@/entities/products';
import {useQuery} from '@tanstack/react-query';

export const useProducts = () => (
  useQuery({
    queryKey: ['produсts'],
    queryFn: () => getProducts(),
  })
);
