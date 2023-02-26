const Card = (props) => {

    const handleClick = () => {
        props.onClick(props);
    }

    return (
        <div onClick={handleClick} className="drop-shadow-md grid items-stretch">
            <img className="rounded-t-lg object-cover" src={props.img} alt={`${props.name} flag`}/>
            <div className="bg-white text-base rounded-b-md p-6">
                <h3 className="Nunito text-xl mb-6 font-extrabold">{`${props.name}`}</h3>
                <p className="Nunito">Population: {`${props.population}`}</p>
                <p className="Nunito">Region: {`${props.region}`}</p>
                <p className="Nunito">Capital: {`${props.capital}`}</p>
            </div>
        </div>
    );
}

export default Card;