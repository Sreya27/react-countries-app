import { createContext,useState } from "react";

const CountryContext = createContext();

export const CountryContextProvider = ({children}) => {

    const [countryObject,setCountryObject] = useState({});

    return (
        <CountryContext.Provider value={{countryObject,setCountryObject}}>
            {children}
        </CountryContext.Provider>
    );
}

export default CountryContext;