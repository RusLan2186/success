import React from 'react';

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routesItems } from '.';

const AppRouter = () => {
  return (
    <div>
      <Routes>
        {routesItems.map((route) => (
          <Route
            key={route.element}
            path={route.path}
            expect={route.expect}
            element={<route.element />}
          />
        ))}
      </Routes>
    </div>
  );
};

export default AppRouter;
