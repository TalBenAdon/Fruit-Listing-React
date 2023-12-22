import React, { useState } from 'react'
import Content from './Content'
import Cart from './Cart'
import DataContext from './context/DataContext'
import data from './data.js'
import Categories from './Categories.jsx'

export default function Layout() {
    const [cart, setCart] = useState({})
    const [items, setItems] = useState([])


    return (
        <DataContext.Provider value={{ cart, setCart, items, setItems }}>

            <div className='cart-content-div'>
                <Cart />
                <Content />
                <Categories data={data} setItems={setItems} />
            </div>
        </DataContext.Provider>
    )
}
