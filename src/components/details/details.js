import React, { useContext } from "react";
import { WeatherContext } from '../../contexts/WeatherContext';
import "./Details.css";


const list = [
  { label: "Umidade", key: "humidity", unity: "%" },
  { label: "Vento", key: "windspeed", unity: " km/h"  },
  { label: "Chuva", key: "precipprob", unity: "%"  },
  { label: "Visibilidade", key: "visibility", unity: " km"  },
];

function Details() {
  const { data } = useContext(WeatherContext);

  return (
    <div className="details flex">
      <ul className="flex">
          {list.map(({ label, key, unity }) => (
            <li className="flex" key={key}>
              <span className="label">{label}</span>
              <span className="value" >{`${key === "precipprob" ? data.days[0][key] : data.currentConditions[key]}${unity}`}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Details;
