import React, { useState} from "react";
import "./searchBar.css"
import { searchWeatherData } from "../../../contexts/api";

function SearchBar(){
    const [value, setValue] = useState('');

    const handleChange = ({ target }) => {
        setValue(target.value)
    }

    const handleClick = async () => {
        const weatherData = await searchWeatherData(value);
        console.log(weatherData)
    }

    return (
        <>
            <div className="search-container">
                <input type="text" className="search" placeholder="Search..." onChange={handleChange} />
                <button type="submit" onClick={handleClick}><i className="fa fa-search"></i></button>
            </div>
        </>
    ); 
}

export default SearchBar;