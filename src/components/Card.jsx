import { Link } from "react-router-dom";
import { useContext } from "react";
import CountryContext from "../context/CountryContext";

const Card = ({countryObject}) => {

    const {setCountryObject} = useContext(CountryContext);

    const handleClick = (event) => {
        console.log(event.target.innerHTML);
        console.log(countryObject);
        setCountryObject(countryObject);
    }

    return (
            <div className="drop-shadow-md grid items-stretch">
                <img className="rounded-t-lg object-cover" src={countryObject.flags.svg} alt={`${countryObject.name.common} flag`}/>
                <div className="bg-white text-base rounded-b-md p-6">
                    <Link onClick={handleClick} to={`/${countryObject.name.common}`}><h3 className="Nunito text-xl mb-6 font-extrabold">{`${countryObject.name.common}`}</h3></Link>
                    <p className="Nunito">Population: {`${countryObject.population}`}</p>
                    <p className="Nunito">Region: {`${countryObject.region}`}</p>
                    <p className="Nunito">Capital: {`${countryObject.capital}`}</p>
                </div>
            </div>
    );
}

export default Card;