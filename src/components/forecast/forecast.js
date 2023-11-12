import React, { useContext } from "react";
import { DataContext } from "../../contexts/api";
import "./forecast.css"

const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

function Forecast() {
  const day = new Date().getDay();
  let days = [];
  for (let i = 1; i <= 5; i++) {
    days.push(weekDays[(day + i) > 6 ? 7 - day : day + i]);
  }

  const data = useContext(DataContext);

  return data ? (
    <div className="forecast">
      {days.map((item, i) => {
        const {icon, temp, tempmin, tempmax} = data.days[i + 1]
        return (
            <li key={item}>
                <span>{item}</span>
                <img src={`./images/${icon}.png`} alt={icon} />
                <p>{temp}</p>
                <span>{`${tempmin}°/${tempmax}°`}</span>
            </li>
        );
      })}
    </div>
  ) : (
    <div className="forecast"></div>
  );
}

export default Forecast;
