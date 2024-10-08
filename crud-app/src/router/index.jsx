import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/index.js";

export const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="*" element={<h1>404 - SERVER ERROR</h1>} />
    </Routes>
  );
};
