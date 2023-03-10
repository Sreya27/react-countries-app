import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {

    const navigate = useNavigate();

    return (
        <Fragment>
            <button onClick={() => navigate(-1)} className="bg-secondary flex px-8 py-4 space-x-4 rounded-lg shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" strokeWidth="1.5" className="w-5 h-5 stroke-current stroke-1 mx-0">
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                </svg>
                <h5 className="text-text-color">Back</h5>
            </button>
        </Fragment>
    );
}

export default BackButton;