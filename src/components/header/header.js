import React, { useContext } from "react";
import { DataContext } from "../../contexts/api";
import "./header.css"

function Header(){
    const data = useContext(DataContext);

    return data ? (
        <header>
            <span>{data.address}</span>
        </header>
    ) : (
        <header></header>
    )
}

export default Header
