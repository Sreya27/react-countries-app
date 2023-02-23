import { Fragment } from "react";


const Input = () => {
    return (
        <div className="p-8 grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1">
            <form className="drop-shadow-md h-10 w-auto xl:w-1/2 2xl:w-1/2 p-2 rounded-md bg-white">
                <input className="w-full" type="text" placeholder="Search for a Country..."></input>
            </form>
            <button className="drop-shadow-md mt-8 lg:mt-0 lg:justify-self-end sm:justify-self-start md:justify-self-start">
                <select className="p-2 h-10 rounded-md w-40" name="region" id="region">
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="America">America</option>
                    <option value="Africa">Africa</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </button>
        </div>
    );
}

export default Input;