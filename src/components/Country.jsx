const Country = (props) => {

    const {name, region, capital, currencies, population, subregion, tld, languages, flags} = props.countryObject;

    console.log(currencies);
    
    const renderList = (arr) => {
        return arr.reduce((acc, current) => {
            return acc.concat(current).concat(",");
        }, "");
    };

    return (
        <div className="grid place-content-evenly lg:grid-flow-col-dense lg:grid-cols-3 sm:grid-flow-row-dense">
            <img className="object-cover" src={flags.svg} alt={`${name.common} flag`}></img>
            <div className="sm:px-8 sm:pt-16 lg:px-4 lg:pt-0 lg:justify-self-center">
                <h3 className="Nunito text-3xl mb-4 font-extrabold">{`${name.common}`}</h3>
                <p className="Nunito text-xl mb-4">Native Name: {renderList(Object.values(name.nativeName))}</p>
                <p className="Nunito text-xl mb-4">Region: {`${region}`}</p>
                <p className="Nunito text-xl mb-4">Capital: {`${capital}`}</p>
                <p className="Nunito text-xl mb-4">Currencies: {`${renderList(Object.values(currencies))}`}</p>
            </div>
            <div className="sm:px-8 lg:px-0 lg:pt-12">
                <p className="Nunito text-xl mb-4">Population: {`${population}`}</p>
                <p className="Nunito text-xl mb-4">Sub Region: {`${subregion}`}</p>
                <p className="Nunito text-xl mb-4">Top Level Domain: {`${tld}`}</p>
                <p className="Nunito text-xl mb-4">Languages: {renderList(Object.values(languages))}</p>
            </div>
        </div>
    );
};

export default Country;