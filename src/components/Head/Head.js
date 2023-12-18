import React, { useContext } from "react";
import { WeatherContext } from '../../contexts/WeatherContext';
import SearchBar from './SearchBar/SearchBar'
import LocationButton from "./LocationButton/LocationButton";
import "./Head.css";

function Header() {
  const { data } = useContext(WeatherContext);

  return (
    <header>
        <div className="headContainer">
          <SearchBar />
          <LocationButton />
        </div>
        <span>{data.resolvedAddress.split(/,/).slice(0,2).join(',')}</span>
    </header>
  );
}

export default Header;
