
export const incrementUnitOfTime = unit => {
    unit ++
    return unit === 60 ? 0 : unit
}

export const displayUnitOfTime = unit => {
    return unit < 10 ? `0${unit}` : `${unit}`
}
