import React from 'react';

import Header from './Header/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer/index';
import ScrollToTop from 'react-scroll-to-top';

// export const SearchContext = React.createContext('');              //Так работает контекст

const MainLayout: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
      <ScrollToTop
        style={{
          backgroundColor: '#424246',
          borderRadius: '50%',
          height: '65px',
          width: '65px',
          zIndex: 50,
        }}
        className="scrollCustom"
        smooth
        top={250}
        svgPath={''}
      />
    </div>
  );
};

export default MainLayout;
