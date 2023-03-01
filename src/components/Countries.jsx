import { Fragment, useEffect,useState } from "react";
import Card from "./Card";
import ErrorPage from "./ErrorPage";

const Countries = (props) => {
    const [countriesData, setCountriesData] = useState([]);
    const [flag,setFlag] = useState(true);

    const fieldsRequired = "fields=name,population,region,capital,flags,borders,cca3,currencies,languages,subregion,tld";
    const domain = "https://restcountries.com/v3.1";
    const url = (props.selectedCountry)? domain+`/name/${props.selectedCountry}?fullText=true&`+fieldsRequired : domain+`/region/${props.selectedRegion}?`+fieldsRequired;

    const getCountriesData = async () => {
        try 
        {
            const response = await fetch(url);
            if(!response.ok)
            {
                throw new Error("Failed");
            }
            setFlag(true);
            const responseData = await response.json();
            setCountriesData(responseData);
        }
        catch(error)
        {
            setFlag(false);
        }
    }
    
    useEffect(() => {
        getCountriesData();
    }, [props.selectedRegion,props.selectedCountry]);

    return (
        <Fragment>
            {flag? countriesData.map((countryObject) => {
                    return <Card key={countryObject.cca3} countryObject={countryObject}></Card> 
            }) : <ErrorPage/>}
        </Fragment>
    );
};

export default Countries;