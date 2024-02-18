import React from 'react'

const Button = ({value , onSquareClick}) => {
    return (
        <button onClick={onSquareClick}>{value}</button>
    )
}

export default Button