import  React, { useContext } from "react";
import { UnitContext } from "../../../contexts/UnitContext";
import './ToggleUnit.css'

function ToggleUnit(){
    const {unit, setUnit} = useContext(UnitContext)

    const handleClick = () => {
        setUnit(prev => !prev)
    }

    return (
        <div className="toggleUnit flex">
            <small>°</small>
            <span>{!unit ? 'C' : 'F'}</span>
            <div className="divider"></div>
            <span onClick={handleClick} >{!unit ? 'F' : 'C'}</span>
        </div>
    )
}

export default ToggleUnit;