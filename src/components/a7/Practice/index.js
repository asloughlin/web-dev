import React from "react";
import {Link} from "react-router-dom";
import ReduxExamples from "./ReduxExamples/components";

const Practice = () => {
    return(
    <>
        <h1>Practice!</h1>
        <Link to="/a7/build/home">
            Build
        </Link>
        <ReduxExamples/>
    </>
    )
};

export default Practice;