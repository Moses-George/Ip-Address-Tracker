import { useState, useEffect } from "react";
import IPContext from "./IpContext";

const IPContextProvider = ({ children }) => {

    const [data, setData] = useState({
        ip:"192.212.174.101",
        location: {
            city:"Brookylyn",
            region:"NY",
            postalCode: "10001",
            timezone: "-5:00",
            lat: "",
            lng:""
        },
        isp: "Starlight Starlink",
    });

    const [isLoading, setIsLoading] = useState(false);

    const baseUrl = `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_API_KEY}` ;

    const ipValidity = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    let url;

    useEffect(() => {
        setIsLoading(true);
        fetch(baseUrl)
            .then(response => response.json())
            .then(data => {
                  setData(data);
                  setIsLoading(false);
                })
    }, [baseUrl]);

    const fetchData = async (userInput) => {
        setIsLoading(true);
        if (ipValidity.test(userInput)) {
            url = baseUrl + '&ipAddress=' + userInput;
        } else {
            url = baseUrl + '&domain=' + userInput;
        }
        try {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    }

    const values = {
        data: data,
        getData: fetchData,
        loading: isLoading
    }

    return (
        <IPContext.Provider value={values} >
            {children}
        </IPContext.Provider>
    )
}

export default IPContextProvider;