import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { URL_PATH } from 'Utils';
import { HomeLayout } from '../Components';
import { About, Blog, Home } from './pages';

const RootRouter = () => {
  /* Router */
  /* State */
  const url_path = URL_PATH === '' ? '/' : URL_PATH;
  /* Functions */
  /* Hooks */
  /* Render */
  return (
    <Routes>
      <Route path={url_path} element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path={`${url_path}about`} element={<About />} />
        <Route path={`${url_path}blog`}>
          <Route index element={<Blog />} />
          <Route path=":blogId" element={<Blog />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default RootRouter;
