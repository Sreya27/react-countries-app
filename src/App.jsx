import { Fragment } from "react";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import Error from "./components/Error";
import Home from "./components/Home";
import SelectedCountryPage from "./components/SelectedCountryPage";
import data from "./components/data/data.json";

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
