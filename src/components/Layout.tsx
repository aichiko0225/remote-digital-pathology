// layout component
import React from 'react';
// import { Header } from './Header';
// import { Footer } from './Footer';
// import { Main } from './Main';
// import { Sidebar } from './Sidebar';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="container">
      {/* <Header /> */}
      <div className="main">
        {children}
        {/* <Sidebar /> */}
        {/* <Main>{children}</Main> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
}; 