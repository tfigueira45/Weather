import React, { useContext } from "react";
import { DataContext } from "../../contexts/api";
import SearchBar from './searchBar/searchBar'
import "./header.css";

function Header() {
  const data = useContext(DataContext);

  return (
    <header>
        <SearchBar />
        <span>{data.address}</span>
    </header>
  );
}

export default Header;
