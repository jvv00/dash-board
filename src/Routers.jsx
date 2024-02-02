import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/home/Home';
import Marketplace from './views/marketplace/Marketplace';
import DataTables from './views/datatables/DataTables';
import Profile from './views/profile/Profile';
import Signin from './views/signin/Signin';

const Routers = () => {
  const routeArr = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/marketplace',
      element: <Marketplace />,
    },
    {
      path: '/datatables',
      element: <DataTables />,
    },
    {
      path: '/profile',
      element: <Profile />,
    },
    {
      path: '/signin',
      element: <Signin />,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routeArr.map((item, index) => (
          <Route key={index} path={item.path} element={item.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
