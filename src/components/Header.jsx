import React from "react";

import '../styles/Header.module.css';
import Input from './Input';

const Header = () => {

    return (
        <header>
            <h1>Ip Address Tracker</h1>
            <Input  />
        </header>
    )
}

export default Header;