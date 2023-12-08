import React from 'react'
import { useState } from 'react'


export default function Item(props) {
    const [counter, setCount] = useState(0)

    const handleMinus = () => {
        if (counter > 0)
            setCount(counter - 1)
    }

    return (
        <div className='fruit'>
            <div>{props.name}</div>
            <div>{props.emoji}</div>
            <div>{props.price}</div>
            <button onClick={() => setCount(counter + 1)}>+</button>
            <span>{counter}</span>
            <button onClick={handleMinus}>-</button>
        </div>
    )
}
