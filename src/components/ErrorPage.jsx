import { Fragment } from "react";

const ErrorPage = (props) => {
    return (
        <Fragment>
            <h1 className="Nunito text-text-color text-5xl font-extrabold text-center">Error 404!</h1>
            <p className="Nunito text-text-color text-3xl font-semibold text-center">Page Not found</p>
        </Fragment>
    );
};

export default ErrorPage;