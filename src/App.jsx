import { Fragment } from "react";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import SelectedCountryPage from "./components/SelectedCountryPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <Fragment>
      <Header/>
      <Home/>
      {/* <SelectedCountryPage countryObject={data[0]}/> */}
    </Fragment>
  );
}

export default App;
