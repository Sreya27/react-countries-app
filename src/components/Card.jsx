const Card = () => {
    return (
        <div className="drop-shadow-md">
            <div>
                <img className="rounded-t-lg" src="https://flagcdn.com/al.svg" alt="Afghanistan flag"/>
            </div>
            <div className="bg-white text-base rounded-b-md p-6">
                <h3 className="Nunito text-xl mb-6 font-extrabold">Afghanistan</h3>
                <p className="Nunito">Population: 1234</p>
                <p className="Nunito">Region: Asia</p>
                <p className="Nunito">Capital: Kabul</p>
            </div>
        </div>
    );
}

export default Card;