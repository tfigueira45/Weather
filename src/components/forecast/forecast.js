import React, { useContext } from "react";
import { DataContext } from "../../contexts/api";
import "./forecast.css"

const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

function Forecast() {
  const day = new Date().getDay();
  let days = [];
  for (let i = 1; i <= 5; i++) {
    days.push(weekDays[(day + i) % 7]);
  }

  const { data } = useContext(DataContext);

  return (
    <div className="forecast flex">
      {days.map((item, i) => {
        const {icon, temp, tempmin, tempmax} = data.days[i + 1]
        return (
            <li className="flex" key={item}>
                <span>{item}</span>
                <img src={`Weather/images/${icon}.png`} alt={icon} />
                <p>{temp}°</p>
                <span className="small">{`${tempmin.toFixed(0)}°/${tempmax.toFixed(0)}°`}</span>
            </li>
        );
      })}
    </div>
  );
}

export default Forecast;
