import React from "react";
import { Link } from "react-router-dom";





const ErrorPage = () => {
    return (
        <div>
            <h1>OOps, la pagina richiesta non esiste. Torna alla home. </h1>
            <button>
                <Link to='/'>
                    Torna alla home
                </Link>
            </button>
        </div>
    );
};


export default ErrorPage;