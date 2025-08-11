import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import RootLayout from "./layout/RootLayout";
import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
