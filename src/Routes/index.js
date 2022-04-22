import React from 'react';
import { Route, Routes, useLocation, useParams } from 'react-router-dom';
import { HomeLayout } from '../Components';
import { About, Blog, Home } from './pages';

const RootRouter = () => {
  /* Router */
  const location = useLocation();
  const params = useParams();

  console.log(location);
  console.log(params);
  /* State */
  /* Functions */
  /* Hooks */
  /* Render */
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:blogId" element={<Blog />} />
      </Route>
    </Routes>
  );
};

export default RootRouter;
