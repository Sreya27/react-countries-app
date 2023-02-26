
const Input = (props) => {

    const handleFilter = (event) => {
        props.filterCountries(event.target.value);
    };

    const handleInput = (event) => {
        props.inputCountry(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.inputCountry(event.target[0].value);
    }

    return (
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1">
            <form onSubmit={handleSubmit} className="drop-shadow-md h-10 w-auto xl:w-1/2 2xl:w-1/2 p-2 rounded-md bg-white">
                <input onChange={handleInput} className="w-full" type="text" placeholder="Search for a Country..."></input>
            </form>
            <button className="drop-shadow-md mt-8 lg:mt-0 lg:justify-self-end sm:justify-self-start md:justify-self-start">
                <select className="p-2 h-10 rounded-md w-40" name="region" id="region" onChange={handleFilter}>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="america">America</option>
                    <option value="africa">Africa</option>
                    <option value="oceania">Oceania</option>
                </select>
            </button>
        </div>
    );
}

export default Input;