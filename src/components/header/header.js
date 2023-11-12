import React, { useContext } from "react";
import { DataContext } from "../../api";
import "./Header.css"

function Header(){
    const data = useContext(DataContext);

    return (
        <header>
            <span>{data.address}</span>
        </header>
    )
}

export default Header
