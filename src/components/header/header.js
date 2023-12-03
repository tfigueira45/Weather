import React, { useContext } from "react";
import { DataContext } from "../../contexts/api";
import SearchBar from './searchBar/searchBar'
import "./header.css";

function Header() {
  const { data } = useContext(DataContext);

  console.log(data)

  return (
    <header>
        <SearchBar />
        <span>{data.resolvedAddress.split(/,/).slice(0,2).join(',')}</span>
    </header>
  );
}

export default Header;
