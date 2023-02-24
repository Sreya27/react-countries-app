import { Fragment } from "react";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import Error from "./components/Error";
import Home from "./components/Home";

const App = () => {

  return (
    <Fragment>
      <Header/>
      <Home/>
    </Fragment>
  );
}

export default App;
