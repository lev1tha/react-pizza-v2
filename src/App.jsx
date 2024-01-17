import { React, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./scss/app.scss";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart"
import Error from "./components/notFound/index";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element = {<Home/>}></Route>
              <Route path="/cart" element = {<Cart/>}></Route>
              <Route path="*" element = {<Error/>}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
