
import Search from './Search'
import { useState } from 'react'

export default function Menu(props) {
    const { handleInput } = props


    return (
        <div>
            <div>
                {props.colors.map(color => <button onClick={() => props.handleColor(color)} key={color}>{color}</button>)}
                <button onClick={() => props.handleColor("")}>All</button>

            </div>


            <Search handleInput={handleInput} />
        </div>
    )
}
