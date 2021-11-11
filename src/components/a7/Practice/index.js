import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import ToDo from "./ToDo";
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