import React from "react"
import { Link } from "react-router-dom";

const Error = () => {
    return(
        <section className="section">
            <h2>404</h2>
            <p>OOPS! Page not found</p>
            <Link className="btn">Back Home</Link>
        </section>
    )
}
export default Error;