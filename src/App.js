import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Fullpost from "./pages/Fullpost";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/read" element={<Fullpost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
