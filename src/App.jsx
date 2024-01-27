import { React, useState, useEffect, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./scss/app.scss";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Error from "./components/notFound/index";

export const SearchContext = createContext(" ");

function App() {
  const [inputChanged, setInputChanged] = useState("");
  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ inputChanged, setInputChanged }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="*" element={<Error />}></Route>
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
