import {Route, Routes} from 'react-router-dom';
import {QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {AppRoute} from '@/shared/enums';
import {Home} from '@/pages/home';
import {Catalog} from '@/pages/catalog';
import {Product} from '@/pages/product';
import {NotFound} from '@/pages/not-found';
import {AppLayout} from './layouts';
import {queryClient} from './providers';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppLayout>
        <Routes>
          <Route index element={<Home />} />
          <Route path={AppRoute.Catalog} element={<Catalog />} />
          <Route path={`${AppRoute.Product}/:id`} element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppLayout>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
