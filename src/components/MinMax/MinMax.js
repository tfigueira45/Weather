import React from "react";
import arrow_min from "../../assets/icons/arrow_min.svg";
import arrow_max from "../../assets/icons/arrow_max.svg";
import './MinMax.css';

function MinMax({data}){
    const indexs = ['tempmin', 'tempmax'] 
    const icons = [arrow_min, arrow_max]

    return (
        <div className="minMax flex">
            {indexs.map((item, i, arr) => {
                return (<div className="flex" key={i}>
                    <img src={icons[i]} alt={`arrow_${item}`} />
                    <p>{data[item]}°</p>
                </div>)
            })}
        </div>
    );
};

export default MinMax;
