import { ReactNode } from 'react';
import { Header } from '../components/Header';
import { Toaster } from 'sonner';

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main>
      <Header />
      <div className="container mx-auto">
        {children}
      </div>
      <Toaster />
    </main>
  );
};

export { Layout };
