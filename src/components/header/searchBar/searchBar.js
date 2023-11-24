import React from "react";
import "./searchBar.css"

function SearchBar(){
    return (
        <>
            <div className="search-container">
                <input type="text" className="search" placeholder="Search..." />
                <button type="submit"><i className="fa fa-search"></i></button>
            </div>
        </>
    ); 
}

export default SearchBar;