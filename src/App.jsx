import { Fragment } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import { useState, useEffect } from "react";
import Countries from "./components/Countries";

const App = () => {

  const [selectedRegion, setSelectedRegion] = useState("asia");

  const filterCountries = (region) => {
    setSelectedRegion(region);
  }

  return (
    <Fragment>
      <Header/>
      <section className="bg-gray-50">
        <Input filterCountries={filterCountries}/>
      </section>
      <section className="bg-gray-50 p-8 grid gap-y-10 gap-x-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        <Countries selectedRegion={selectedRegion}/>
      </section>
    </Fragment>
  );
}

export default App;
