import React from 'react';
import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <>
    {/* <div className='container-fluid text-center vstack gap-4 h-100'> */}
      <Header />
        {children}
      <Footer />
     {/* </div> */}
    </>
  );
};