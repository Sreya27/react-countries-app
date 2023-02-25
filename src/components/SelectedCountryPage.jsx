import { Fragment } from "react";
import BackButton from "./BackButton";
import Country from "./Country";

const SelectedCountryPage = (props) => {
    return (
        <Fragment>
            <section className="bg-gray-50 p-16 sm:p-8 md:p-8">
                <BackButton/>
            </section>
            <section className="bg-gray-50 p-16 sm:p-8 md:p-8">
                <Country countryObject={props.countryObject}/>
            </section>
        </Fragment>
    );
};

export default SelectedCountryPage;