import {TimeConstant} from '@/shared/enums';
import {QueryClient} from '@tanstack/react-query';

const STALE_MINUTES = 5;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: STALE_MINUTES * TimeConstant.SEC_IN_MIN * TimeConstant.MS_IN_SEC,
    },
  },
});
