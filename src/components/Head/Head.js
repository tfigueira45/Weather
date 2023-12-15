import React, { useContext } from "react";
import { WeatherContext } from '../../contexts/WeatherContext';
import SearchBar from './SearchBar/SearchBar'
import "./Head.css";

function Header() {
  const { data } = useContext(WeatherContext);

  return (
    <header>
        <SearchBar />
        <span>{data.resolvedAddress.split(/,/).slice(0,2).join(',')}</span>
    </header>
  );
}

export default Header;
