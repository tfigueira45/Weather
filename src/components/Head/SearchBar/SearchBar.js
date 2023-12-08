import React, { useState, useContext, useRef } from "react";
import "./SearchBar.css"
import { DataContext } from '../../../contexts/Context';
import { searchWeatherData } from "../../../services/WeatherData"

function SearchBar(){
    const { data, setData } = useContext(DataContext);
    const [value, setValue] = useState('');

    const previewData = useRef(data);

    const handleChange = ({ target }) => {
        setValue(target.value);
    }

    const handleClick = async () => {
        setData(null);
        try {
            const weatherData = await searchWeatherData(value);
            setData(weatherData);
            previewData.current = weatherData;
        } catch (error) {
            setData(previewData.current);
            alert("Local não encontrado!");
            throw new Error(error);
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

