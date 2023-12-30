import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '.';
import { useSelector } from 'react-redux';

const AppRouter = () => {
  const password = useSelector((store) => store.enter.password);

  return (
    <div>
      {password ? (
        <Routes>
          {privateRoutes.map((route) => (
            <Route
              key={route.element}
              path={route.path}
              expect={route.expect}
              element={<route.element />}
            />
          ))}
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map((route) => (
            <Route
              key={route.element}
              path={route.path}
              expect={route.expect}
              element={<route.element />}
            />
          ))}
        </Routes>
      )}
    </div>
  );
};

export default AppRouter;
