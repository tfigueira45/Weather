import { createContext, useState, useEffect } from "react";
import { getLocationData } from "../services/LocationData";

export const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getLocationData();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <WeatherContext.Provider value={{ data, setData }}>
      {children}
    </WeatherContext.Provider>
  );
};