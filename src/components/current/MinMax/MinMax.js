import React, { useContext } from "react";
import arrow_min from "../../../assets/icons/arrow_min.svg";
import arrow_max from "../../../assets/icons/arrow_max.svg";
import { calcUnit } from "../../../utils/calcUnit";
import { UnitContext } from "../../../contexts/UnitContext";
import './MinMax.css';

function MinMax({data}){
    const indexs = ['tempmax', 'tempmin'] 
    const icons = [arrow_max, arrow_min]

    const { unit } = useContext(UnitContext);

    return (
        <div className="minMax centered">
            {indexs.map((item, i, arr) => {
                return (<div className="flex centered" key={i}>
                    <img src={icons[i]} alt={`arrow_${item}`} />
                    <p>{calcUnit(unit, data[item])}°</p>
                </div>)
            })}
        </div>
    );
};

export default MinMax;
