import React, { useState, useContext, useRef } from "react";
import "./SearchBar.css"
import { WeatherContext } from "../../../contexts/WeatherContext";
import { searchWeatherData } from "../../../services/WeatherData"

function SearchBar(){
    const { data, setData } = useContext(WeatherContext);
    const [value, setValue] = useState('');

    const previewData = useRef(data);

    const handleChange = ({ target }) => {
        setValue(target.value);
    }

    const handleClick = async ({target}) => {
        if(target.value !== ''){
            setData(null);
            try {
                const weatherData = await searchWeatherData(value);
                setData(weatherData);
                previewData.current = weatherData;
            } catch (error) {
                setData(previewData.current);
                alert("O Local não pôde ser encontrado!");
                console.error(`Handle Click Error =\n`, error);
            }
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