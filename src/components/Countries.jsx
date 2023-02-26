import { Fragment, useEffect,useState } from "react";
import Card from "./Card";
import ErrorPage from "./ErrorPage";

const Countries = (props) => {
    const [countriesData, setCountriesData] = useState([]);
    const [flag,setFlag] = useState(true);

    const fieldsRequired = "fields=name,population,region,capital,flags,borders,cca3,currency,lang,subregion,tld";
    const domain = "https://restcountries.com/v3.1";
    const url = (props.selectedCountry)? domain+`/name/${props.selectedCountry}?`+fieldsRequired : domain+`/region/${props.selectedRegion}?`;

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
                    return <Card key={countryObject.cca3} name={countryObject.name.common} population={countryObject.population} region={countryObject.region} capital={countryObject.capital} img={countryObject.flags.svg}></Card>
            }) : <ErrorPage/>}
        </Fragment>
    );
};

export default Countries;