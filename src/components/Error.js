import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div className="error-container-page">
            <h1>Oops!</h1>
            <h2>Something went wrong</h2>
            <h3>{err.status}:{err.statusText}</h3>
            <a href="/React-Rest/" className="checkout-btn" style={{ marginTop: '24px', display: 'inline-block' }}>
                Back to Home
            </a>
        </div>
    );
};
export default Error
