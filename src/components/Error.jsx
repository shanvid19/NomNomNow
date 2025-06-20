import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
    console.log(err);

    return (
        <div>
            <h1>OOPS!</h1>
            <h2>Something went wrong</h2>
            <br />
            <h3>{err.status} : {err.statusText}</h3>
        </div>
    )
}

export default Error;