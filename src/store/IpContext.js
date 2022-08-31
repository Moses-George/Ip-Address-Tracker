import React from "react";

const IPContext = React.createContext({
    data: {},
    getData: (newData) => {},
    loading: false,
    error: null
});

export default IPContext;