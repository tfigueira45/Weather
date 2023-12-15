import  React, { useContext } from "react";
import { UnitContext } from "../../../contexts/UnitContext";
import './ToggleUnit.css'

function ToggleUnit(){
    const { unit, setUnit } = useContext(UnitContext)

    const handleClick = () => {
        setUnit(prev => !prev)
    }

    return (
        <div className="toggleUnit flex">
            <span>{!unit ? 'C' : 'F'}</span>
            <div className="divider"></div>
            <span onClick={handleClick} className="clickable">{!unit ? 'F' : 'C'}</span>
        </div>
    )
}

export default ToggleUnit;