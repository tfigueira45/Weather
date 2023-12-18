import React, { useState, useContext, useRef, } from "react";
import "./SearchBar.css"
import { WeatherContext } from "../../../contexts/WeatherContext";
import { searchWeatherData } from "../../../services/WeatherData"

function SearchBar(){
    const { data, setData } = useContext(WeatherContext);
    const [value, setValue] = useState('');

    const prevData = useRef(data);
    const input = useRef(null);

    const handleChange = ({ target }) => {
        setValue(target.value);
    }

    const handleClick = async () => {
        if(!input.current.value){
            alert('A entrada está vazia!');
            return;
        }
        setData(null);
        try {
            const weatherData = await searchWeatherData(value);
            setData(weatherData);
            prevData.current = weatherData;
        } catch (error) {
            setData(prevData.current);
            alert("O Local não pôde ser encontrado!");
            console.error(`Handle Click Error =\n`, error);
        }
    }

    return (
        <>
            <div className="search-container">
                <input 
                    type="text"
                    className="search" 
                    placeholder="Search..." 
                    onChange={handleChange} 
                    ref={input} 
                />
                <button type="submit" onClick={handleClick}><i className="fa fa-search"></i></button>
            </div>
        </>
    ); 
}

export default SearchBar;