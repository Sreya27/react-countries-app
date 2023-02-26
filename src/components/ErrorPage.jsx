import { Fragment } from "react";

const ErrorPage = (props) => {
    return (
        <Fragment>
            <h1 className="Nunito text-5xl font-extrabold text-center">Error 404!</h1>
            <p className="Nunito text-3xl font-semibold text-center">Page Not found</p>
        </Fragment>
    );
};

export default ErrorPage;