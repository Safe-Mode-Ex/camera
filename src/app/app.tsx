import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home';
import { AppLayout } from './layouts';
import { Catalog } from '../pages/catalog';
import { AppRoute } from '../shared/enums';

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path={AppRoute.Catalog} element={<Catalog />}></Route>
      </Routes>
    </AppLayout>
  );
}

export default App;
