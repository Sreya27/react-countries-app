import { Fragment,useState,useEffect } from "react";
import Input from "./Input";
import Countries from "./Countries";

const Home = () => {

    const [selectedRegion, setSelectedRegion] = useState("asia");
    const [selectedCountry,setSelectedCountry] = useState("");

    const filterCountries = (region) => {
        setSelectedRegion(region);
    }

    const handleInputCountry = (countryName) => {
        setSelectedCountry(countryName);
    };

    return (
        <Fragment>
            <section className="bg-gray-50 p-16 sm:p-8 md:p-8">
                <Input filterCountries={filterCountries} inputCountry={handleInputCountry}/>
            </section>
            <section className="bg-gray-50 p-16 grid sm:p-8 md:p-8 gap-y-10 gap-x-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                <Countries selectedRegion={selectedRegion} selectedCountry={selectedCountry}/>
            </section>
        </Fragment>
    );
};

export default Home;