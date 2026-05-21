import {createApi} from '@/shared/api';
import {QueryClient} from '@tanstack/react-query';
import type {AxiosInstance} from 'axios';

declare module '@tanstack/react-query' {
  interface Register {
    queryMeta: {
      api: AxiosInstance;
    };
  }
}

const apiInstance = createApi();

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      meta: {
        api: apiInstance,
      },
    },
    mutations: {
      meta: {
        api: apiInstance,
      },
    },
  },
});
