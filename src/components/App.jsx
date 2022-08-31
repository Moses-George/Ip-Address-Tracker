import React, { Fragment, useContext } from "react";
import IPContext from "../store/IpContext";

import Header from './Header'
import IPInfo from "./IPInfo";
import MapWrapper from "./MapWrapper";
import Spinner from './UI/Spinner';

const App = () => {

    const {loading, error} = useContext(IPContext);

    return (
        <Fragment>
            <Header  />
            {!loading && !error &&<IPInfo />}
            {loading && !error && <Spinner /> }
            {error && <div className="error">
            <p>Error: {error}</p>
            <p>Fix: Enter a valid domain or IP address, also check your network connection </p>
            </div>}
            <MapWrapper />
        </Fragment>
    )
}

export default App;
