import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/navbar";
import ActionAreaCard from "./components/card";
import Home from "./components/home";
import Pricing from "./components/pricing"
import Blog from "./components/blog"

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/products" element={<ActionAreaCard />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
