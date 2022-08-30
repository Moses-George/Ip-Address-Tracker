import React, { useContext, useState, useRef } from "react";

import { ReactComponent as Arrow } from "../Assets/images/icon-arrow.svg";
import IPContext from "../store/IpContext";
import '../styles/Input.module.css';

const Input = (props) => {

    const [userInput, setUserInput] = useState("");
    const InputRef = useRef();

    const { getData } = useContext(IPContext);

    const submitIP = (e) => {
        e.preventDefault();
        if (userInput.trim().length === 0) {
            InputRef.current.focus();
            return;
        } else {
            getData(userInput);
            setUserInput("");
        }
    }


    return (
        <form onSubmit={submitIP} >
            <input
                ref={InputRef}
                onChange={(e) => setUserInput(e.target.value)}
                value={userInput}
                placeholder="Search for any Ip address or domain" />
            <button>
                <Arrow />
            </button>
        </form>
    )
}

export default Input;