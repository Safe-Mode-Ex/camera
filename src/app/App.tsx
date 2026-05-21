import {Route, Routes} from 'react-router-dom';
import {QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {Home} from '@/pages/home';
import {Catalog} from '@/pages/catalog';
import {AppRoute} from '@/shared/enums';
import {queryClient} from './api';
import {AppLayout} from './layouts';

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
