import React, { Fragment, useContext } from "react";
import IPContext from "../store/IpContext";

import Header from './Header'
import IPInfo from "./IPInfo";
import MapWrapper from "./MapWrapper";
import Spinner from './UI/Spinner';

const App = () => {

    const {loading} = useContext(IPContext);

    return (
        <Fragment>
            <Header  />
            {!loading && <IPInfo />}
            {loading && <Spinner /> }
            <MapWrapper />
        </Fragment>
    )
}

export default App;