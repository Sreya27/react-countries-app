import { Fragment } from "react";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import SelectedCountryPage from "./components/SelectedCountryPage";
import { Routes, Route } from "react-router-dom";
import  data  from "./components/data/data.json";
import { CountryContextProvider } from "./context/CountryContext";

const App = () => {

  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<CountryContextProvider><Home/></CountryContextProvider>}/>
          <Route path="/:name" element={<CountryContextProvider><SelectedCountryPage/></CountryContextProvider>}/>
        </Routes>
    </>
  );
}

export default App;
