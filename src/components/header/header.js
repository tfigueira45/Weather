import React, { useContext } from "react";
import { DataContext } from "../../contexts/api";
import "./header.css"

function Header(){
    const data = useContext(DataContext);

    return (
        <header>
            <span>{data.address}</span>
        </header>
    )
}

export default Header
