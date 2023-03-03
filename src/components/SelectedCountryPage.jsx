import { Fragment, useContext } from "react";
import BackButton from "./BackButton";
import Country from "./Country";
import CountryContext from "../context/CountryContext";

const SelectedCountryPage = () => {

    const {countryObject} = useContext(CountryContext);

    return (
        <Fragment>
            <section className="bg-primary p-16 sm:p-8 md:p-8">
                <BackButton/>
            </section>
            <main className="bg-primary p-16 sm:p-8 md:p-8">
                <Country countryObject={countryObject}/>
            </main>
        </Fragment>
    );
};

export default SelectedCountryPage;