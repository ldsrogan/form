import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignInPage from "./page/signin";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
