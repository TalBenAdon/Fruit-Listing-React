import React, { useContext, useState, } from 'react'
import Search from './Search'


export default function Menu(props) {


    return (
        <div>
            <div>
                {props.colors.map(color => <button onClick={() => props.handleColor(color)} key={color}>{color}</button>)}
                <button onClick={() => props.handleColor("")}>All</button>

            </div>


            <Search />
        </div>
    )
}
