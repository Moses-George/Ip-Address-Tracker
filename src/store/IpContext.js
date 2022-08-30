import React from "react";

const IPContext = React.createContext({
    data: {},
    getData: (newData) => {},
    loading: false,
});

export default IPContext;