import {Route, Routes} from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {Home} from '@/pages/home';
import {AppLayout} from './layouts';
import {Catalog} from '@/pages/catalog';
import {AppRoute} from '@/shared/enums';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppLayout>
        <Routes>
          <Route index element={<Home />} />
          <Route path={AppRoute.Catalog} element={<Catalog />} />
        </Routes>
      </AppLayout>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
