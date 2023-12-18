import React, { useContext } from "react";
import { WeatherContext } from '../../contexts/WeatherContext';
import { images } from "../../assets/images/images";
import "./Forecast.css"
import { calcUnit } from "../../utils/calcUnit";
import { UnitContext } from "../../contexts/UnitContext";

const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

function Forecast() {
  const day = new Date().getDay();
  let days = [];
  for (let i = 1; i <= 4; i++) {
    days.push(weekDays[(day + i) % 7]);
  }

  const { data } = useContext(WeatherContext);
  const { unit } = useContext(UnitContext);

  return (
    <div className="forecast flex">
      {days.map((item, i) => {
        const {icon, temp} = data.days[i + 1]
        return (
            <li className="centered" key={item}>
                <span>{item}</span>
                <img src={images[icon.replaceAll(/-/g,'_')]} alt={icon} />
                <p>{calcUnit(unit, temp)}°</p>
            </li>
        );
      })}
    </div>
  );
}

export default Forecast;
