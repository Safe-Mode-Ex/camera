import { ReactNode } from 'react';
import Header from './header/header';

type Props = {
  children: ReactNode;
}

function AppLayout({ children }: Props) {
  return (
    <>
      <Header />
      { children }
    </>
  );
}

export default AppLayout;
