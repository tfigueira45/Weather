import { createContext, useState, useEffect } from "react";
import { getLocationData } from "../services/LocationData";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getLocationData();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}