import { createContext, useState } from "react";

export const UnitContext = createContext();

export function UnitProvider({ children }) {
    const [unit, setUnit] = useState(false);

    return (
        <UnitContext.Provider value={{unit, setUnit}} >
            {children}
        </UnitContext.Provider>
    )
};