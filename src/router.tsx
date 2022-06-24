import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "page/signin";

const Router = () => {
  return;
  <BrowserRouter>
    <Routes>
      <Route path="/signin" element={<SignInPage />} />
    </Routes>
  </BrowserRouter>;
};

export default Router;
