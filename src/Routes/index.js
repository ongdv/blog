import React from "react";
import {  Route, Routes } from "react-router-dom";
import { HomeLayout } from "../Components";
import { About, Blog, Home } from "./pages";

const RootRouter = () => {
  return (
    <Routes>
      <Route element={<HomeLayout/>}>
        <Route index  element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="blog" element={<Blog/>} />
        <Route path="blog/:blogId" element={<Blog/>} />
      </Route>
    </Routes>
  );
};

export default RootRouter;
