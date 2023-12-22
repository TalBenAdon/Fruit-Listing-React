import React from 'react'


export default function Categories({ data, setItems }) {


    const categories = Object.keys(data)

    const handleCategories = (category) => {
        setItems(data[category])
    }


    return (
        <div>
            {categories.map(category => {
                return <button key={category} onClick={() => handleCategories(category)}>{category}</button>
            })}
        </div>
    )
}
