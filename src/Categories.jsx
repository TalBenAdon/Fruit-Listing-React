import React, { useEffect, useState } from 'react'
import data from './data.js'
import { useContext } from 'react'
import DataContext from './context/DataContext.jsx'
export default function Categories({ setClicked }) {

    const { setItems } = useContext(DataContext)

    const [categories, setCategories] = useState([])

    useEffect(() => {
        setCategories(Object.keys(data))

    }, [])

    // const categories = Object.keys(data)

    // const handleCategories = (category) => {
    //     setItems(data[category])
    // }

    console.log(categories);
    return (
        <div>
            {categories.map(category => {
                return <button key={category} onClick={() => setClicked(category)}>{category}</button>
            })}
        </div>
    )
}
