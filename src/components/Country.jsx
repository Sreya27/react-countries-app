const Country = (props) => {

    const countryObject = props.countryObject;
    const renderList = (arr) => {
        return Object.entries(arr).reduce((acc, current) => {
            return acc.concat(current[1].name).concat(",");
        }, "");
    };

    return (
        <div className="grid place-content-evenly lg:grid-flow-col-dense lg:grid-cols-3 sm:grid-flow-row-dense">
            <img className="object-cover" src={countryObject.flags.svg} alt={`${countryObject.name} flag`}></img>
            <div className="sm:px-8 sm:pt-16 lg:px-4 lg:pt-0 lg:justify-self-center">
                <h3 className="Nunito text-3xl mb-4 font-extrabold">{`${countryObject.name}`}</h3>
                <p className="Nunito text-xl mb-4">Native Name: {`${countryObject.nativeName}`}</p>
                <p className="Nunito text-xl mb-4">Region: {`${countryObject.region}`}</p>
                <p className="Nunito text-xl mb-4">Capital: {`${countryObject.capital}`}</p>
                <p className="Nunito text-xl mb-4">Currencies: {`${renderList(countryObject.currencies)}`}</p>
            </div>
            <div className="sm:px-8 lg:px-0 lg:pt-12">
                <p className="Nunito text-xl mb-4">Population: {`${countryObject.population}`}</p>
                <p className="Nunito text-xl mb-4">Sub Region: {`${countryObject.subregion}`}</p>
                <p className="Nunito text-xl mb-4">Top Level Domain: {`${countryObject.topLevelDomain}`}</p>
                <p className="Nunito text-xl mb-4">Languages: {renderList(countryObject.languages)}</p>
            </div>
        </div>
    );
};

export default Country;