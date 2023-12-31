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



    return (
        <div>
            {Object.keys(categories).map(category => {

                return <button key={category} onClick={() => setClicked(category)}><a href={'/categories/' + category}><img src={categories[category]} /></a></button>
            })}
        </div>
    )
}
