import React, { useContext, useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

import icon from "./constants";

import "leaflet/dist/leaflet.css";
import classes from '../styles/MapWrapper.module.css';
import IPContext from "../store/IpContext";

const MapWrapper = () => {

    const { data } = useContext(IPContext);

    const [position, setPosition] = useState({ lat: data.location.lat, lng: data.location.lng, });

    useEffect(() => {
        setPosition([data.location.lat, data.location.lng])
    }, [data]);

    const LocationMarker = ({ coords }) => {
        const map = useMap();
        map.flyTo(coords, map.getZoom());
        return null;
    };

    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} className={classes.map} >
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright" >OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={icon} >
                <Popup>
                    A pretty css3 popup. <br /> easily customizable
                </Popup>
            </Marker>
            <LocationMarker coords={position} />
        </MapContainer>
    )
}

export default MapWrapper;