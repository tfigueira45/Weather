import React, { useContext } from "react";
import { DataContext } from "../../api";

const conditions = [
  { label: "Umidade do Ar", key: "humidity" },
  { label: "Sensação Térmica", key: "feelslike" },
  { label: "Velocidadde do Vento", key: "windspeed" },
  { label: "índice de UV", key: "uvindex" },
  { label: "Chance de Chuva", key: "precipprob" },
  { label: "Visibilidade", key: "visibility" },
];

function Details() {
  const data = useContext(DataContext);

  return data ? (
    <div className="details">
      <ul>
        {conditions.map(({ label, key }) => (
          <li key={key}>
            <span>{label}</span>
            <span>{data.currentConditions[key]}</span>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div className="details"></div>
  );
}

export default Details;
