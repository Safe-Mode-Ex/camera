import { ReactNode } from 'react';
import Header from './header/header';
import Footer from './footer/footer';

type Props = {
  children: ReactNode;
}

function AppLayout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default AppLayout;
