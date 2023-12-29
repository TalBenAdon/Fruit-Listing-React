import React, { useEffect, useState } from 'react'
import data from './data.js'

import DataContext from './context/DataContext.jsx'
export default function Categories({ setClicked }) {
    const [categories, setCategories] = useState([])


    useEffect(() => {
        fetch("https://jbh-mockserver.onrender.com/categories")
            .then(response => response.json())
            .then(response => setCategories(response))

    }, [])


    console.log(categories);
    return (
        <div>
            {Object.keys(categories).map(category => {
                console.log(category)
                return <button key={category} onClick={() => setClicked(category)}><img src={categories[category]} /></button>
            })}
        </div>
    )
}
