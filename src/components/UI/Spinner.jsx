import React from "react";

import classes from "../UI/Spinner.module.css"

const Spinner = () => {
    return <div className={classes.spinner}>
            <span className={classes.loader}></span>
    </div>
}

export default Spinner;