export function calcUnit(unit, value){
    return !unit ? value : (value * 1.8) + 32
}