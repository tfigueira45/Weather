import React, { useState, useContext, useRef } from "react";
import "./searchBar.css"
import { searchWeatherData, DataContext } from "../../../contexts/api";

function SearchBar(){
    const { data, setData } = useContext(DataContext);
    const [value, setValue] = useState('');

    const previewData = useRef(data)

    const handleChange = ({ target }) => {
        setValue(target.value)
    }

    const handleClick = async () => {
        setData(null)
        const weatherData = await searchWeatherData(value);
        if(weatherData && weatherData !== "e"){
            setData(weatherData)
            previewData.current = weatherData
        } else {
            setData(previewData.current)
            alert("Local não encontrado!")
        }
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

