import React, { useContext } from "react";
import IPContext from "../store/IpContext";

import classes from '../styles/IPInfo.module.css';

const IPInfo = () => {

    const {data} = useContext(IPContext);

    return (
        <div className={classes.ip}>
            <div className={classes['ip-info']}>
                <div className={classes.info}>
                    <p>IP ADDRESS</p>
                    <h2>{data.ip}</h2>
                </div>
                <div className={classes.info}>
                    <p>LOCATION</p>
                    <h2>{data.location.city}, {data && data.location.region} {data && data.location.postalCode}</h2>
                </div>
                <div className={classes.info}>
                    <p>TIMEZONE</p>
                    <h2>UTC {data && data.location.timezone}</h2>
                </div>
                <div className={classes.info}>
                    <p>ISP</p>
                    <h2>{data && data.isp}</h2>
                </div>
            </div>
        </div>
    )
}

export default IPInfo;