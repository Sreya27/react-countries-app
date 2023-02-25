import { Fragment, useEffect,useState } from "react";
import Card from "./Card";

const Countries = (props) => {
    const [countriesData, setCountriesData] = useState([]);
    
    useEffect(() => {
        try{
        const getCountriesData = async () => {
            const response = await fetch(`https://restcountries.com/v3.1/region/${props.selectedRegion}?fields=name,population,region,capital,flags,borders,cca3,currency,lang,subregion,tld`);
            const responseData = await response.json();
            setCountriesData(responseData);
        }
        getCountriesData();
        }catch(error)
        {
        console.trace(error);
        }
    }, [props.selectedRegion]);

    return (
        <Fragment>
            {countriesData.map((countryObject) => {
            return <Card key={countryObject.cca3} name={countryObject.name.common} population={countryObject.population} region={countryObject.region} capital={countryObject.capital} img={countryObject.flags.svg}></Card>
            })}
        </Fragment>
    );
};

export default Countries;